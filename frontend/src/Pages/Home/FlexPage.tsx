import FlexPageComponents from "../../Components/FlexPageComponents";
import axios from "axios";
import { baseUrl } from "../../Hooks/useSignup";
import { useState, useEffect } from "react";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

export interface Opp {
  flex_id: number;
  title: string;
  createdAt: string;
  description: string;
  content: string;
  user: User;
}

const FlexPage = () => {
  const [flex, setFlex] = useState<Opp[]>([]);
  useEffect(() => {
    async function fetch() {
      try {
        const response = await axios.get(`${baseUrl}/api/preview/flex`);
        setFlex(response.data.data || []);
      } catch (error) {
        console.error("An error occured while fetching dsa stuff", error);
      }
    }
    fetch();
  }, []);

  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div>
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Flex your accomplishments{" "}
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        {flex.length === 0 ? (
          <div className="text-gray-400 text-lg">No posts found</div>
        ) : (
          flex.map((opportunity: Opp) => (
            <FlexPageComponents
              key={opportunity.flex_id}
              opportunity={opportunity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FlexPage;
