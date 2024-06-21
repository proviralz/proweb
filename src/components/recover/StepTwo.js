import { userRequest } from '@/requestMethods';
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

const StepTwo = ({email, setCurrentStep}) => {

    // const [email, setEmail] = useState("");
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
    const inputRefs = useRef([]);

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        if (paste.length === 4 && /^\d+$/.test(paste)) {
          paste.split('').forEach((char, index) => {
            if (inputRefs.current[index]) {
              inputRefs.current[index].value = char;
            }
          });
          setOtp(paste);
          e.preventDefault();
          // Focus on the next input after the last pasted character
          if (inputRefs.current[paste.length]) {
            inputRefs.current[paste.length].focus();
          }
        }
      };
    
      const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d$/.test(value)) { // Only accept single digit numbers
          setOtp((prevOtp) => prevOtp.slice(0, index) + value + prevOtp.slice(index + 1));
          if (index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
          }
        }
      };


      const handleSubmit = async(e) => {
        e.preventDefault();
        setIsClicked(true)
        // Gather the OTP from the inputs
        const enteredOtp = inputRefs.current.map(input => input.value).join('');
        if (enteredOtp.length === 4) {
          console.log('OTP submitted:', enteredOtp);
          try {
            const res = await userRequest.post(`users/confirm-reset-code`, {
                email,
                resetCode: enteredOtp
            })

            alert(res.data)
            setCurrentStep(3)
          } catch (error) {
            console.log(error)
            setIsClicked(false)
            setError(error.response?.data || 'An error occurred');
          }
          // Add your submit logic here, such as sending the OTP to the server
        } else {
          alert('Please enter a valid 4-digit OTP');
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
                <div className=' mt-16'>
                    <p className=' font-light'>
                        We sent a code to <span className=' font-normal text-neutral-700'>{email}</span>
                    </p>
                </div>
                <div className=' mt-5'>
                    <form className="flex justify-around gap-3" onPaste={handlePaste}>
                        {[...Array(4)].map((_, index) => (
                            <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-12 h-20 text-center text-2xl border-neutral-400 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31013f]"
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(e, index)}
                            />
                        ))}
                    </form>
                    {error && <div className="text-red-500 my-2">{error}</div>}
                </div>
                <div className=' mt-5'>
                    <div onClick={handleSubmit} className='purple-btn-long'>
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

export default StepTwo