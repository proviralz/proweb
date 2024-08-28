import { adminLogin } from '@/redux/apiCalls';
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
        const res = await adminLogin({email, password}, dispatch)
        console.log(res.data)
        if(res.status ===  200) {
          router.push('/admin')
        }
      } catch (error) {
        // console.log(error)
        setError(error.response.data)
        setIsClicked(false)
      }
    }
  return (
    <div className=' relative p-5 md:p-0 md:flex md:bg-neutral-100'>
        <div className=' p-10 absolute top-0 left-0'>
            <div>
                {/* <Image src={'/assets/logo/logo.svg'} alt='' width={100} height={100} /> */}
                <p className=' font-bold text-xl'>
                    Admin
                </p>
            </div>
        </div>
        <div className='  md:p-10 flex-1 my-auto md:bg-neutral-100'>
            <div className=' mt-20 md:mt-0 bg-white p-5 md:shadow-2xl '>
                <div>
                    <p className=' text-2xl text-neutral-700'>
                        Login to your Admin account
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
                        <Link href={'/forgot-password'} className=' text-neutral-500'>
                            Forgot password?
                        </Link>
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
                <div className=' mt-6 flex justify-center'>
                    <p className=' text-neutral-700 font-light'>
                        Not Registered? <Link href={'/admin/register'} className=' text-[#31013f] '>Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
       <div className=' hidden w-1/2 bg-[#e1dddd] h-screen md:flex items-center justify-center'>
        <Image src={'/assets/admin/bro.svg'} alt='login' width={500} height={500} priority={true} className=' w-full'  />
       </div>
    </div>
  )
}

export default Login
