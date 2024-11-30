import { format } from "date-fns";
import { baseUrl } from "../../../Hooks/useSignup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

const DSAview = () => {
  const { dsaStuff_id } = useParams();
  const [post, setPost] = useState<Opp | null>(null);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/specificView/specificDsa/${dsaStuff_id}`,
        );
        console.log("Response:", response);
        if (!response.data.success) {
          console.error(response.data.error || "Failed to post details");
        }
        setPost(response.data.data || null);
      } catch (error) {
        console.log("An error occured", error);
        toast.error("Error occured, check console");
      }
    }
    fetch();
  }, [dsaStuff_id]);

  return (
    <div className="min-h-screen bg-[#1a191a] text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={post?.user.profilePic}
            className="w-16 h-16 rounded-full border-2 border-[#2ba098]"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-200">
              {post?.user.fullName}
            </h3>
            <p className="text-gray-400">
              {post?.createdAt ? format(new Date(post.createdAt), "PP") : ""}
            </p>
          </div>
        </div>

        {/* Title and description */}
        <h1 className="text-4xl font-bold text-[#2ba098] mb-4">
          {post?.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">{post?.description}</p>

        {/* Main content section */}
        <div className="bg-[#232223] rounded-3xl p-8 mb-8">
          <div className="prose prose-invert max-w-none">{post?.content}</div>
        </div>
      </div>
    </div>
  );
};

export default DSAview;
