'use client'
import { publicRequest } from '@/requestMethods';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [formErrors, setFormErrors] = useState([]);
    const [isClicked, setIsClicked] = useState(false)
    const router = useRouter()

    const registerUser = async ()=> {
        try {
            setIsClicked(true)
            const res = await publicRequest.post('affiliateauth/register', {
                fullName: name,
                email: email,
                password: password
            })
            // console.log(res)
            if (res.status === 201) {
                // setNewUser(res.data)
                router.push('/affiliate/login')
            }  
        } catch (error) {
            console.log(error)
            setIsClicked(false)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        let errors = [];

        

        if (!name || !email || !password || !confirmPassword || !acceptTerms) {
            errors.push('All fields are required.');
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match.');
        }

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!acceptTerms) {
            errors.push("You must accept terms of service and privacy policy")
        }

        setFormErrors(errors);

        if (errors.length === 0) {
            // Proceed with form submission or further processing
            console.log('Form is valid');
            registerUser()
            // nextPage()
            // Reset form or redirect user
        }
    };

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
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(e)=> setName(e.target.value)}
                        placeholder='Enter Fullname' />
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='Enter Email' />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e)=> setPassword(e.target.value)}
                        placeholder='Password' />
                    <input 
                        type="password" 
                        name="Confirm password" 
                        id="repeat" 
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        placeholder='Confirm Password' />
                    <div className=' flex items-center gap-4'>
                        <div onClick={()=> setAcceptTerms(!acceptTerms)} className=' h-6 w-8 border cursor-pointer border-neutral-400 rounded-sm flex items-center justify-center'>
                            {acceptTerms && <FaCheck className=' text-sm text-[#31013f] ' />}
                        </div>
                        <p className=' text-neutral-500 text-sm'>
                            By signing up, you accept the <span className=' text-[#31013f]'>Terms of service</span> and <span className=' text-[#31013f]'>Privacy policy</span>
                        </p>
                    </div>
                </div>
                <div className=' mt-2 space-y-1'>
                    {formErrors.length > 0 && (
                        <ul>
                            {formErrors.map((error, index) => (
                                <li className=' text-xs text-red-500 font-light'  key={index}>{error}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className=' mt-5'>
                    <div onClick={handleSubmit} className='purple-btn-long'>
                        {isClicked? (
                            <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ):(
                            <p>
                                Register
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
                </div> */}
                <div className=' mt-10 flex justify-center'>
                    <p className=' text-neutral-500 font-light'>
                        Already Registered? <Link href={'/affiliate/login'} className=' text-[#31013f] '>Login</Link>
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div className=' hidden w-1/2 bg-[#BA68C8] h-screen md:flex items-center justify-center'>
            <Image src={'/assets/onboard/woman-desktop.svg'} priority={true} alt='login' width={100} height={100} className=' w-full'  />
       </div>
    </div>
  )
}

export default Register