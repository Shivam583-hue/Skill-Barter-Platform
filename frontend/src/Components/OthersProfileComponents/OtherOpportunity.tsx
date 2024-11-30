import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  developerOpportunity_id?: number;
  designerOpportunity_id?: number;
  title: string;
  commentCount?: number;
  createdAt: string;
  description: string;
  content: string;
  user: User;
}

interface Props {
  opportunity: Opp;
}

const OtherOpportunity = ({ opportunity }: Props) => {
  const { profilePic, fullName } = opportunity.user;
  const {
    createdAt,
    title,
    description,
    commentCount,
    developerOpportunity_id,
    designerOpportunity_id,
  } = opportunity;
  const navigate = useNavigate();

  function handleReadMore() {
    if (developerOpportunity_id) {
      navigate(`/developer/${developerOpportunity_id}`);
    } else if (designerOpportunity_id) {
      navigate(`/designer/${designerOpportunity_id}`);
    }
  }

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[800px] mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={profilePic}
              alt={fullName}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-gray-300 font-semibold">{fullName}</h3>
              <p className="text-gray-400 text-sm">Posted on: {createdAt}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex">
            {" "}
            <h2 className="text-2xl pr-3 font-bold text-[#e3a428]">{title}</h2>
          </div>
          <p className="text-gray-300 font-serif">{description}</p>
        </div>

        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <span>{commentCount || 0} comments</span>
          </div>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e3a428] hover:bg-[#c38d22] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
            onClick={handleReadMore}
          >
            Details
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default OtherOpportunity;
