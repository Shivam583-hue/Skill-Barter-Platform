import { motion } from "framer-motion"


interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
}

interface Group {
  groupId: number;
  groupName: string;
}

interface GroupProps {
  Group: Group
}

const AllChatRoomsComponent = ({ Group }: GroupProps) => {
  return (
    <div className="bg-[#232223] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[800px] mx-auto my-2">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <h3 className="text-gray-200 font-semibold text-lg">{Group.groupName}</h3>
        </div>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className="bg-[#2c3333] hover:bg-[#181c1c] text-white px-4 py-2 rounded-full transition-colors duration-300">
          Open Chat
        </motion.button>
      </div>
    </div>
  )
}

export default AllChatRoomsComponent
