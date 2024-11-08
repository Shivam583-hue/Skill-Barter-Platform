import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { motion } from 'framer-motion';
const PostOptions = () => {
    const [designer, setDesigner] = useState(false);
    const [developer, setDeveloper] = useState(false);
    const [flex, setFlex] = useState(false);
    const [dsa, setDSA] = useState(false);
    const [job, setJob] = useState(false);

    const handleOptionChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setDesigner(false);
        setDeveloper(false);
        setFlex(false);
        setJob(false);
        setDSA(false);
        setter(true);
    };

    return (
        <div className='flex justify-center items-center pt-32'>
            <div className='bg-[#1E1E1E] rounded-[50px]  p-10 w-[700px] h-full'>
                <div>
                    <h1 className='text-cyan-500 text-[30px] font-bold '>What would you like to post?</h1>
                </div>
                <div>
                <FormGroup className='flex flex-col mt-5'>
                    <FormControlLabel className='text-gray-300 text-[20px] font-semibold font-mono' control={<Checkbox checked={designer} onChange={() => handleOptionChange(setDesigner)} />} 
                        label="Designer Opportunity" 
                    />
                    <FormControlLabel className='text-gray-300 text-[20px] font-semibold font-mono' control={<Checkbox checked={developer} onChange={() => handleOptionChange(setDeveloper)} />} 
                        label="Developer Opportunity" 
                    />
                    <FormControlLabel className='text-gray-300 text-[20px] font-semibold font-mono' control={<Checkbox checked={dsa} onChange={() => handleOptionChange(setDSA)} />} 
                        label="DSA stuff" 
                    />
                    <FormControlLabel className='text-gray-300 text-[20px] font-semibold font-mono' control={<Checkbox checked={flex} onChange={() => handleOptionChange(setFlex)} />} 
                        label="Flex Accomplishments" 
                    />
                    <FormControlLabel className='text-gray-300 text-[20px] font-semibold font-mono' control={<Checkbox checked={job} onChange={() => handleOptionChange(setJob)} />} 
                        label="Job Opportunities" 
                    />
                    
                </FormGroup>
                </div>
                <div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="bg-cyan-500 hover:bg-cyan-600  rounded-2xl px-5 font-mono text-black font-bold text-lg py-1  my-2">
                    Next
                </motion.button>
                </div>
            </div>
        </div>
    )
}

export default PostOptions
