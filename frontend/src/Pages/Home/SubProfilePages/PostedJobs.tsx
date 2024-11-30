import SubPostedJobs from "../../../Components/SubProfilePageComponents/SubPostedJobs.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Hooks/useSignup.tsx";
import { useAuthContext } from "../../../context/AuthContext.tsx";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface job {
  jobOpportunity_id: number;
  description: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string;
  user: User;
}

const PostedJobs = () => {
  const [jobState, setJobState] = useState<job[]>([]);
  const { authUser } = useAuthContext() as { authUser: User | null };
  const userId = authUser?.id;

  useEffect(() => {
    if (!userId) return; // Fetch only if userId exists
    async function fetchJobs() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/authenticatedProfile/jobs/${userId}`,
        );

        setJobState(res.data.data || []);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }

    fetchJobs();
  }, [userId]);

  return (
    <div>
      {jobState.map((JobPost) => (
        <SubPostedJobs key={JobPost.jobOpportunity_id} JobPost={JobPost} />
      ))}
    </div>
  );
};

export default PostedJobs;
