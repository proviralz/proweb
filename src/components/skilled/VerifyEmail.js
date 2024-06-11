import { updateSuccess } from '@/redux/userSlice';
import { userRequest } from '@/requestMethods';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';

const VerifyEmail = ({showForm, setShowForm, user}) => {

    const popUpClassName = `pop-up ${showForm ? 'show' : ''}`;

    const inputRefs = useRef([]);
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        if (paste.length === 5) {
          paste.split('').forEach((char, index) => {
            if (inputRefs.current[index]) {
              inputRefs.current[index].value = char;
            }
          });
          setOtp(paste);
          e.preventDefault();
        }
      };

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (value.length === 1) {
          setOtp((prevOtp) => prevOtp.slice(0, index) + value + prevOtp.slice(index + 1));
          if (index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
          }
        }
      };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Gather the OTP from the inputs
        const enteredOtp = inputRefs.current.map(input => input.value).join('');
        if (enteredOtp.length === 5) {
          console.log('OTP submitted:', enteredOtp);
          try {
            const res = await userRequest.post(`users/verify-email`, {
                email: user?.email,
                verificationCode: enteredOtp
            })

            alert(res.data)
            dispatch(updateSuccess({ ...user, emailVerified: true }))
            setShowForm(false)
          } catch (error) {
            console.log(error)
            setError(error.response?.data || 'An error occurred');
          }
          // Add your submit logic here, such as sending the OTP to the server
        } else {
          alert('Please enter a valid 5-digit OTP');
        }
      };
    
    const handleResend = async()=> {
        try {
            const res = await userRequest.post(`users/request-verification-code`, {
                email: user?.email
            })

            alert(res.data)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div onClick={(e)=> {setShowForm(false); e.stopPropagation()}} 
        className={popUpClassName}>
        <div onClick={(e)=> e.stopPropagation()} 
            className='overflow-y-scroll w-4/5 h-2/4 bg-white rounded-xl'
        >

           <div className=' flex justify-center items-center h-full'>
            <div className=' text-neutral-600 text-sm flex justify-center flex-col text-center gap-5'>
                <div>
                    <p>
                        Enter your code here
                    </p>
                </div>
                <div>
                    <p className=' font-light'>
                        We sent a code to <span className=' font-normal text-neutral-700'>{user?.email}</span>
                    </p>
                </div>
                <div>
                    <form className="flex justify-between gap-3" onPaste={handlePaste}>
                        {[...Array(5)].map((_, index) => (
                            <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-12 h-20 text-center text-2xl border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31013f]"
                            ref={(el) => (inputRefs.current[index] = el)}
                            onChange={(e) => handleChange(e, index)}
                            />
                        ))}
                    </form>
                    {error && <div className="text-red-500 my-2">{error}</div>}
                </div>
                <div className=' flex items-center justify-around'>
                    <div>
                        <p onClick={handleResend} className=' text-[#31013f]'>
                            Resend code
                        </p>
                    </div>
                    <div>
                        <p onClick={handleSubmit} className=' purple-btn'>
                            Verify Email
                        </p>
                    </div>
                </div>
            </div>
           </div>
           
            
        </div>
    </div>
  )
}

export default VerifyEmail