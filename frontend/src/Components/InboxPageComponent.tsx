
const InboxPageComponent = ({sent_by, sent_by_image, sent_on,proposal_id, proposal_title, proposal_description}: {sent_by: string, sent_by_image: string, sent_on: string,proposal_id: number, proposal_title: string, proposal_description: string}) => {
    return (
        <div className="bg-[#232223] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-[500px] md:w-[800px] mx-auto my-4">
            <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img src={sent_by_image} alt={sent_by} className="w-10 h-10 rounded-full" />
                        <div>
                            <h3 className="text-gray-300 font-semibold">{sent_by}</h3>
                            <p className="text-gray-400 text-sm">Sent on: {sent_on}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-[#e3a428]">{proposal_title}</h2>
                    <p className="text-gray-300 font-serif">{proposal_description}</p>
                </div>

                <div className="flex justify-end space-x-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                        Decline
                    </button>
                    <button className="bg-[#e3a428] hover:bg-[#c38d22] text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InboxPageComponent
