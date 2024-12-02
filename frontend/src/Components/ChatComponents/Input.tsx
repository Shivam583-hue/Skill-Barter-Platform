
const Input = () => {
  return (
    <div className="flex items-center focus:ring-2 focus:ring-cyan-500 border-2 border-white bg-[#2c313a] rounded-3xl shadow-md px-4 py-2  w-full sm:w-[500px] md:w-[800px] mx-auto">
      <span className="text-white pr-2">      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-message"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" /></svg></span>
      <input
        type="text"
        placeholder="Type a message..."
        className="bg-transparent flex-1 text-cyan-600 placeholder-gray-400 font-semibold outline-none"
      />
      <button
        className="ml-2 bg-black border-2 border-white hover:bg-gray-900 text-white p-2 rounded-full shadow-md transition-all duration-300 focus:outline-none"

        aria-label="Send"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icon-tabler-send"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 14l11 -11" />
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
        </svg>
      </button>
    </div>
  );
}

export default Input
