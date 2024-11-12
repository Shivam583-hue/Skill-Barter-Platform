import InboxPageComponent from "../../Components/InboxPageComponent";

const InboxPage = () => {
  return (
    <div className="flex flex-col mt-5 items-center h-screen">
      <div>
        <h1 className="bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold ">
          Requests and Proposals
        </h1>
        <div className="divider"></div>
      </div>
      <div>
        <InboxPageComponent
          sent_by="John Doe"
          sent_by_image="https://i.pinimg.com/474x/6f/29/15/6f2915c19523846d99ec56ea09914522.jpg"
          sent_on="2024-01-01"
          proposal_id={1}
          proposal_title="Proposal Title"
          proposal_description="Proposal Description"
        />
      </div>
    </div>
  );
};

export default InboxPage;
