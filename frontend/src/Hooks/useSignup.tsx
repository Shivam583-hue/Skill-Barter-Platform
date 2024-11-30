import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.tsx";

export const baseUrl = "http://localhost:5000";

interface SignUpParams {
  fullName: string;
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
}

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    email,
  }: SignUpParams) => {
    const success = handleInputErrors({
      fullName,
      username,
      confirmPassword,
      password,
      email,
    });
    if (!success) return;

    setLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/api/auth/signup`, {
        fullName,
        username,
        password,
        confirmPassword,
        email,
      });

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      localStorage.setItem("chat-user", response.data);

      setAuthUser(response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Signup failed");
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignUp;

function handleInputErrors({
  fullName,
  username,
  confirmPassword,
  password,
  email,
}: SignUpParams) {
  if (!fullName || !username || !confirmPassword || !password || !email) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Entered passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }

  return true;
}
