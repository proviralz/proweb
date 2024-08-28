import Image from 'next/image'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { RiAdminFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'

const Top = ({isSelected}) => {

  const user = useSelector(state => state.admin.info)

  if(!user) {
    return;
  }

  return ( user &&
    <div>
      <div className=' py-5 px-10 flex items-center justify-between shadow-md bg-white'>
        <div>
            <Image 
                src={'/assets/logo/logo.svg'} 
                alt='Proviralz' 
                width={100} 
                height={100} 
                className=' w-full h-auto' />
            
        </div>
        <div>
            <p className=' capitalize font-semibold text-neutral-800'>
              {isSelected}
            </p>
        </div>
        <div className=' flex items-center gap-6'>
            <div>
                {/* <IoIosNotificationsOutline size={30} color='red' /> */}
            </div>
            <div className=' flex items-center gap-4'>
                <div>
                    {/* <Image src={'/assets/profile/user1.svg'} alt=' user' width={100} height={100} className=' w-10 h-auto' /> */}
                    <p>
                      <RiAdminFill size={35} />
                    </p>
                </div>
                <div>
                    <p className=' font-semibold'> 
                        {user?.fullName}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top
