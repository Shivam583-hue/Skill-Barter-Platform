import { useState } from "react";
import { baseUrl } from "./useSignup.tsx";
import { useAuthContext } from "../context/AuthContext.tsx";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/api/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        toast.error(e.message); // Safely access the message
      } else {
        toast.error("An unknown error occurred."); // Handle non-Error types
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};
export default useLogout;

