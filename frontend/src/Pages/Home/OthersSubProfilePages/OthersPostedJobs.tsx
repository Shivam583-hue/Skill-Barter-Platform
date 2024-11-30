import { useParams } from "react-router-dom";
import SubPostedJobs from "../../../Components/SubProfilePageComponents/SubPostedJobs.tsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../Hooks/useSignup.tsx";

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

const OthersPostedJobs = () => {
  const [jobState, setJobState] = useState<job[]>([]);
  const { id } = useParams();
  const userId = id;

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

export default OthersPostedJobs;
