import { useAuthContext } from "@/context/AuthContext";
import axios from "axios"
import { baseUrl } from "@/Hooks/useSignup";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import toast from "react-hot-toast";
import AllChatRoomsComponent from "../../Components/AllChatRoomsComponent"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Group } from "lucide-react";


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


const AllChatRooms = () => {
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isChatroomsActive, setIsChatroomsActive] = useState(true)
  const navigate = useNavigate()

  const { authUser } = useAuthContext() as { authUser: User | null };
  const [groupName, setGroupName] = useState("");

  const [groups, setGroups] = useState<Group[]>([]);

  const [toggleDiaglogue, setToggleDialogue] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/groupsJoinedbyAuthenticatedUser/${authUser?.id}`)
        setGroups(response.data.data || [])
      } catch (error) {
        toast.error("Server is down, please try again later")
        console.error("Failed to fetch joined groups", error)
      }
    }

    fetch()
  }, [])


  const handleCreateGroup = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/createGroup`, {
        groupName,
        userId: authUser?.id
      })
      if (response.data.success) {
        toast.success("Group Created Sucessfully, please refresh")
        console.log(response.data.data.groupId)
        setTimeout(() =>
          alert(`${response.data.data.groupId} is the groupId, keep it secure and remember it for future use cases`), 2000)
      } else {
        console.log(response.data)
      }
    } catch (error) {
      toast.error("Failed to create group, please try again later")
      console.error("An error occured while creating group", error)
    }
  }

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
      {groups.length === 0 ? (
        <div className="text-gray-400 text-lg">No Groups Joined/ Creatred</div>
      ) : (
        groups.map((GroupChat) => (
          <AllChatRoomsComponent key={GroupChat.groupId} Group={GroupChat} />
        ))
      )}

      <motion.button onClick={() => setToggleDialogue(true)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="absolute font bottom-10 right-10 bg-black border border-white text-white p-3 rounded-full border-2 shadow-lg z-50 hover:bg-gray-900 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
      </motion.button>

      <Dialog open={toggleDiaglogue} onOpenChange={setToggleDialogue}>
        <DialogContent className="bg-black text-white font-mono">
          <DialogHeader>
            <DialogTitle>Create Group</DialogTitle>
          </DialogHeader>
          <div>
            <label className="text-gray-300 text-sm">GROUP NAME</label>
            <input value={groupName} onChange={(e) => setGroupName(e.target.value)} className="text-gray-400 w-full bg-black outline-none border-none" placeholder="Enter name of group..." />
          </div>
          <DialogFooter>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}

              className="bg-gray-500 rounded-2xl px-4 py-2 text-white hover:bg-gray-700"
              onClick={() => setToggleDialogue(false)}
            >
              Cancel
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCreateGroup}
              className="bg-cyan-500 rounded-2xl ml-2 px-4 py-2 text-white hover:bg-cyan-600">
              Create
            </motion.button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AllChatRooms
