
const FlexView = () => {
  return (
    <div className="min-h-screen bg-[#1a191a] text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://i.pinimg.com/474x/6f/29/15/6f2915c19523846d99ec56ea09914522.jpg"
            className="w-16 h-16 rounded-full border-2 border-[#2ba098]"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-200">Shivam</h3>
            <p className="text-gray-400">Posted on: 01-02-2007</p>
          </div>
        </div>

        {/* Title and description */}
        <h1 className="text-4xl font-bold text-[#2ba098] mb-4">Title</h1>
        <p className="text-xl text-gray-300 mb-8">
          The prophecy has been fulfilled The prophecy has been fulfilled The
          prophecy has been fulfilled The prophecy has been fulfilled The
          prophecy has been fulfilled The prophecy
        </p>

        {/* Main content section */}
        <div className="bg-[#232223] rounded-3xl p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            Content Start by creating a new Vite project if you don’t have one
            set up already. The most common approach is to use Create Vite.
            Start by creatinContent Start by creating a new Vite project if you
            don’t have one set up already. The most common approach is to use
            Create Vite. Start by creatin
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlexView;
