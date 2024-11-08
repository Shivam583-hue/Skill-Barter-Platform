import { motion } from "framer-motion"

const SubOpportunity = ({design_id,developer_id,title,description,commentCount,postedOn,Createdby,creatorimage}:{design_id:number | null,developer_id:number | null,title:string,description:string,commentCount:number,postedOn:string,Createdby:string,creatorimage:string}) => {
  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[800px] mx-auto my-4">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={creatorimage} alt={Createdby} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="text-gray-300 font-semibold">{Createdby}</h3>
              <p className="text-gray-400 text-sm">Posted on: {postedOn}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex">
            <h2 className="text-2xl font-bold text-[#e3a428]">{title}</h2>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.98 }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </motion.button>
          </div>
          <p className="text-gray-300 font-serif">{description}</p>
        </div>

        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span>{commentCount} comments</span>
          </div>
        </div>

        <div className="flex justify-end ">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#e3a428] hover:bg-[#c38d22] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
            Details
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default SubOpportunity
