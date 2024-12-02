
const members = [
  { id: 1, name: "Alice Johnson", avatar: "/images/alice.jpg", role: "Admin" },
  { id: 2, name: "Bob Smith", avatar: "/images/bob.jpg", role: "Member" },
  { id: 3, name: "Charlie Brown", avatar: "/images/charlie.jpg", role: "Member" },
];

const ViewMembers = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="w-full max-w-[400px] bg-gray-900 p-6 rounded-lg shadow-md">
        <header className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-lg font-semibold">Chaddi Gang Members</h2>
        </header>

        <main className="mt-4 space-y-3 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-gray-800 scrollbar-thumb-rounded-full">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center p-3 bg-gray-800 rounded-md"
            >
              <img
                src={member.avatar}
                alt={`${member.name}'s avatar`}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3 flex justify-between w-full">
                <p className="text-sm font-medium">{member.name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-x ml-auto">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                  <path d="M22 22l-5 -5" />
                  <path d="M17 22l5 -5" />
                </svg>
              </div>
            </div>
          ))}
        </main>

        <footer className="mt-6">
          <button
            onClick={() => window.history.back()}
            className="w-full py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-600 transition"
          >
            Back
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ViewMembers;