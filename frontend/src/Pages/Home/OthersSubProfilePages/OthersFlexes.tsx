import { useParams } from "react-router-dom";
import FlexPageComponents from "../../../Components/FlexPageComponents.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Hooks/useSignup.tsx";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface flex {
  flex_id: number;
  content: string;
  title: string;
  description: string;
  user: User;
  createdAt: string;
}

const OthersFlexes = () => {
  const [flexPost, setFlexPost] = useState<flex[]>([]);
  const { id } = useParams();
  const userId = id;

  useEffect(() => {
    if (!userId) return; // Fetch only if userId exists
    async function fetchJobs() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/authenticatedProfile/flex/${userId}`,
        );

        setFlexPost(res.data.data || []);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }
    fetchJobs();
  }, [userId]);

  return (
    <div>
      {flexPost.length === 0 ? (
        <div className="text-gray-400 text-lg">No Flex posts posted</div>
      ) : (
        flexPost.map((FlexPost) => (
          <FlexPageComponents key={FlexPost.flex_id} opportunity={FlexPost} />
        ))
      )}
    </div>
  );
};

export default OthersFlexes;
