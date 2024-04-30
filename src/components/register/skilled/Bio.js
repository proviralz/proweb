'use client'
import React, { useState } from 'react'
import Header from '../Header'
import { skilled } from '@/components/data/featured';
import { FaPlus } from 'react-icons/fa6';
import { publicRequest } from '@/requestMethods';
import { useRouter } from 'next/navigation';

const Bio = ({prevPage, nextPage, id}) => {

    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [commitment, setCommitment] = useState('');
    const [bio, setBio] = useState('')
    const [rate, setRate] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter()


    const addSkill = (skill) => {
        if (!skills.includes(skill)) {
            setSkills([...skills, skill]);
            setNewSkill('');
        }
    };


    const removeSkill = (skillToRemove) => {
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    };

    // console.log(skills)


    const handleSubmit = async() => {

        // Validate form fields
        const errors = {};
        if (!commitment) {
            errors.commitment = 'Commitment type is required';
        }
        if (!rate) {
            errors.rate = 'Hourly rate is required';
        }

        if (Object.keys(errors).length === 0) {
            // Form is valid, proceed with submission
            try {
                const res = await publicRequest.put(`users/${id}`, {
                    bio,
                    skills,
                    availability: commitment,
                    rate
                })

                // console.log(res)

                if(res.status === 200)  {
                    nextPage()
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            setErrors(errors);
        }
    };
  return (
    <div>
        <div className='p-5 md:p-10'>
            <Header /> 
        </div>
        <div className={`  bg-white w-full flex justify-center`}>
            <div className=' p-5 border rounded-lg'>

                <div className='flex flex-col items-center'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Add Bio
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        <label htmlFor="bio">Give a brief description about yourself</label>
                        <textarea 
                            className='border p-3 w-full border-neutral-400 h-40 rounded-md outline-none text-neutral-600'  
                            name="" 
                            onChange={(e)=> setBio(e.target.value)}
                            placeholder='Add bio'
                            id="bio" />

                        
                    </div>
                </div>

                <div className='flex flex-col items-center mt-8'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Add Skills
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        <label htmlFor="skills">Your Skills</label>
                        <input 
                            type="text" 
                            name="skills" 
                            id="skills" 
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addSkill(newSkill.trim());
                                }
                            }}
                            placeholder='enter skill then click enter' />
                       
                        <div className=' flex gap-3 flex-wrap mt-5'>
                            {skills.map((skill, index) => (
                                <div key={index} className='inline-block bg-gray-200 rounded-md px-2 py-1 m-1'>
                                    {skill}
                                    <button 
                                        onClick={() => removeSkill(skill)} 
                                        className='ml-2 text-sm text-red-500'>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className=' flex gap-3 flex-wrap mt-5 w-4/5'>
                        {skilled?.map((tag, i)=> (
                            <div 
                                onClick={()=> addSkill(tag)} 
                                key={i} 
                                className=' flex items-center gap-2 capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-sm'>
                                <FaPlus /> {tag}
                            </div>
                        ))}
                    </div>      
                </div>

                <div className='flex flex-col items-center mt-10'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Availability
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        <label htmlFor="commitment">Which type of commitment do you prefer</label>
                        <select 
                            name="" 
                            value={commitment}
                            onChange={(e) => setCommitment(e.target.value)}
                            id="commitment">
                            <option value="">Select</option>
                            <option value="part time">Part time</option>
                            <option value="full time">Full time</option>
                        </select>
                        {errors.commitment && <p className='text-red-500 mt-2'>{errors.commitment}</p>}

                        <label htmlFor="rate">What is your preferred hourly rate in Naira</label>
                        <input 
                            type="number" 
                            name="" 
                            id="rate" 
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder='Enter Amount' />

                            {errors.rate &&  <p className='text-red-500 mt-2'>{errors.rate}</p>}

                    </div>
                </div>

                
                
                <div className=' flex mt-5 justify-around items-center text-lg'>
                    <div>
                        <p onClick={prevPage} className='trans-purple-btn'>
                            Back
                        </p>
                    </div>
                    
                    <div>
                        <p onClick={handleSubmit} className='purple-btn'>
                            Finish
                        </p>
                    </div>
                    
                </div>
                <div className=' h-10'>

                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Bio