import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000";

export interface User {
  id: number;
  fullName: string;
  profilePic: string;
}

interface JobPost {
  jobOpportunity_id: number;
  description: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  applyLink: string;
  user: User;
}

interface Props {
  JobPost: JobPost;
}

const SubPostedJobs = ({ JobPost }: Props) => {
  const {
    description,
    title,
    company,
    location,
    salary,
    applyLink,
    jobOpportunity_id,
  } = JobPost;

  async function handleDelete() {
    try {
      const response = await axios.delete(
        `api/authenticatedProfile/jobs/${jobOpportunity_id}`,
        {
          withCredentials: true,
        },
      );
      if (response.data.success) {
        toast.success("Job Post Deleted Successfully!");
      }
    } catch (e) {
      console.log("An error occurred while deleting job post", e);
      toast.error("An error occurred while deleting job post");
    }
  }

  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl w-full mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-cyan-500">{title}</h2>
          <span className="text-blue-500 text-xl pt-2 font-semibold">
            {salary}
          </span>
        </div>
        <div className="flex flex-wrap gap-4 text-gray-300">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-semibold text-lg font-mono">{company}</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-semibold text-lg pr-5 font-mono">
              {location}
            </span>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </motion.button>
          </div>
        </div>

        <p className="text-gray-300 mt-2 font-semibold text-lg font-serif">
          {description}
        </p>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleDelete}
            className="pr-3"
            aria-label="Delete Post"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="-0.75 -0.75 16 16"
              stroke="#ffffff"
              aria-hidden="true"
              id="Trash--Streamline-Heroicons-Outline"
              height="27"
              width="27"
            >
              <desc>Trash Streamline Icon: https://streamlinehq.com</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.905416666666666 5.4375 -0.20904166666666663 5.4375m-2.89275 0L5.594583333333333 5.4375m6.022333333333333 -1.9393749999999998c0.206625 0.03141666666666666 0.4120416666666667 0.06464583333333333 0.6174583333333333 0.10029166666666667m-0.6174583333333333 -0.0996875L10.971666666666666 11.885770833333332a1.359375 1.359375 0 0 1 -1.35575 1.2548541666666666H4.884083333333333a1.359375 1.359375 0 0 1 -1.35575 -1.2548541666666666L2.8830833333333334 3.498125m8.733833333333333 0a29.065249999999995 29.065249999999995 0 0 0 -2.1012916666666666 -0.23985416666666667m-7.25 0.3395416666666667c0.20541666666666666 -0.03564583333333333 0.41083333333333333 -0.06887499999999999 0.6174583333333333 -0.0996875m0 0a29.06645833333333 29.06645833333333 0 0 1 2.1012916666666666 -0.23985416666666667m4.53125 0v-0.5534166666666667c0 -0.7129166666666665 -0.5497916666666667 -1.3074166666666667 -1.262708333333333 -1.3297708333333333a31.394916666666663 31.394916666666663 0 0 0 -2.005833333333333 0c-0.7129166666666665 0.022354166666666665 -1.262708333333333 0.6174583333333333 -1.262708333333333 1.3297708333333333v0.5534166666666667m4.53125 0a29.402979166666665 29.402979166666665 0 0 0 -4.53125 0"
                strokeWidth="1.5"
              ></path>
            </svg>
          </button>

          <a
            href={applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubPostedJobs;
