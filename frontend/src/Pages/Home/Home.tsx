import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const Home = () => {
  const navigate = useNavigate();
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isChatroomsActive, setIsChatroomsActive] = useState(false);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center px-4">
      <motion.div
        layout
        transition={spring}
        className="w-max handle h-max mt-5 p-1 rounded-full bg-[#121212] border border-white shadow-lg flex flex-row flex-wrap justify-center gap-2"
      >
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
      </motion.div>

      <div className="bg-black rounded-[50px] my-10 p-6 sm:p-10 w-full shadow-max max-w-[700px]">
        <h1 className="text-cyan-500 text-[28px] sm:text-[35px] font-semibold font-mono text-center">
          How to use the website
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          1. This is a multi-purpose website, mainly centered around
          collaboration.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          2. You can create a new chatroom from the Chatrooms section, an id of the chatroom will be provided to you,
          use this to create an opportunity from the post section, when people comment on your opportunity post, you can 
          view their profiles and consider accepting them into your chatroom where you will collaborate together on a project.
        </h1>
        <h1 className="text-[#a598e8] pt-4 font-semibold font-mono text-[15px] sm:text-[17px]">
          3. You can also request people to join you on a
          project directly from their profile, by sending them a proposal, you can view all your proposals in the inbox page.
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
    </div>
  );
};

export default Home;
