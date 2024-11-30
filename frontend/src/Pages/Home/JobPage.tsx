import { useEffect, useState } from "react";
import JobPageComponent from "../../Components/JobPageComponent";
import { baseUrl } from "../../Hooks/useSignup";
import axios from "axios";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Job {
  jobOpportunity_id: number;
  title: string;
  description: string;
  createdAt: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string;
  user: User;
}

const JobPage = () => {
  const [job, setJob] = useState<Job[]>([]);
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/preview/jobOpportunity`,
        );
        setJob(response.data.data);
      } catch (error) {
        console.error("An error occured fetching job Opportunities", error);
      }
    }
    fetch();
  }, []);
  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div className="mb-5">
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Job Opportunities{" "}
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        {job.length === 0 ? (
          <div className="text-gray-400 text-lg">
            No job opportunities found
          </div>
        ) : (
          job.map((opportunity: Job) => (
            <JobPageComponent
              key={opportunity.jobOpportunity_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default JobPage;
