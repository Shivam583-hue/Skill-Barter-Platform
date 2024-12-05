import { motion } from "framer-motion";
import {
  LockIcon,
  LockKeyholeIcon,
  Mail,
  User2Icon,
  UserIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, FormEvent } from "react";
import useSignUp from "../../Hooks/useSignup.tsx";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, signup } = useSignUp();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className="bg-black w-screen h-screen">
      <motion.div
      initial={{ opacity: 1, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center md:w-[400px] pt-32  mx-auto"
    >
      <div className="w-full p-6 shadow-md  bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-cyan-600"> OpportuneHub</span>
        </h1>
        <p className="flex justify-center items-center text-gray-400 text-sm">
          If Sign up fails try a different username
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="relative my-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <User2Icon />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                value={inputs.fullName}
                onChange={(e) =>
                  setInputs({ ...inputs, fullName: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 bg-[#1b1d36] bg-opacity-50 rounded-lg border border-gray-700 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 text-cyan-600 placeholder-gray-400 transition duration-200 font-extrabold font-mono"
              />
            </div>
            <div className="relative my-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserIcon />
              </div>
              <input
                type="text"
                placeholder="Username"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 bg-[#1b1d36] bg-opacity-50 rounded-lg border border-gray-700 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 text-cyan-600 placeholder-gray-400 transition duration-200 font-extrabold font-mono"
              />
            </div>
            <div className="relative mt-6 mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail />
              </div>
              <input
                type="text"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 bg-[#1b1d36] bg-opacity-50 rounded-lg border border-gray-700 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 text-cyan-600 placeholder-gray-400 transition duration-200 font-extrabold font-mono"
              />
            </div>
            <div className="relative mt-6 mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockIcon />
              </div>
              <input
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 bg-[#1b1d36] bg-opacity-50 rounded-lg border border-gray-700 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 text-cyan-600 placeholder-gray-400 transition duration-200 font-extrabold font-mono"
              />
            </div>
            <div className="relative mt-6 mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <LockKeyholeIcon />
              </div>
              <input
                type="password"
                placeholder="Confirm Password"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 bg-[#1b1d36] bg-opacity-50 rounded-lg border border-gray-700 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-600 text-cyan-600 placeholder-gray-400 transition duration-200 font-extrabold font-mono"
              />
            </div>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="mt-1 w-full py-3 px-4 text-[#1b1d36] rounded-xl bg-cyan-600 hover:bg-cyan-700 font-bold font-mono text-xl"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign Up"
            )}
          </motion.button>
          <Link
            to="/login"
            className="text-sm  hover:underline cursor-pointer text-gray-300 hover:text-cyan-600 mt-2 inline-block"
          >
            {"Already"} have an account?
          </Link>
        </form>
      </div>
    </motion.div>
    </div>
  );
};

export default SignUp;
