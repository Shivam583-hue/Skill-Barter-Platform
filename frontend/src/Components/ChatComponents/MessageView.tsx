const MessageView = () => {
  return (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://i.pinimg.com/474x/1c/c1/ff/1cc1ff58a682b8de7d3d77220277fcd0.jpg"
        alt="Jese image"
      />

      <div className="flex flex-col  w-full sm:w-[500px] md:w-[800px]  ">
        <div className="flex items-center space-x-2 ">
          <span className="text-sm font-semibold text-yellow-600">Shraddha Kapoor</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
        </div>
        <div className="flex flex-col leading-[1.5] py-2 border-gray-200  rounded-e-xl rounded-es-xl text-gray-300">
          <p className="text-md  ">
            That's awesome. I think our users will really appreciate the improvements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
