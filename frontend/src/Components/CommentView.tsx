import { motion } from "framer-motion";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
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
  return (
    <div className="bg-[#7DA0CA] rounded-2xl p-6 mt-5 shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        {/* Profile Image */}
        <img
          src={comment?.user.profilePic}
          alt="User profile"
          className="w-12 h-12 rounded-full shadow-md"
        />

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">
            {comment?.user.fullName}
          </h3>
          <p className="font-semibold text-sm text-gray-600">
            {comment?.content}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          {/* Approve Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0F969C] hover:bg-green-600 text-white font-bold px-4 py-2 rounded-full "
            aria-label="Approve"
          >
            Accept
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CommentView;
