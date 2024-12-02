import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { baseUrl } from "@/Hooks/useSignup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Opp {
  designerOpportunity_id: number;
  title: string;
  createdAt: string;
  commentCount: number;
  description: string;
  content: string;
  user: User;
  groupId: number;
}


interface Comment {
  comment_id: number;
  isCreator: boolean;
  designerOpportunity_id: number;
  content: string;
  user: User;
}

interface Props {
  comment: Comment;
}

const CommentView = ({ comment }: Props) => {

  const navigate = useNavigate();

  const { authUser } = useAuthContext() as { authUser: User | null };
  const userId = authUser?.id;
  const [post, setPost] = useState<Opp | null>(null);

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/specificView/specificDevelopments/${comment?.designerOpportunity_id}`,
        );
        if (!response.data.success) {
          console.error(
            response.data.error || "Failed to fetch opportunity details",
          );
        }
        setPost(response.data.data || null);
      } catch (error) {
        console.log("An error occured", error);
        toast.error("Error occured, check console");
      }
    }
    fetch();
  }, [comment?.designerOpportunity_id]);

  function handleDetails() {
    if (comment?.user.id == userId) {
      navigate("/profile");
    } else {
      navigate(`/profile/${comment?.user.id}`);
    }
  }

  async function handleAccept() {
    try {
      const response = await axios.post(`${baseUrl}/api/addMembers`, {
        userId: comment.user.id, groupId: post?.groupId
      })
      if (response.data.success)
        toast.success("User was added to group chat!")
      else
        toast.success("User already added to group chat");
    } catch (error) {
      console.log("An error occured : ", error)
    }
  }

  return (
    <div className="bg-[#7DA0CA] rounded-2xl p-6 mt-5 shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img
          onClick={handleDetails}
          src={comment?.user.profilePic}
          alt="User profile"
          className="w-12 h-12 rounded-full shadow-md hover:cursor-pointer"
        />

        <div className="flex-1">
          <h3 onClick={handleDetails} className="text-sm hover:cursor-pointer font-bold text-gray-600">
            {comment?.user.fullName}
          </h3>
          <p className="font-extrabold  text-lg text-black">
            {comment?.content}
          </p>
        </div>

        <div className="flex space-x-2">

          {userId == post?.user.id ?

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAccept}
              className="bg-[#0F969C] hover:bg-green-600 text-white font-bold px-4 py-2 rounded-full "
              aria-label="Approve"
            >
              Accept
            </motion.button> : null
          }
        </div>
      </div>
    </div>
  );
};

export default CommentView;
