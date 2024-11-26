import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isChatroomsActive, setIsChatroomsActive] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <div className="w-max h-max mt-5 p-1 rounded-full bg-[#121212] border border-white shadow-lg flex flex-row flex-wrap justify-center gap-2">
        <motion.button
          className={`${
            isHomeActive
              ? "bg-[#2f3030] text-white"
              : "bg-transparent text-white"
          } px-6 py-2 mx-1 rounded-full transition duration-300 ease-in-out hover:bg-[#2f3030] hover:text-white`}
          onClick={() => {
            setIsHomeActive(true);
            setIsChatroomsActive(false);
            navigate("/");
          }}
        >
          Home
        </motion.button>

        <motion.button
          className={`${
            isChatroomsActive
              ? "bg-[#2f3030] text-white"
              : "bg-transparent text-white"
          } px-6 py-2 mx-1 rounded-full transition duration-300 ease-in-out hover:bg-[#2f3030] hover:text-white`}
          onClick={() => {
            setIsHomeActive(false);
            setIsChatroomsActive(true);
            navigate("/home/allchatrooms");
          }}
        >
          Chatrooms
        </motion.button>
      </div>

      <div className="bg-[#011627] rounded-[50px] my-10 p-6 sm:p-10 w-full max-w-[700px]">
        <h1 className="text-cyan-500 text-[28px] sm:text-[35px] font-semibold font-mono text-center">
          How to use the website
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          1. This is a multi-purpose website, mainly centered around
          collaboration.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          2. In the developer and designers section, you can post opportunities
          to collaborate on a project with, you can pick the people you want to
          collaborate with from the comments section. Once you have picked the
          people, an automatic real-time group chat will be created (you can add
          more people by requesting them to collaborate with you from their
          profile) with a progress bar for you to track the progress of the
          project.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          3. Once the project is completed, the group chat will automatically be
          deleted within 1 day. You can also request people to join you on a
          project directly from their profile.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          4. In the dsa section, you can post anything related to DSA.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          5. You can find any job opportunities or referrals in the jobs
          section.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          6. You can flex your projects, designs, or portfolios in the flex
          section to impress potential employers, clients, or collaborators.
        </h1>
      </div>
    </div>
  );
};

export default Home;
