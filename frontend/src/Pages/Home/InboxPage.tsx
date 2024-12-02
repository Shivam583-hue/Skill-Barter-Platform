import { useAuthContext } from "../../context/AuthContext.tsx"
import toast from "react-hot-toast"
import { useEffect, useState } from "react"
import axios from "axios"
import { baseUrl } from "../../Hooks/useSignup.tsx"
import InboxPageComponent from "../../Components/InboxPageComponent";


export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface Proposal {
  content: string;
  groupId: number;
  status: string;
  sender: User
  Proposalid: number,
}

const InboxPage = () => {

  const [proposal, setProposal] = useState<Proposal[]>([]);
  const { authUser } = useAuthContext() as { authUser: User | null };
  const id = authUser?.id;

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/proposal/getAuthenticatedUsersProposals`, {
          params: { receiverId: id }
        })
        setProposal(response.data.data || [])
      } catch (error) {
        toast.error("Failed to fetch your inbox, please try again later")
        console.log("Error fetching proposals");
      }
    }
    fetchProposals();

  }, [id])


  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div>
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Requests and Proposals
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        {proposal.length == 0 ? (
          <div className="text-gray-400 text-lg">No Proposals</div>
        ) : (
          proposal.map((proposal) => (
            <InboxPageComponent key={proposal.sender.id} proposal={proposal} />
          ))
        )}
      </div>
    </div>
  );
};

export default InboxPage;
