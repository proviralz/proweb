'use client'
import { affiliateLogin } from '@/redux/affiliateApiCalls';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

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
        const res = await affiliateLogin({email, password}, dispatch)
        console.log(res.data)
        if(res.status ===  200) {
          router.push('/affiliate/dashboard')
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
                
                <div className=' mt-10 flex justify-center'>
                    <p className=' text-neutral-500 font-light'>
                        Not Registered? <Link href={'/affiliate/register'} className=' text-[#31013f] '>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
       <div className=' hidden w-1/2 bg-[#e1dddd] h-screen md:flex items-center justify-center'>
        <Image src={'/assets/affiliate/extra/amico.svg'} alt='login' width={100} height={100} priority={true} className=' w-full'  />
       </div>
    </div>
  )
}

export default Login