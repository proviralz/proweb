import Image from 'next/image'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const Login = () => {
  return (
    <div className=' p-5'>
       <div className=' mt-10'>
        <div>
            <p className=' text-3xl text-neutral-700 font-light'>
                Login
            </p>
        </div>
        <div className=' login-form mt-6 flex flex-col gap-4'>
            <input type="text" name="email" id="" placeholder='Username or Email' />
            <input type="text" name="password" id="" placeholder='Password' />
            <div className=' flex justify-end'>
                <p className=' text-neutral-500'>
                    Forgot password?
                </p>
            </div>
        </div>
        <div className=' mt-5'>
            <p className='purple-btn-long'>
                Login
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
                Not Registered? <span className=' text-[#31013f] '>Sign up</span>
            </p>
        </div>
       </div>
    </div>
  )
}

export default Login