import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios"
import { baseUrl } from "@/Hooks/useSignup";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Proposal {
  Proposalid: number,
  content: string;
  groupId: number;
  status: string;
  sender: User
}

interface Props {
  proposal: Proposal;
}

const InboxPageComponent = ({ proposal }: Props) => {

  const { authUser } = useAuthContext() as { authUser: User | null };

  const content = proposal.content;
  const fullName = proposal.sender.fullName;
  const profilePic = proposal.sender.profilePic

  const [accepted, setAccepted] = useState(false);
  const handleAccept = async () => {
    try {
      const response1 = await axios.post(`${baseUrl}/api/proposal/acceptProposal`, { id: proposal.Proposalid })
      const response2 = await axios.post(`${baseUrl}/api/addMembers`, {
        userId: authUser?.id, groupId: proposal.groupId
      })
      if (response1.data.success && response2.data.success) {
        toast.success("You accepted the proposal, please check your chatrooms")
        setAccepted(true)
      }
      else {
        toast.success("Proposal has already been accepted")
        console.error(response1.data.data && response2.data.data)
      }
    } catch (error) {
      console.log("An error occured : ", error)
    }
  }

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[280px] sm:w-[500px] md:w-[800px] mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={profilePic} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="text-gray-300 font-semibold ">{fullName}</h3>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-gray-300 font-serif">{content}</p>
        </div>

        <div className="flex justify-end space-x-4">
          <motion.button whileHover={{ scale: 1.07 }} className="hover:bg-[#4A5C6A] bg-[#9BA8AB] text-white font-bold  py-2 px-6 rounded-full transition-colors duration-300">
            Decline
          </motion.button>
          {accepted ?
            <motion.button onClick={handleAccept} whileHover={{ scale: 1.07 }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Accepted
            </motion.button>
            :
            <motion.button onClick={handleAccept} whileHover={{ scale: 1.07 }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
              Accept
            </motion.button>
          }
        </div>
      </div>
    </div>
  )
}

export default InboxPageComponent
