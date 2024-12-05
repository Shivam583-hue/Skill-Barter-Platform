import { useParams } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { baseUrl } from "../../Hooks/useSignup";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export interface Sender {
  senderId: number;
}

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Profile {
  bio: string;
  fullName: string;
  createdAt: string;
  id: number;
  portfolio: string;
  username: string;
  profilePic: string;
}

const OthersProfilePageComponent = () => {
  const { authUser } = useAuthContext() as { authUser: User | null };

  const senderId = authUser?.id;
  const { id } = useParams();

  const [profie, setProfie] = useState<Profile | null>(null);
  const [toggleProposal, setToggleProposal] = useState(false);

  const [content, setContent] = useState("");
  const [groupId, setGroupId] = useState<number>(0);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/authenticatedProfile/${id}`,
        );
        setProfie(response.data.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, [id]);

  const handleProposalSendButton = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/proposal/sendProposal`,
        {
          receiverId: id,
          senderId,
          content,
          groupId,
        },
      );
      if (response.data.success) {
        toast.success("Proposal sent successfully! ");
        setToggleProposal(false);
      } else {
        console.error("Error Occured : ", response.data);
        console.log(content, groupId, senderId, id);
      }
    } catch (error) {
      console.error("Error sending proposal:", error);
      toast.error("Failed to send proposal, please try again later.");
    }
  };

  return (
    <div className="bg-black rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[900px] mx-auto my-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={profie?.profilePic}
            alt={profie?.fullName}
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
          />
          <h2 className="text-2xl font-bold md:pl-4 text-cyan-500 mt-4">
            {profie?.fullName}
          </h2>
          <p className="text-gray-400 md:pl-4">@{profie?.username}</p>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-300">Bio</h3>
            <p className="text-gray-400">{profie?.bio}</p>
          </div>

          <div>
            <h3 className="text-lg flex font-semibold text-gray-300">
              Portfolio
              <span className="pt-0.5 pl-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                </svg>
              </span>
            </h3>
            <a
              href={profie?.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              {profie?.portfolio}
            </a>
          </div>

          <div className="flex">
            <h3 className="text-sm font-semibold flex text-gray-300">
              <span className="pt-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                </svg>
              </span>
              Joined
            </h3>
            <p className="text-gray-300 text-sm pl-1">
              <span></span>
              {profie?.createdAt}
            </p>
          </div>
          <div>
            <motion.button
              onClick={() => setToggleProposal(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
              className="bg-gray-800 flex   rounded-2xl px-4  text-white font-semibold font-mono py-1 hover:bg-cyan-600 hover:text-[#00FFFF]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill=" #00FFFF"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
              </svg>
              <h1 className="pl-2">Send Proposal</h1>
            </motion.button>

            <Dialog open={toggleProposal} onOpenChange={setToggleProposal}>
              <DialogContent className="bg-black text-white font-mono">
                <DialogHeader>
                  <DialogTitle>Send Proposal</DialogTitle>
                </DialogHeader>
                <div>
                  <label className="text-gray-300 text-sm">MESSAGE</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-gray-400 w-full bg-black resize-none outline-none border-none"
                    placeholder="Share the specifics of your proposal..."
                  />
                  <label className="text-gray-300 text-sm">GROUP ID </label>
                  <input
                    value={groupId}
                    onChange={(e) => setGroupId(Number(e.target.value))}
                    className="text-gray-400 w-full bg-black outline-none border-none"
                    placeholder="Specify the group ID for the expected join..."
                  />
                </div>
                <DialogFooter>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-500 rounded-2xl px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => setToggleProposal(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleProposalSendButton}
                    className="bg-cyan-500 rounded-2xl px-4 py-2 text-white hover:bg-cyan-600"
                  >
                    Send
                  </motion.button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersProfilePageComponent;
