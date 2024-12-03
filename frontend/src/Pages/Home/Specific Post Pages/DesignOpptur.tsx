import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";
import { baseUrl } from "../../../Hooks/useSignup";

interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
}

const DesignOpptur = () => {
  const { authUser } = useAuthContext() as { authUser: User | null };
  const userid = authUser?.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [groupId, setGroupId] = useState<number>(0);
  const navigate = useNavigate();
  const handleCreate = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/postoptions/designerOpportunity`,
        {
          userId: userid,
          title,
          description,
          groupId,
          content,
        },
      );
      if (response.data.success) {
        alert("Designer Opportunity created successfully!");
        navigate("/designer");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error creating opportunity:", error);
      alert("Failed to create opportunity.");
    }
  };
  return (
    <div>
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg"
          alt="Notion Cover"
        />
      </div>
      <div className="p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent text-3xl text-white font-bold w-full md:w-[900px] focus:outline-none text-mono"
          placeholder="Title goes here."
        />
      </div>
      <div className="p-4">
        <input
          value={groupId}
          onChange={(e) => setGroupId(Number(e.target.value))}
          className="bg-transparent text-3xl text-white font-bold w-full md:w-[900px] focus:outline-none text-mono"
          placeholder="Group id you want users to join..."
        />
      </div>
      <div className="p-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-24 bg-transparent sm:h-32 text-white md:h-40 lg:h-48 resize-none p-2 rounded-md focus:outline-none "
          placeholder="Description goes here."
        />
      </div>
      <div className="p-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-24 sm:h-32 md:h-40 bg-transparent text-white lg:h-48 resize-none p-2 rounded-md focus:outline-none "
          placeholder="Details go here."
        />
      </div>
      <motion.button
        onClick={handleCreate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#3a3b3a] hover:bg-[#555655] rounded-2xl px-3  font-mono text-gray-300 font-bold text-lg py-1 mx-4 my-2"
      >
        Create
      </motion.button>
    </div>
  );
};
export default DesignOpptur;
