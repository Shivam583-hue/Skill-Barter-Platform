import { useState, useEffect } from "react";
import axios from "axios";
import DevPageComponent from "../../Components/DevPageComponent";
import { baseUrl } from "../../Hooks/useSignup";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  developerOpportunity_id: number;
  title: string;
  createdAt: string;
  commentCount: number;
  description: string;
  content: string;
  user: User;
}

const DeveloperPage = () => {
  const [opps, setOpps] = useState<Opp[]>([]);
  useEffect(() => {
    async function awara() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/preview/developerOpportunity`,
        );
        setOpps(response.data.data || []);
      } catch (error) {
        console.error("An error occured while fetching blogs", error);
      }
    }
    awara();
  }, []);

  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div className="mb-5">
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Collboration Opportunities for developers{" "}
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        {opps.length === 0 ? (
          <div className="text-gray-400 text-lg">No Opportunities found</div>
        ) : (
          opps.map((opportunity) => (
            <DevPageComponent
              key={opportunity.developerOpportunity_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DeveloperPage;
