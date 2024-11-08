import { motion } from 'framer-motion'

const SubPostedJobs = ({job_id,title,description,company,location,salary,applyLink}:{job_id:number,title:string,description:string,company:string,location:string,salary:string,applyLink:string}) => {
  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-4xl w-full mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold text-cyan-500">{title}</h2>
          <span className="text-blue-500 text-xl pt-2 font-semibold">{salary}</span>
        </div>
        <div className="flex flex-wrap gap-4 text-gray-300">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-semibold text-lg font-mono">{company}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-lg pr-5 font-mono">{location}</span>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.98 }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </motion.button>
          </div>
        </div>

        <p className="text-gray-300 mt-2 font-semibold text-lg font-serif">{description}</p>

        <div className="flex justify-end mt-4">
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
  )
}

export default SubPostedJobs
