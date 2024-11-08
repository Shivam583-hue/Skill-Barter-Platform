import { motion } from "framer-motion"

const AuthenticatedProfileCard = ({fullName,username,profilePic,bio,portfolio,createdAt}:{fullName:string,username:string,profilePic:string,bio:string,portfolio:string,createdAt:string}) => {
  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[900px] mx-auto my-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start">
          <img 
            src={profilePic} 
            alt={fullName} 
            className="w-32 h-32 rounded-full object-cover border-4 border-cyan-500"
          />
          <h2 className="text-2xl font-bold md:pl-4 text-cyan-500 mt-4">{fullName}</h2>
          <p className="text-gray-400 md:pl-4">@{username}</p>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-300">Bio</h3>
            <p className="text-gray-400">{bio}</p>
          </div>

          <div>
            <h3 className="text-lg flex font-semibold text-gray-300">Portfolio<span className="pt-0.5 pl-0.5"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg></span></h3>
            <a 
              href={portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyan-500 hover:text-cyan-400 transition-colors"
            >
              {portfolio}
            </a>
          </div>

          <div className="flex">
            <h3 className="text-sm font-semibold flex text-gray-300"><span className="pt-0.5"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg></span>Joined</h3>
            <p className="text-gray-300 text-sm pl-1"><span></span>{new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="bg-gray-500 flex hover:bg-gray-700  rounded-2xl px-4  text-black font-bold py-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                <h1 className="pl-1 text-lg">Edit</h1>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticatedProfileCard
