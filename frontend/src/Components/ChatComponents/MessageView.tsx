import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import socket from "../../socket.js";
import axios from "axios";
import { baseUrl } from "@/Hooks/useSignup.js";

type User = {
  id: number;
  fullName: string;
  profilePic: string;
};

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
  const [cursor, setCursor] = useState<string | null>(null);
  const limit = 20;

  const loadMessages = async (initialLoad = false) => {
    if (loading || (!initialLoad && !hasMore)) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/api/groups/messages/${groupId}`,
        {
          params: {
            limit,
            cursor: initialLoad ? null : cursor,
          },
        },
      );
      const newMessages = response.data.data;
      setMessages((prev) => [...prev, ...newMessages.reverse()]);
      setHasMore(response.data.meta.hasMore);
      setCursor(response.data.meta.nextCursor);
    } catch (error) {
      console.error("Error loading messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages(true);

    socket.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socket.emit("joinGroup", groupId);

    return () => {
      socket.off("newMessage");
      socket.emit("leaveGroup", groupId);
    };
  }, [groupId]);

  return (
    <div className="message-container">
      <button
        onClick={() => loadMessages()}
        disabled={loading || !hasMore}
        className="load-more-btn"
      >
        {loading ? (
          "Loading..."
        ) : hasMore ? (
          <motion.button className="text-white bg-cyan-600 rounded-2xl p-2">
            Load More
          </motion.button>
        ) : (
          <h1 className="text-white font-mono font-semibold">
            No More Messages
          </h1>
        )}
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
                  {new Date(msg.createdAt).toLocaleString()}
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
