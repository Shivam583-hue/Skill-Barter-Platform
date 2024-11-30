import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import OthersProfilePageComponent from "../../Components/OthersProfileComponents/OthersProfilePageComponent";

const OthersProfile = () => {
  const navigate = useNavigate();
  const class1 = "text-2xl font-bold cursor-pointer text-gray-400";
  const class3 = "underline underline-offset-4 decoration-cyan-500 px-2 py-1";
  const class4 = "px-2 py-1";

  const { id } = useParams();

  const [opportunities, setOpportunities] = useState(false);
  const [flexes, setFlexes] = useState(false);
  const [jobs, setJobs] = useState(false);

  const handleOpportunities = () => {
    setOpportunities(true);
    setFlexes(false);
    setJobs(false);
    navigate(`/profile/postedopportunities/${id}`);
  };
  const handleFlexes = () => {
    setOpportunities(false);
    setFlexes(true);
    setJobs(false);
    navigate(`/profile/postedflexes/${id}`);
  };
  const handleJobs = () => {
    setOpportunities(false);
    setFlexes(false);
    setJobs(true);
    navigate(`/profile/postedjobs/${id}`);
  };

  return (
    <div className="flex flex-col items-center h-full pt-7">
      <div>
        <OthersProfilePageComponent />
      </div>
      <div className="w-full sm:w-[500px] md:w-[900px] mx-auto my-4">
        <div className="flex pt-3 justify-between ">
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
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default OthersProfile;
