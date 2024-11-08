import SubPostedJobs from "../../../Components/SubProfilePageComponents/SubPostedJobs.tsx"

const PostedJobs = () => {
  return (
    <div>
      <SubPostedJobs job_id={1} title="Software Engineer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." company="Google" location="New York, NY" salary="$100,000 - $120,000" applyLink="https://www.google.com"/>
    </div>
  )
}

export default PostedJobs
