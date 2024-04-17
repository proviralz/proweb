'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import { login } from '@/redux/apiCalls';
import { useDispatch } from 'react-redux';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        setIsClicked(true)
        const res = await login({email, password}, dispatch)
        console.log(res.data)
        if(res.status ===  200) {
          router.push('/')
        }
      } catch (error) {
        // console.log(error)
        setError(error.response.data)
        setIsClicked(false)
      }
    }
  return (
    <div className=' p-5 md:p-0 md:flex md:bg-neutral-100'>
        <div className=' md:p-10 flex-1 my-auto md:bg-neutral-100'>
            <div className=' mt-10 md:mt-0 bg-white p-5 md:shadow-2xl '>
                <div>
                    <p className=' text-3xl text-neutral-700 font-light'>
                        Login
                    </p>
                </div>
                <div className=' mt-4 text-sm text-red-500'>
                    {error && <p>{error}</p>}
                </div>
                <div className=' login-form mt-6 flex flex-col gap-4'>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email' />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password' />
                    <div className=' flex justify-end'>
                        <p className=' text-neutral-500'>
                            Forgot password?
                        </p>
                    </div>
                </div>
                <div className=' mt-5'>
                    <div onClick={handleSubmit} className='purple-btn-long'>
                        {isClicked? (
                            <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ):(
                            <p>
                                Login
                            </p>
                        ) }
                    </div>
                </div>
                {/* <div className=' mt-5 flex items-center gap-2 justify-between'>
                    <div className=' bg-neutral-400 h-[1px] w-full'></div>
                    <div className=' w-72 flex justify-center'>
                        <p className=' text-sm  text-neutral-500'>
                            Or login with
                        </p>
                    </div>
                    <div className='bg-neutral-400 h-[1px] w-full'></div>
                </div> */}
                {/* <div className=' mt-5 flex flex-col gap-4'>
                    <div onClick={()=> signIn("google")} className='trans-btn'>
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
                </div> */}
                <div className=' mt-10 flex justify-center'>
                    <p className=' text-neutral-500 font-light'>
                        Not Registered? <Link href={'/start'} className=' text-[#31013f] '>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
       <div className=' hidden w-1/2 bg-[#BA68C8] h-screen md:flex items-center justify-center'>
        <Image src={'/assets/onboard/woman-desktop.svg'} alt='login' width={100} height={100} priority={true} className=' w-full'  />
       </div>
    </div>
  )
}

export default Login