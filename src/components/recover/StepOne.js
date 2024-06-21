import { userRequest } from '@/requestMethods';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const StepOne = ({setCurrentStep, email, setEmail}) => {

    // const [email, setEmail] = useState("");
    const [error, setError] = useState(null)
    const [isClicked, setIsClicked] = useState(false)


    const handleRequestReset = async (e) => {
        e.preventDefault();
        try {
            setIsClicked(true)
            const response = await userRequest.post('users/request-reset-password', { email });
            alert(response.data); // Notify the user that the reset code was sent
            setCurrentStep(2);
        } catch (err) {
            setError(err.response.data);
            setIsClicked(false)
        }
    };


  return (
    <div className=' relative p-5 md:p-0 md:flex md:bg-neutral-100'>
        <div className=' p-10 absolute top-0 left-0'>
            <div>
                <Image src={'/assets/logo/logo.svg'} alt='' width={100} height={100} />
            </div>
        </div>
        <div className='  md:p-10 flex-1 my-auto md:bg-neutral-100'>
            <div className=' mt-20 md:mt-0 bg-white p-5 md:shadow-2xl md:py-20 '>
                <div>
                    <p className=' text-xl text-neutral-700'>
                        Forgot Password?
                    </p>
                </div>
                <div className=' mt-4 text-sm text-red-500'>
                    {error && <p>{error}</p>}
                </div>
                <div className=' login-form mt-6 flex flex-col gap-4'>
                    <label className=' text-sm' htmlFor="email">Input tthe email associated with your account</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email' />
                    
                    
                </div>
                <div className=' mt-5'>
                    <div onClick={handleRequestReset} className='purple-btn-long'>
                        {isClicked? (
                            <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ):(
                            <p>
                                Submit
                            </p>
                        ) }
                    </div>
                </div>
                
                
                <Link href={'/login'} className=' mt-6 flex justify-center w-full'>
                    <p className='trans-purple-btn w-full'>
                        Cancel
                    </p>
                </Link>
            </div>
        </div>
       <div className=' hidden w-1/2 bg-[#BA68C8] h-screen md:flex items-center justify-center'>
        <Image src={'/assets/onboard/woman-desktop.svg'} alt='login' width={500} height={500} priority={true} className=' w-full'  />
       </div>
    </div>
  )
}

export default StepOne