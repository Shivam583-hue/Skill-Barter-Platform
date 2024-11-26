import SubFlexPage from "../../../Components/SubProfilePageComponents/SubFlexPage.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Hooks/useSignup.tsx";
import { useAuthContext } from "../../../context/AuthContext.tsx";

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

const Flexes = () => {
  const [flexPost, setFlexPost] = useState<flex[]>([]);
  const { authUser } = useAuthContext() as { authUser: User | null };
  const userId = authUser?.id;

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
      {flexPost.map((FlexPost) => (
        <SubFlexPage key={FlexPost.flex_id} FlexPost={FlexPost} />
      ))}
    </div>
  );
};

export default Flexes;
