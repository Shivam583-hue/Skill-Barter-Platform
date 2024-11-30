import { motion } from "framer-motion";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Proposal {
  content: string;
  status: string;
  sender: User
}

interface Props {
  proposal: Proposal;
}

const InboxPageComponent = ({ proposal }: Props) => {

  const content = proposal.content;
  const fullName = proposal.sender.fullName;
  const profilePic = proposal.sender.profilePic

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[800px] mx-auto my-4">
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
          <motion.button whileHover={{ scale: 1.07 }} className="hover:bg-[#4A5C6A] bg-[#9BA8AB] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Decline
          </motion.button>
          <motion.button whileHover={{ scale: 1.07 }} className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Accept
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default InboxPageComponent
