import Image from 'next/image'
import React from 'react'

const Earn = () => {
  return (
    <div className=' bg-gradient-to-r  from-[#31013f] to-[#d946ef] p-5'>
        <div className=' flex justify-between'>
            <div className=' text-white'>
                <p className=' text-3xl'>
                    Earn Cash
                </p>
                <p className=' text-neutral-200 font-light mt-2'>
                    Need extra cash? <br />
                    Share proviralz to your peers <br />
                    Earn commission on every referral
                </p>
            </div>
            <div>
                <Image src={'/assets/extra/male.svg'} alt='' width={100} height={100} />
            </div>
        </div>
        <div className=' mt-5'>
            <p className=' yellow-btn-long'>
                Start earning now
            </p>
        </div>
    </div>
  )
}

export default Earn