import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";

const DesignOpptur = () => {
  const { authUser } = useAuthContext();
  const userid = authUser?._id;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreate = async () => {
    // Form validation
    if (!title.trim() || !description.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    if (!userid) {
      alert("Please login to create an opportunity");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "/api/postoptions/designerOpportunity",
        {
          userId: userid,
          title: title.trim(),
          description: description.trim(),
          content: content.trim(),
        },
      );

      if (data.success) {
        alert("Designer Opportunity created successfully!");
        navigate("/");
      } else {
        alert(data.message || "Failed to create opportunity");
      }
    } catch (error) {
      console.error("Error creating opportunity:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to create opportunity. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Container */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden rounded-b-lg">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg"
          alt="Notion Cover"
        />
      </div>

      {/* Form Container */}
      <div className="p-4 space-y-6">
        {/* Title Input */}
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm text-gray-600">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl font-bold w-full focus:outline-none text-mono border-b border-gray-200 pb-2"
            placeholder="Title goes here."
          />
        </div>

        {/* Description Container */}
        <div className="space-y-2">
          <label htmlFor="description" className="text-sm text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 resize-none p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Description goes here."
          />
        </div>

        {/* Details Container */}
        <div className="space-y-2">
          <label htmlFor="content" className="text-sm text-gray-600">
            Details
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-48 resize-none p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Details go here."
          />
        </div>

        {/* Button Container */}
        <div className="flex justify-end">
          <motion.button
            onClick={handleCreate}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={`
              bg-[#3a3b3a] hover:bg-[#555655] rounded-2xl px-6 
              font-mono text-gray-300 font-bold text-lg py-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors duration-200
            `}
          >
            {isLoading ? "Creating..." : "Create"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DesignOpptur;
