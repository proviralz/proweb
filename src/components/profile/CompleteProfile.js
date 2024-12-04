import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompleteProfile = () => {
  return (
    <Link href={'/profile'}>
        <div className=' p-5 bg-[#31013f] rounded-md'>
            <div>
                <Image src={'/assets/footer/logo.svg'} alt='Proviralz' width={100} height={100} />
            </div>
            <div className=' flex mt-5'>
                <div>
                    <p className=' text-white text-3xl md:text-2xl lg:text-3xl'>
                        Complete your profile today and let your skin shine
                    </p>
                </div>
                <div>
                    <Image src={'/assets/profile/complete.svg'} alt='' width={100} height={100} className=' w-96 h-full' />
                </div>
            </div>
            <div className=' mt-5'>
                <p className=' yellow-btn-long'>
                    Complete profile
                </p>
            </div>
        </div>
    </Link>
  )
}

export default CompleteProfile