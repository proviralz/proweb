import Image from 'next/image'
import React from 'react'
import { FaCheck, FaFacebookF } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const StepOne = ({nextPage}) => {
  return (
    <div className=' md:flex'>
        <div className=' md:p-10 md:flex-1 md:bg-neutral-100 md:flex md:items-center'>
            <div className=' p-5 md:p-0'>
                <div className=' mt-10 md:mt-0 bg-white h-full p-5 md:p-10 md:shadow-2xl'>
                <div>
                    <p className=' text-3xl text-neutral-700 font-light'>
                        Sign up
                    </p>
                </div>
                <div className=' login-form mt-6 flex flex-col gap-4'>
                    <input type="text" name="name" id="name" placeholder='Enter Fullname' />
                    <input type="text" name="email" id="email" placeholder='Enter Email' />
                    <input type="password" name="password" id="password" placeholder='Password' />
                    <input type="password" name="Confirm password" id="repeat" placeholder='Confirm Password' />
                    <div className=' flex items-center gap-4'>
                        <div className=' h-6 w-8 border border-neutral-400 rounded-sm flex items-center justify-center'>
                            <FaCheck className=' text-sm text-[#31013f] ' />
                        </div>
                        <p className=' text-neutral-500 text-sm'>
                            By signing up, you accept the <span className=' text-[#31013f]'>Terms of service</span> and <span className=' text-[#31013f]'>Privacy policy</span>
                        </p>
                    </div>
                </div>
                <div className=' mt-5'>
                    <p onClick={nextPage} className='purple-btn-long'>
                        Register
                    </p>
                </div>
                <div className=' mt-5 flex items-center gap-2 justify-between'>
                    <div className=' bg-neutral-400 h-[1px] w-full'></div>
                    <div className=' w-72 flex justify-center'>
                        <p className=' text-sm  text-neutral-500'>
                            Or login with
                        </p>
                    </div>
                    <div className='bg-neutral-400 h-[1px] w-full'></div>
                </div>
                <div className=' mt-5 flex flex-col gap-4'>
                    <div className='trans-btn'>
                        <FcGoogle />
                        <p className=''>
                            Continue with Google
                        </p>
                    </div>
                    <div className='trans-btn'>
                        <FaFacebookF className=' text-[#3b5998]' />
                        <p>
                            Continue with Facebook
                        </p>
                    </div>
                </div>
                <div className=' mt-10 flex justify-center'>
                    <p className=' text-neutral-500 font-light'>
                        Already Registered? <span className=' text-[#31013f] '>Login</span>
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div className=' hidden w-1/2 bg-[#BA68C8] h-screen md:flex items-center justify-center'>
            <Image src={'/assets/onboard/woman-desktop.svg'} alt='login' width={100} height={100} className=' w-full'  />
       </div>
    </div>
  )
}

export default StepOne