import { useEffect, useState } from "react";
import socket from "../../socket.js";
import axios from "axios";
import { baseUrl } from "@/Hooks/useSignup.js";

type User = {
  id: number;
  fullName: string;
  profilePic: string;
}


type Message = {
  messageId: number;
  messageContent: string;
  groupId: number;
  createdAt: string;
  creator: User;
  messageCreatorId: number;
};

const MessageView = ({ groupId }: { groupId: number }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const loadMoreMessages = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/api/groups/messages/${groupId}?limit=${limit}&offset=${offset}`,
      );
      const newMessages = response.data.data;
      setMessages((prev) => [...newMessages, ...prev]);
      const total = response.data.meta.total;
      setHasMore(offset + newMessages.length < total);
      setOffset((prev) => prev + newMessages.length);
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  return (
    <div className="message-container">
      <button
        onClick={loadMoreMessages}
        disabled={loading || !hasMore}
        className="load-more-btn"
      >
        {loading ? "Loading..." : hasMore ? "Load More" : "No More Messages"}
      </button>

      <div className="flex flex-col gap-4">
        {messages.map((msg) => (
          <div className="flex items-start gap-2.5" key={msg.messageId}>
            <img
              className="w-8 h-8 rounded-full"
              src={msg.creator.profilePic}
              alt="User"
            />
            <div className="flex flex-col w-full sm:w-[500px] md:w-[800px]">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-yellow-600">
                  {msg.creator.fullName}
                </span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  {msg.createdAt}
                </span>
              </div>
              <div className="flex flex-col leading-[1.5] py-2 border-gray-200 rounded-e-xl rounded-es-xl text-gray-300">
                <p className="text-md">{msg.messageContent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MessageView;
