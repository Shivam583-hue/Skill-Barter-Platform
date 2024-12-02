import { useAuthContext } from "../../../context/AuthContext.tsx"
import toast from "react-hot-toast";
import axios from "axios"
import { baseUrl } from "../../../Hooks/useSignup.tsx"
import SubChatComponent from "../../../Components/SubProfilePageComponents/SubChatComponent"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
}

interface Group {
  groupId: number;
  groupName: string;
}

const YourChatrooms = () => {

  const { authUser } = useAuthContext() as { authUser: User | null };

  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/groupsCreatedByAuthenticatedUser/${authUser?.id}`)
        setGroups(response.data.data || [])
      } catch (error) {
        toast.error("Server is down, please try again later")
        console.error("Failed to fetch joined groups", error)
      }
    }

    fetch()
  }, [])

  return (
    <div>
      {groups.length === 0 ? (
        <div className="text-gray-400 text-lg">No Groups Creatred</div>
      ) : (
        groups.map((GroupChat) => (
          <SubChatComponent key={GroupChat.groupId} Group={GroupChat} />
        ))
      )}

    </div>
  )
}

export default YourChatrooms
