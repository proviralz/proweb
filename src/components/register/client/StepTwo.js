import React, { useState } from 'react'
import Header from '../Header';
import { useRouter } from 'next/navigation';
import { publicRequest } from '@/requestMethods';
import { skilledInterest, unSkilledInterest } from '@/components/data/interests';

const StepTwo = ({prevPage, userId}) => {


    const [industry, setIndustry] = useState('')
    const [bio, setBio] = useState('');
    const [errors, setErrors] = useState({});
    const router = useRouter()



    const handleSubmit = async() => {

      // Validate form fields
      const errors = {};
      if (!industry) {
          errors.industry = 'Industry is required';
      }
      if (!bio) {
          errors.bio = 'Bio is required';
      }

      if (Object.keys(errors).length === 0) {
          // Form is valid, proceed with submission
          try {
              const res = await publicRequest.put(`users/${userId}`, {
                  companyProfile: {
                    description: bio,
                    industry
                  }
              })

              // console.log(res)

              if(res.status === 200)  {
                  router.push('/login')
              }
          } catch (error) {
              console.log(error)
          }
      } else {
          setErrors(errors);
      }
    };

    const allIndustries = [...skilledInterest, ...unSkilledInterest]
  return (
    <div>
        <div className='p-5 md:p-10'>
            <Header /> 
        </div>
        <div className={`  bg-white w-full flex justify-center`}>
            <div className=' p-5 border rounded-lg md:w-3/4'>

                <div className='flex flex-col items-center'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Company description
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

                <div className='flex flex-col items-center mt-10'>
                    <div>
                        <p className='text-xl capitalize text-neutral-600'>
                            Industry/sector
                        </p>
                    </div>

                    <div className=' login-form w-3/4 flex flex-col gap-2'>
                        {/* <label htmlFor="commitment">Which type of commitment do you prefer</label> */}
                        <select 
                            name="interest" 
                            value={industry|| ""}
                            onChange={(e) => setIndustry(e.target.value)}
                            id="industry">
                            <option value="">Industry/sector</option>
                            {allIndustries.map((ind, i)=> (
                                <option key={i} value={ind.title}>{ind.title}</option>
                            ))}

                        </select>
                        {errors.industry && <p className='text-red-500 mt-2'>{errors.industry}</p>}

                        

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

export default StepTwo