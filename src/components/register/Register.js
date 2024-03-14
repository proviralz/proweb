'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaFacebookF } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import Select from './Select';
// import { FaCheck } from "react-icons/fa";

const Register = () => {

    const [showSelect, setShowSelect] = useState(false)

    // #CCE7F1
  return (
    <div className=' p-5'>
        <div className=' fixed top-0  w-full left-0'>
            <Select showSelect={showSelect} setShowSelect={setShowSelect} />
        </div>
       <div className=' mt-10'>
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
            <p onClick={()=> setShowSelect(true)} className='purple-btn-long'>
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
  )
}

export default Register