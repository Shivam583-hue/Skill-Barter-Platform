import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OtherOpportunity from "../../../Components/OthersProfileComponents/OtherOpportunity.tsx";
import { baseUrl } from "../../../Hooks/useSignup.tsx";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  developerOpportunity_id?: number;
  designerOpportunity_id?: number;
  title: string;
  commentCount?: number;
  createdAt: string;
  description: string;
  content: string;
  user: User;
}

const OthersPostedOpportunities = () => {
  const { id } = useParams();
  const [dev, setDev] = useState<Opp[]>([]);
  const [design, setDesign] = useState<Opp[]>([]);
  const userId = id;

  useEffect(() => {
    if (!userId) return; // Fetch only if userId exists
    async function fetchDesigns() {
      try {
        const res = await axios.get(
          `${baseUrl}/api/authenticatedProfile/designs/${userId}`,
        );

        setDesign(res.data.data || []);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }
    async function fetchDevelopment() {
      try {
        const res2 = await axios.get(
          `${baseUrl}/api/authenticatedProfile/developments/${userId}`,
        );
        setDev(res2.data.data || []);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
      }
    }

    fetchDesigns();
    fetchDevelopment();
  }, [userId]);

  return (
    <div>
      {/* Developer Opportunities */}
      <div>
        {dev.length === 0 ? (
          <div className="text-gray-400 text-lg">
            No Developer Opportunities posted
          </div>
        ) : (
          dev.map((opportunity) => (
            <OtherOpportunity
              key={opportunity.developerOpportunity_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>

      {/* Designer Opportunities */}
      <div>
        {design.length === 0 ? (
          <div className="text-gray-400 text-lg">
            No Designer Opportunities posted
          </div>
        ) : (
          design.map((opportunity) => (
            <OtherOpportunity
              key={opportunity.designerOpportunity_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OthersPostedOpportunities;
