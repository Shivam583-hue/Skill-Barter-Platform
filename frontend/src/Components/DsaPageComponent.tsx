import { motion } from "framer-motion";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  dsaStuff_id: number;
  title: string;
  createdAt: string;
  description: string;
  content: string;
  user: User;
}

interface Props {
  opportunity: Opp;
}

const DsaPageComponent = ({ opportunity }: Props) => {
  const title = opportunity.title;
  const navigate = useNavigate();
  const creatorimage = opportunity.user.profilePic;
  const creatorId = opportunity.user.id;
  const Createdby = opportunity.user.fullName;
  const description = opportunity.description;
  const postedOn = opportunity.createdAt.substring(0, 10);
  const dsaStuff_id = opportunity.dsaStuff_id;

  const { authUser } = useAuthContext() as { authUser: User | null };
  const userId = authUser?.id;

  function handleReadMore() {
    navigate(`/dsa/${dsaStuff_id}`);
  }

  function handleProfileRedirect() {
    if (creatorId == userId) {
      navigate("/profile");
    } else {
      navigate(`/profile/${creatorId}`);
    }
  }

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300  w-full sm:w-[500px] md:w-[800px]  mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              onClick={handleProfileRedirect}
              src={creatorimage}
              alt={Createdby}
              className="w-10 h-10 rounded-full hover:cursor-pointer"
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
          <h2 className="text-2xl font-bold text-[#b2bbff]">{title}</h2>
          <p className="text-gray-300 font-serif">{description}</p>
        </div>

        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleReadMore}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b2bbff] hover:bg-[#8d94cb] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Details
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DsaPageComponent;
