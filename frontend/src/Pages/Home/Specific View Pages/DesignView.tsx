import { MessageSquare } from "lucide-react";
import { format } from "date-fns";
import { baseUrl } from "../../../Hooks/useSignup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import CommentView from "../../../Components/CommentView";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  designerOpportunity_id: number;
  title: string;
  createdAt: string;
  commentCount: number;
  description: string;
  content: string;
  user: User;
}

interface Comment {
  comment_id: number;
  isCreator: boolean;
  designerOpportunity_id: number;
  content: string;
  user: User;
}

const DesignView = () => {
  const { authUser } = useAuthContext() as { authUser: User | null };
  const authUserId = authUser?.id;

  //check if authUser is the creator of blog, if yes, let them view the approve button
  //  const [isCreator, setIsCreator] = useState(false);

  const { designerOpportunity_id } = useParams();
  const [post, setPost] = useState<Opp | null>(null);
  const [comment, setComment] = useState("");

  const [comms, setComms] = useState<Comment[]>();

  const handleComment = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/comments/post/designerComment`,
        {
          designerOpportunity_id,
          content: comment,
          userId: authUserId,
        },
      );
      if (response.data.success) {
        toast.success("Comment added successfully. Please refresh");
      }
    } catch (error) {
      toast.error("An error occured while adding comment " + error);
      console.error("An error occured while adding comment " + error);
    }
  };

  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/specificView/specificDesigns/${designerOpportunity_id}`,
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
    async function fetchComments() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/comments/get/designerComment/${designerOpportunity_id}`,
        );
        setComms(res.data.data);
      } catch (error) {
        console.error("An error occured while fetching comments : ", error);
      }
    }
    fetchComments();
  }, [designerOpportunity_id]);

  return (
    <div className="min-h-screen bg-[#1a191a] text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src={post?.user.profilePic}
            className="w-16 h-16 rounded-full border-2 border-[#e3a428]"
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
        <h1 className="text-4xl font-bold text-[#e3a428] mb-4">
          {post?.title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">{post?.description}</p>
        {/* Main content section */}
        <div className="bg-[#232223] rounded-3xl p-8 mb-8">
          <div className="prose prose-invert max-w-none">{post?.content}</div>
        </div>
        {/* Engagement stats */}
        <div className="flex items-center justify-between p-4 bg-[#232223] rounded-2xl">
          <div className="flex space-x-6">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-[#e3a428] transition-colors">
              <MessageSquare className="w-6 h-6" />
              <span>{post?.commentCount}</span>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">
            Comments ({post?.commentCount})
          </h2>
          <div className="bg-[#232223] rounded-2xl p-4">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full resize-none bg-[#1a191a] text-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#e3a428]"
              rows={2}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleComment}
                className="bg-[#e3a428] hover:bg-[#c38d22] text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Post Comment
              </button>
            </div>
          </div>
          <div className="divider"></div>

          {comms?.length === 0 ? (
            <div className="text-gray-400 text-lg">No Comments found</div>
          ) : (
            comms?.map((comment) => <CommentView comment={comment} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignView;
