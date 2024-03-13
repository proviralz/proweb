import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className=' p-5 relative h-screen flex flex-col justify-center'>
        
        {/* top */}
        <div className=' absolute top-10 ml-auto mr-auto left-0 right-0 flex justify-center flex-col items-center gap-4'>
            {/* logo */}
            <div>
                <Image src={"/assets/logo/logo.svg"} alt='logo' width={100} height={100} className='' />
            </div>

            {/* welcome text */}
            <p className=' uppercase text-lg text-neutral-500'>
                welcome back
            </p>
        </div>

        {/* form */}
        <div className=' flex flex-col signup-form gap-5 mt-5'>
            <input type="text" placeholder='Email' name='email' />
            <input type="password"  placeholder="Password" name='password' />

            <div className=' flex justify-center mt-5'>
                <p className=' bg-[#CCE7F1] w-full text-center p-3 rounded-lg text-neutral-600 font-semibold'>
                    Login
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login