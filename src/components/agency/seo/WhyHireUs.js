import React from 'react'
import { GoServer } from 'react-icons/go'
import { PiFloppyDiskBackThin, PiFolderSimplePlusThin } from 'react-icons/pi'

const WhyHireUs = () => {
  return (
    <div className=' bg-yellow-500/10 rounded-lg'>
        <div className=' flex items-center gap-5 p-3'>
            <div className=' flex-1'>
                <p className=' text-[#31013f] text-2xl'>
                    Drive Targeted Traffic <br />
                    and Boost Conversions
                </p>
                <p className=' text-sm font-light mt-5 text-justify'>
                    Drive targeted traffic and conversion- we create contents targeted at thousands of your audiences who are ready to pay for your services 
                </p>
            </div>
            <div className=' flex-1 space-y-6'>
                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFolderSimplePlusThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                        Increased traffic
                        </p>
                        <p className=' text-xs font-extralight'>
                        Increase the reach of your business to a large numbers of prospective customers that ready to pay for your services 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center  ml-10'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFloppyDiskBackThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                        Local seo optimization
                        </p>
                        <p className=' text-xs font-extralight'>
                        Get your services targeted at customers around you who needs you services immediately 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                    <GoServer />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                        Improved ranking
                        </p>
                        <p className=' text-xs font-extralight'>
                        Get more visibility on the online space compared to your competitors
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyHireUs