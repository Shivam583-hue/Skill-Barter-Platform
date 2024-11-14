import { useEffect, useState } from "react";
import DesignerPageComponent from "../../Components/DesignerPageComponent";
import axios from "axios";
import { baseUrl } from "../../Hooks/useSignup";

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

const DesignerPage = () => {
  const [opps, setOpps] = useState<Opp[]>([]);
  useEffect(() => {
    async function awara() {
      try {
        const response = await axios.get(
          `${baseUrl}/api/preview/designerOpportunity`,
        );
        setOpps(response.data.data || []);
      } catch (error) {
        console.error("An error occured while fetching posts", error);
      }
    }
    awara();
  }, []);

  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div className="mb-5">
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Collboration Opportunities for designers{" "}
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        {opps.length === 0 ? (
          <div className="text-gray-400 text-lg">No Opportunities found</div>
        ) : (
          opps.map((opportunity) => (
            <DesignerPageComponent
              key={opportunity.designerOpportunity_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default DesignerPage;
