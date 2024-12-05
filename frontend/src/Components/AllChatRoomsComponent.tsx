import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Group {
  groupId: number;
  groupName: string;
}

interface GroupProps {
  Group: Group;
}

const AllChatRoomsComponent = ({ Group }: GroupProps) => {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/group/${Group.groupId}`);
  }
  return (
    <div className="bg-cyan-600 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 w-full max-w-[800px] mx-auto my-4 transform hover:-translate-y-2">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-black font-bold text-xl tracking-wide">
            {Group.groupName}
          </h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleRedirect}
          className="bg-[#2c3333] hover:bg-[#181c1c] text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Open Chat
        </motion.button>
      </div>
    </div>
  );
};

export default AllChatRoomsComponent;
