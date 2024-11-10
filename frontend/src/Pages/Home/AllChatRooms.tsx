import AllChatRoomsComponent from "../../Components/AllChatRoomsComponent"
import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AllChatRooms = () => {
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isChatroomsActive, setIsChatroomsActive] = useState(true)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col mt-5 items-center h-screen">
        <div className="w-max h-max mb-5 p-1 rounded-full bg-[#121212] border border-white shadow-lg flex flex-row">
        <motion.button className={`${isHomeActive ? "bg-[#2f3030] text-white" : "bg-transparent text-white"} px-6 py-2 mx-1 rounded-full transition duration-300 ease-in-out hover:bg-[#2f3030] hover:text-white`} 
        onClick={() => {
            setIsHomeActive(true);
            setIsChatroomsActive(false);
            navigate("/");
          }}
        >
          Home
        </motion.button>

        <motion.button className={`${isChatroomsActive ? "bg-[#2f3030] text-white" : "bg-transparent text-white"} px-6 py-2 mx-1 rounded-full transition duration-300 ease-in-out hover:bg-[#2f3030] hover:text-white`} 
          onClick={() => {
            setIsHomeActive(false);
            setIsChatroomsActive(true);
            navigate("/home/allchatrooms");
          }}
        >
          Chatrooms
        </motion.button>
      </div>
      <AllChatRoomsComponent chat_image="https://i.pinimg.com/474x/6f/29/15/6f2915c19523846d99ec56ea09914522.jpg" chat_title="Chat 1"/>
    </div>
  )
}

export default AllChatRooms
