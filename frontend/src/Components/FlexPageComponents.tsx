import { motion } from 'framer-motion'


const FlexPageComponents = ({title,description,postedOn,Createdby,creatorimage}:{title:string,description:string,postedOn:string,Createdby:string,creatorimage:string}) => {
  return (
    <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300  w-full sm:w-[500px] md:w-[800px]  mx-auto my-4">
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
          <h2 className="text-2xl font-bold text-[#76967f]">{title}</h2>
          <p className="text-gray-300 font-serif">{description}</p>
        </div>

        <div className="flex justify-end">
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="bg-[#2c3333] hover:bg-[#181c1c] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
          >
            Details
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default FlexPageComponents
