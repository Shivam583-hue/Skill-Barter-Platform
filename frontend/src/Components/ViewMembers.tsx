import { useEffect, useState } from "react";
import { baseUrl } from "@/Hooks/useSignup";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

type User = {
  id: number;
  fullName: string;
  profilePic: string;
};

const ViewMembers = () => {
  const [members, setMembers] = useState<User[]>([]);
  const { groupId } = useParams();
  async function handleDelete(userId: number) {
    if (!groupId) {
      toast.error("Group ID is missing!");
      return;
    }
    console.log(userId, Number(groupId));
    try {
      const response = await axios.post(`${baseUrl}/api/removeMembers`, {
        userId: Number(userId),
        groupId: Number(groupId),
      });

      if (response.data.success) {
        toast.success("Member removed successfully!");
        setMembers((prevMembers) =>
          prevMembers.filter((member) => member.id !== userId),
        );
      } else {
        toast.error(response.data.error || "Failed to remove member.");
      }
    } catch (error) {
      console.error("Error removing member:", error);
      toast.error("An error occurred while removing the member.");
    }
  }

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/groups/members/${groupId}`,
        );
        setMembers(response.data.data);
      } catch (error) {
        console.log("An Error Occured : ", error);
      }
    };
    fetchMember();
  }, [groupId]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="w-full max-w-[400px] bg-gray-900 p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-lg font-semibold">Group Members</h2>
        </header>
        <main className="mt-4 space-y-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center p-3 bg-gray-800 rounded-md"
            >
              <img
                src={member.profilePic}
                alt={`${member.fullName}'s avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 flex justify-between w-full">
                <p className="text-sm font-medium">{member.fullName}</p>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  onClick={() => handleDelete(member.id)}
                  className="hover:bg-red-600 rounded-full p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-user-x ml-auto"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                    <path d="M22 22l-5 -5" />
                    <path d="M17 22l5 -5" />
                  </svg>
                </motion.button>
              </div>
            </div>
          ))}
        </main>
        <footer className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="w-full py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ViewMembers;
