import { motion } from "framer-motion"
import { baseUrl } from "@/Hooks/useSignup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


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


const SubChatComponent = ({ Group }: GroupProps) => {

  async function handleDelete() {
    try {
      const response = await axios.delete(`${baseUrl}/api/deleteGroup`, {
        data: {
          groupId: Group.groupId
        }
      })
      if (response.data.success)
        toast.success("Chat Group Deleteed Successfully, please refresh")
      else {
        toast.error("Failed to delete chat group, please try again later.")
        console.error(response.data)
      }
    } catch (error) {
      console.log("An error occured", error)
      toast.error("Failed to delete chat group, please try again later.")
    }
  }

  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/group/${Group.groupId}`)
  }
  return (
    <div className="bg-[#232223] rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-[800px] mx-auto my-2">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <h3 className="text-gray-200 font-semibold text-lg">{Group.groupName}</h3>
        </div>
        <motion.button onClick={handleRedirect} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} className="bg-[#2c3333] hover:bg-[#181c1c] text-white px-4 py-2 rounded-full transition-colors duration-300">
          Open Chat
        </motion.button>
        <motion.button whileHover={{ scale: 1.2 }} onClick={handleDelete} whileTap={{ scale: 0.98 }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
        </motion.button>
      </div>
    </div>
  )
}

export default SubChatComponent
