import { useState } from "react";
import { Send } from "lucide-react";

const ParticularChatRoom = ({
  chatroom_id,
  chatroom_name,
}: {
  chatroom_id: number;
  chatroom_name: string;
}) => {
  return (
    <div className="flex flex-col">
      <header>
        <h1>{chatroom_name}</h1>
      </header>
      <body></body>
      <footer>
        <MessageInput />
      </footer>
    </div>
  );
};

export default ParticularChatRoom;

function MessageText({ message_id }: { message_id: number }) {
  return (
    <div className="chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble break-words text-white bg-gray-700 pb-2`}>
        {message.message}
      </div>
    </div>
  );
}

const MessageInput = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-row">
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
        placeholder="Send a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-3"
      >
        <Send />
      </button>
    </div>
  );
};
