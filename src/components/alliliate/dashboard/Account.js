import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import ChangePassword from './ChangePassword'
import PrivacyPolicy from './PrivacyPolicy'

const Account = () => {

    const [isSelected, setIsSelected] = useState("personal-information")


  return (
    <div className=' space-y-8'>
        <div>
            <div>
                <p>
                    Account Details
                </p>
            </div>
        </div>
        <div>
            <div className=' w-full border rounded-lg overflow-hidden'>
                <div className='flex'>
                    <div onClick={()=> setIsSelected("personal-information")} className={` ${isSelected === 'personal-information' && 'bg-[#31013f] text-white'}  text-xs p-3 cursor-pointer`}>
                        <p>
                            Personal information
                        </p>
                    </div>
                    <div onClick={()=> setIsSelected("change-password")} className={` ${isSelected === 'change-password' && 'bg-[#31013f] text-white'}  text-xs p-3 cursor-pointer`}>
                        <p>
                            Change Password
                        </p>
                    </div>
                    <div onClick={()=> setIsSelected("privacy-policy")} className={` ${isSelected === 'privacy-policy' && 'bg-[#31013f] text-white'}  text-xs p-3 cursor-pointer`}>
                        <p>
                            Privacy policy
                        </p>
                    </div>
                </div>

                <div className=' mt-5 md:p-5'>
                    {isSelected === 'personal-information' && (
                        <PersonalInfo />
                    )}
                    {isSelected === 'change-password' && (
                        <ChangePassword />
                    )}
                    {isSelected === 'privacy-policy' && (
                        <PrivacyPolicy />
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account