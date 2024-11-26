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

const JobPost = () => {
  const { authUser } = useAuthContext() as { authUser: User | null };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D",
  );
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/postoptions/jobOpportunity`,
        {
          title,
          description,
          applyLink: link,
          userId: authUser?.id,
          salary,
          company,
          location,
        },
      );
      if (response.data.success) {
        toast.success("Job post created successfully!");
        navigate("/job");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post.");
    }
  };

  return (
    <div>
      {/* Image Container */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.notion.so/images/page-cover/met_william_morris_1877_willow.jpg"
          alt="Notion Cover"
        />
      </div>
      {/* Title Container */}
      <div className="p-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-3xl font-bold w-full md:w-[900px] focus:outline-none text-mono"
          placeholder="Job title goes here."
        />
      </div>
      {/* Description Container */}
      <div className="p-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 resize-none p-2 rounded-md focus:outline-none "
          placeholder="Job description goes here."
        />
      </div>
      <div className="p-4">
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          type="text"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 p-2 rounded-md focus:outline-none"
          placeholder="Apply Link"
        />
      </div>
      <div className="p-4">
        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="text"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 p-2 rounded-md focus:outline-none"
          placeholder="Salary Estimate"
        />
      </div>
      <div className="p-4">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 p-2 rounded-md focus:outline-none"
          placeholder="Location"
        />
      </div>
      <div className="p-4">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          className="w-full h-12 sm:h-16 md:h-20 lg:h-24 p-2 rounded-md focus:outline-none"
          placeholder="Company Name"
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

export default JobPost;
