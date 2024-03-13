import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa";

const Register = () => {

    // #CCE7F1
  return (
    <div className='p-5 relative h-screen flex flex-col justify-center'>
        
        {/* top */}
        <div className='absolute top-10 ml-auto mr-auto left-0 right-0 flex justify-center flex-col items-center gap-4'>
            {/* logo */}
            <div>
                <Image src={"/assets/logo/logo.svg"} alt='logo' width={100} height={100} className='' />
            </div>

            {/* welcome text */}
            <p className=' uppercase text-lg text-neutral-500'>
                welcome to suuave
            </p>
        </div>

        {/* form */}
        <div className=' mt-10'>
            {/* user type */}
            <div className=' border flex p-1 gap-2 rounded-lg text-center'>
                <p className='cursor-pointer flex-1 bg-[#CCE7F1] rounded-md p-2 text-neutral-600 text-sm'>
                    Fashion Designer
                </p>
                <p className='cursor-pointer flex-1 bg-[#f2f1f1] rounded-md p-2 text-neutral-600 text-sm'>
                    Fashion illustrator
                </p>
            </div>

            <div className='mt-10'>
                <div className='signup-form flex gap-5'>
                    <input type="text" name="firstname" id=""  placeholder='Firstname' className='w-1/2'  />
                    <input type="text" name="lastname" id=""  placeholder="Lastname" className=' w-1/2' />
                </div>
                <div className=' flex flex-col signup-form gap-5 mt-5'>
                    <input type="text" placeholder='Email' name='email' />
                    <input type="tel"  placeholder="Phone" name='phone' />
                    {/* <label className=' -mb-4 text-neutral-500 text-sm px-3' htmlFor="dob">Select Category</label> */}
                    <input type="text" name="username" placeholder='username' id="" />
                </div>

            </div>
            <div className=' mt-5 flex items-center gap-4 px-5'>
                <div className=' bg-neutral-300 p-1 rounded-sm text-xs'>
                    <FaCheck />
                </div>
                <div>
                    <small className=' text-neutral-500'>
                        By creating an account, I agree to Suuave Terms of service and privacy policy
                    </small>
                </div>
            </div>

            <div className=' flex justify-center mt-5'>
                <p className=' bg-[#CCE7F1] w-full text-center p-3 rounded-lg text-neutral-600 font-semibold'>
                    Create account
                </p>
            </div>
        </div>
    </div>
  )
}

export default Register