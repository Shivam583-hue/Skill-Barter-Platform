import { motion } from "framer-motion";

const DevOpptur = () => {
  const handleCreate = () => {};

  return (
    <div>
      {/* Image Container */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk.jpg"
          alt="Notion Cover"
        />
      </div>
      {/* Title Container */}
      <div className="p-4">
        <input
          className="text-3xl font-bold w-full md:w-[900px] focus:outline-none text-mono"
          placeholder="Title goes here."
        />
      </div>
      {/* Description Container */}
      <div className="p-4">
        <textarea
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 resize-none p-2 rounded-md focus:outline-none "
          placeholder="Description goes here."
        />
      </div>
      {/* Details Container */}
      <div className="p-4">
        <textarea
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48 resize-none p-2 rounded-md focus:outline-none "
          placeholder="Details go here."
        />
      </div>
      <motion.button
        onClick={handleCreate}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#3a3b3a] hover:bg-[#555655] rounded-2xl px-3 font-mono text-gray-300 font-bold text-lg py-1 mx-4 my-2"
      >
        Create
      </motion.button>
    </div>
  );
};

export default DevOpptur;
