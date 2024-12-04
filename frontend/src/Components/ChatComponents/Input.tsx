import { useState } from "react";
import socket from "../../socket.js";

const Input = ({
  groupId,
  messageCreatorId,
}: {
  groupId: number;
  messageCreatorId: number | undefined;
}) => {
  const [messageContent, setMessageContent] = useState("");
  const handleSendMessage = () => {
    if (messageContent.trim()) {
      socket.emit("sendMessage", {
        messageContent,
        groupId,
        messageCreatorId,
      });
      setMessageContent("");
    }
  };

  return (
    <div className="flex items-center border-2 border-white bg-[#2c313a] rounded-3xl shadow-md px-4 py-2 w-full sm:w-[500px] md:w-[800px] mx-auto">
      <form className="flex items-center w-full" onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="flex-grow bg-transparent text-cyan-600 placeholder-gray-400 font-semibold outline-none mr-2"
        />
        <button
          className="bg-black border-2 border-white hover:bg-gray-900 text-white p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"
          aria-label="Send"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-send"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
