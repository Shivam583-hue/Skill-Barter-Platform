import logo from "../../Assets/logo.png";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useLogout from "../../Hooks/useLogout";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(true);
  const [developer, setDeveloper] = useState(false);
  const [designer, setDesigner] = useState(false);
  const [dsa, setDSA] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [flex, setFlex] = useState(false);
  const [profile, setProfile] = useState(false);
  const [inbox, setInbox] = useState(false);
  const navigate = useNavigate();

  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const class1 = "w-full";
  const class2 = "w-full ml-[300px]";

  const handleHome = () => {
    navigate("/");
    setHome(true);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleDeveloper = () => {
    navigate("/developer");
    setHome(false);
    setDeveloper(true);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleDesigner = () => {
    navigate("/designer");
    setHome(false);
    setDeveloper(false);
    setDesigner(true);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleDSA = () => {
    navigate("/dsa");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(true);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleJobs = () => {
    navigate("/job");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(true);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleFlex = () => {
    navigate("/flex");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(true);
    setProfile(false);
    setInbox(false);
  };
  const handleProfile = () => {
    navigate("/profile");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(true);
    setInbox(false);
  };
  const { logout } = useLogout();

  const handlePost = () => {
    navigate("/postoptions");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(false);
  };
  const handleInbox = () => {
    navigate("/inbox");
    setHome(false);
    setDeveloper(false);
    setDesigner(false);
    setDSA(false);
    setJobs(false);
    setFlex(false);
    setProfile(false);
    setInbox(true);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex">
      {isOpen ? (
        <motion.button
          whileHover={{ scale: 1.0 }}
          className="flex mt-4 ml-3"
          onClick={handleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="27px"
            viewBox="0 -960 960 960"
            width="27px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </motion.button>
      ) : (
        <div
          style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
          className="bg-[#1C1C1E] h-screen w-[300px] fixed"
        >
          <div>
            <motion.button
              whileHover={{ scale: 1.0 }}
              className="flex mt-4 ml-5"
              onClick={handleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="27px"
                viewBox="0 -960 960 960"
                width="27px"
                fill="#e8eaed"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </motion.button>
            
          </div>
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleHome}
              whileTap={{ scale: 0.98 }}
              className=" mt-3 bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {home ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 -960 960 960"
                    width="26px"
                    fill="#e8eaed"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                )}
              </div>
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleInbox}
              whileTap={{ scale: 0.98 }}
              className="  bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {inbox ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                  </svg>
                )}
              </div>
              Inbox
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleDeveloper}
              whileTap={{ scale: 0.98 }}
              className="   bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[9px] pr-3">
                {developer ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EFEFEF"
                  >
                    <path d="M80-160q-33 0-56.5-23.5T0-240h160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240h160q0 33-23.5 56.5T880-160H80Zm400-40q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200ZM160-320h640v-440H160v440Zm0 0v-440 440Z" />
                  </svg>
                )}
              </div>
              Developer
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleDesigner}
              whileTap={{ scale: 0.98 }}
              className="   bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[7px] pr-3">
                {designer ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm586-529 54-54-57-57-54 54 57 57ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EFEFEF"
                  >
                    <path d="M160-120v-170l527-526q12-12 27-18t30-6q16 0 30.5 6t25.5 18l56 56q12 11 18 25.5t6 30.5q0 15-6 30t-18 27L330-120H160Zm80-80h56l393-392-28-29-29-28-392 393v56Zm560-503-57-57 57 57Zm-139 82-29-28 57 57-28-29ZM560-120q74 0 137-37t63-103q0-36-19-62t-51-45l-59 59q23 10 36 22t13 26q0 23-36.5 41.5T560-200q-17 0-28.5 11.5T520-160q0 17 11.5 28.5T560-120ZM183-426l60-60q-20-8-31.5-16.5T200-520q0-12 18-24t76-37q88-38 117-69t29-70q0-55-44-87.5T280-840q-45 0-80.5 16T145-785q-11 13-9 29t15 26q13 11 29 9t27-13q14-14 31-20t42-6q41 0 60.5 12t19.5 28q0 14-17.5 25.5T262-654q-80 35-111 63.5T120-520q0 32 17 54.5t46 39.5Z" />
                  </svg>
                )}
              </div>
              Designer
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleDSA}
              whileTap={{ scale: 0.98 }}
              className="   bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {dsa ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EFEFEF"
                  >
                    <path d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Zm280-600h160v-120H400v120ZM200-160h160v-120H200v120Zm400 0h160v-120H600v120ZM480-680ZM360-280Zm240 0Z" />
                  </svg>
                )}
              </div>
              DSA
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleJobs}
              whileTap={{ scale: 0.98 }}
              className="   bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {jobs ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#EFEFEF"
                  >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
                  </svg>
                )}
              </div>
              Jobs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleFlex}
              whileTap={{ scale: 0.98 }}
              className="   bg-transparent  text-white w-64 h-12 rounded-3xl font-sans flex pt-1  pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {flex ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                )}
              </div>
              Flex
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={handleProfile}
              whileTap={{ scale: 0.98 }}
              className="  bg-transparent text-white w-64 h-12 rounded-3xl font-sans flex pt-1 pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                {profile ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 -960 960 960"
                    width="26px"
                    fill="#e8eaed"
                  >
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                )}
              </div>
              Profile
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={logout}
              whileTap={{ scale: 0.98 }}
              className="  bg-transparent text-white w-64 h-12 rounded-3xl font-sans flex pt-1 pl-12 font-semibold text-[25px] hover:bg-[#343635] "
            >
              <div className="pt-[6px] pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26px"
                  viewBox="0 -960 960 960"
                  width="26px"
                  fill="#e8eaed"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                </svg>
              </div>
              Sign Out
            </motion.button>
            <footer className="absolute bottom-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handlePost}
                whileTap={{ scale: 0.98 }}
                className="mt-5 bg-cyan-600 text-white w-40 h-16 rounded-full font-sans flex pt-1 pl-12 font-semibold text-[25px] hover:bg-cyan-700 "
              >
                <h1 className="pl-1 text-3xl pt-[8px]">Post</h1>
              </motion.button>
            </footer>
          </div>
        </div>
      )}
      <div className={isOpen ? class1 : class2}>
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
