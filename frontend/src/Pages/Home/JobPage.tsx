import JobPageComponent from "../../Components/JobPageComponent"

const JobPage = () => {
    return (
        <div className='flex flex-col mt-5 items-center h-screen'>
            <div className="mb-5">
                <h1 className='bg-gradient-to-r text-shadow-lg from-cyan-500  to-blue-400 text-transparent text-bold bg-clip-text text-[40px] font-bold '>Job Opportunities </h1>
                <div className="divider"></div>
            </div>
            <div>
                <JobPageComponent title="Software Engineer" description="We are looking for a software engineer with 3 years of experience in React, Node.js, and MongoDB." company="Tech Corp" location="New York, NY" salary="$120,000 - $150,000" applyLink="" />
            </div>
        </div>
    )
}

export default JobPage
