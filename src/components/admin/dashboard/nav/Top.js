import Image from 'next/image'
import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'

const Top = ({isSelected}) => {
  return (
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
            <p className=' capitalize'>
              {isSelected}
            </p>
        </div>
        <div className=' flex items-center gap-6'>
            <div>
                <IoIosNotificationsOutline size={30} color='red' />
            </div>
            <div className=' flex items-center gap-4'>
                <div>
                    <Image src={'/assets/profile/user1.svg'} alt=' user' width={100} height={100} className=' w-10 h-auto' />
                </div>
                <div>
                    <p className=' font-semibold'> 
                        James Adams
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Top
