import AuthenticatedProfileCard from "../../Components/AuthenticatedProfileCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();
  const class1 = "text-xl font-bold cursor-pointer text-gray-400";
  const class3 = "underline underline-offset-4 decoration-cyan-500 px-2 py-1";
  const class4 = "px-2 py-1";

  const [opportunities, setOpportunities] = useState(false);
  const [flexes, setFlexes] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [chatrooms, setChatrooms] = useState(false);

  const handleOpportunities = () => {
    setOpportunities(true);
    setFlexes(false);
    setJobs(false);
    setChatrooms(false);
    navigate("/profile/postedopportunities");
  };
  const handleFlexes = () => {
    setOpportunities(false);
    setFlexes(true);
    setJobs(false);
    setChatrooms(false);
    navigate("/profile/postedflexes");
  };
  const handleJobs = () => {
    setOpportunities(false);
    setFlexes(false);
    setJobs(true);
    setChatrooms(false);
    navigate("/profile/postedjobs");
  };
  const handleChatrooms = () => {
    setOpportunities(false);
    setFlexes(false);
    setJobs(false);
    setChatrooms(true);
    navigate("/profile/yourchatrooms");
  };

  return (
    <div className="flex flex-col items-center h-full pt-7">
      <div>
        <AuthenticatedProfileCard />
      </div>
      <div>
        <div className="flex pt-3 gap-[110px]">
          <motion.div
            className={opportunities ? class3 : class4}
            whileHover={{ scale: 1.05, backgroundColor: "#232223" }}
            onClick={handleOpportunities}
          >
            <h1 className={class1}>Posted Opportunities</h1>
          </motion.div>
          <motion.div
            className={flexes ? class3 : class4}
            whileHover={{ scale: 1.05, backgroundColor: "#232223" }}
            onClick={handleFlexes}
          >
            <h1 className={class1}>Flexes</h1>
          </motion.div>
          <motion.div
            className={jobs ? class3 : class4}
            whileHover={{ scale: 1.05, backgroundColor: "#232223" }}
            onClick={handleJobs}
          >
            <h1 className={class1}>Posted Jobs</h1>
          </motion.div>
          <motion.div
            className={chatrooms ? class3 : class4}
            whileHover={{ scale: 1.05, backgroundColor: "#232223" }}
            onClick={handleChatrooms}
          >
            <h1 className={class1}>Created Chatrooms</h1>
          </motion.div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
