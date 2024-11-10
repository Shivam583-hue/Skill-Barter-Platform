import { motion } from "framer-motion"

const AllChatRoomsComponent = ({chat_image, chat_title}: {chat_image: string, chat_title: string}) => {
  return (
    <div className="bg-[#232223] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[800px] mx-auto my-2">
        <div className="flex items-center space-x-4">
            <img src={chat_image} alt={chat_title} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
                <h3 className="text-gray-200 font-semibold text-lg">{chat_title}</h3>
            </div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className="bg-[#2c3333] hover:bg-[#181c1c] text-white px-4 py-2 rounded-full transition-colors duration-300">
                Open Chat
            </motion.button>
        </div>
    </div>
  )
}

export default AllChatRoomsComponent
