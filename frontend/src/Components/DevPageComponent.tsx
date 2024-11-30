import { motion } from "framer-motion";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  developerOpportunity_id: number;
  title: string;
  createdAt: string;
  commentCount: number;
  description: string;
  content: string;
  user: User;
}

interface Props {
  opportunity: Opp;
}

const DevPageComponent = ({ opportunity }: Props) => {
  const title = opportunity.title;
  const navigate = useNavigate();
  const creatorimage = opportunity.user.profilePic;
  const creatorId = opportunity.user.id;
  const Createdby = opportunity.user.fullName;
  const description = opportunity.description;
  const postedOn = opportunity.createdAt.substring(0, 10);
  const commentCount = opportunity.commentCount;
  const developerOpportunity_id = opportunity.developerOpportunity_id;

  const { authUser } = useAuthContext() as { authUser: User | null };
  const userId = authUser?.id;

  // We use the params provided in this id to fetch the opportunity;
  function handleReadmore() {
    navigate(`/developer/${developerOpportunity_id}`);
  }
  function handleProfileRedirect() {
    if (creatorId == userId) {
      navigate("/profile");
    } else {
      navigate(`/profile/${creatorId}`);
    }
  }

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[800px] mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              onClick={handleProfileRedirect}
              src={creatorimage}
              alt={Createdby}
              className="hover:cursor-pointer w-10 h-10 rounded-full"
            />
            <div>
              <h3
                onClick={handleProfileRedirect}
                className="text-gray-300 font-semibold hover:cursor-pointer"
              >
                {Createdby}
              </h3>
              <p className="text-gray-400 text-sm">Posted on: {postedOn}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-[#2ba098]">{title}</h2>
          <p className="text-gray-300 font-serif">{description}</p>
        </div>

        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>{commentCount} comments</span>
          </div>
        </div>

        <div className="flex justify-end ">
          <motion.button
            onClick={handleReadmore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2ba098] hover:bg-[#1f726c] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Details
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DevPageComponent;
