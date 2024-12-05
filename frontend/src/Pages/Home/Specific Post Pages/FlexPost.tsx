import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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

const FlexPost = () => {
  const { authUser } = useAuthContext() as { authUser: User | null };
  const [content, setContent] = useState("");
  const userid = authUser?.id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/postoptions/flex`, {
        userId: userid,
        title,
        description,
        content,
      });
      if (response.data.success) {
        toast.success("Flex post created successfully!");
        navigate("/flex");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Image Container */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.notion.so/images/page-cover/met_william_morris_1878.jpg"
          alt="Notion Cover"
        />
      </div>
      {/* Title Container */}
      <div className="p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-3xl font-bold w-full md:w-[900px] text-white focus:outline-none text-mono"
          placeholder="Title goes here."
        />
      </div>
      {/* Description Container */}
      <div className="p-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 resize-none text-white p-2 rounded-md focus:outline-none "
          placeholder="Description goes here."
        />
      </div>
      {/* Details Container */}
      <div className="p-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 resize-none text-white p-2 rounded-md focus:outline-none "
          placeholder="Details go here."
        />
      </div>
      <motion.button
        onClick={handleCreate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#3a3b3a] hover:bg-[#555655] rounded-2xl px-3 font-mono text-gray-300 font-bold text-lg py-1 mx-4 my-2"
      >
        Create
      </motion.button>
    </div>
  );
};

export default FlexPost;
