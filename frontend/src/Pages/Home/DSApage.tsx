import DsaPageComponent from "../../Components/DsaPageComponent"
const DSApage = () => {
    return (
        <div className='flex flex-col mt-5 items-center h-screen'>
            <div>
                <h1 className='bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold '>DSA Stuff </h1>
                <div className="divider"></div>
            </div>
            <div>
                <DsaPageComponent title="Roadmap" description="Roadmap to competitive programming" postedOn="2024-01-01" Createdby="John Doe" creatorimage="https://i.pinimg.com/474x/6f/29/15/6f2915c19523846d99ec56ea09914522.jpg" />
            </div>
        </div>
    )
}

export default DSApage
