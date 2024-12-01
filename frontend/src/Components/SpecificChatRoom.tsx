import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "@/Hooks/useSignup";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import { useParams } from "react-router-dom";
import Input from "./ChatComponents/Input";
import MessageView from "./ChatComponents/MessageView";

const SpecificChatRoom = () => {

  const { groupId } = useParams();

  const [creatorId, setCreatorId] = useState(null)
  const [groupName, setGroupName] = useState("")

  useEffect(() => {
    const fetchGroupDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/groups/${groupId}`)
        setGroupName(response.data.data.groupName)
      } catch (error) {
        toast.error("An error occured, please try againg later.")
        console.log("An error occured", error)
      }
    }
    fetchGroupDetails();
  }, [groupId])


  return (
    <div className="flex justify-center items-center flex-col h-screen ">
      <header className="sticky top-0 w-full sm:w-[500px] md:w-[800px] py-4">
        <div className="flex justify-between">
          <h1 className="pl-4 text-2xl pt-2 text-white font-semibold">{groupName}</h1>
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 1 }} className="flex rounded-xl text-black hover:bg-gray-300 bg-white px-3 py-2"><span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg></span>View Members</motion.button>
        </div>

        <div className="divider border-t-2 border-gray-500 shadow-md"></div>
      </header>

      <main className="justify-center flex flex-1 w-full overflow-y-auto px-7">
        <MessageView />
      </main>

      <footer className="w-full  py-4 px-3 sm:px-0">
        <Input />
      </footer>
    </div>
  );
};

export default SpecificChatRoom;
