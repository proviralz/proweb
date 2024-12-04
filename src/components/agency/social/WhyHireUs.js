import React from 'react'
import { GoServer } from 'react-icons/go'
import { PiFloppyDiskBackThin, PiFolderSimplePlusThin } from 'react-icons/pi'

const WhyHireUs = () => {
  return (
    <div className=' bg-yellow-500/10 rounded-lg'>
        <div className=' flex items-center gap-5 p-3'>
            <div className=' flex-1'>
                <p className=' text-[#31013f] text-lg'>
                    Why should you hire us?
                </p>
                <p className=' text-xs font-light mt-5 text-justify'>
                    Reach potential clients and increase your chances of been hired by clients.follow up on clients and retain customers loyalty.
                </p>
            </div>
            <div className=' flex-1 space-y-6'>
                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFolderSimplePlusThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Social media campaign design and creation
                        </p>
                        <p className=' text-xs font-extralight'>
                            Increase sales: leverage on email marketing to increase client hire rate
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center  ml-10'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFloppyDiskBackThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Retain customer
                        </p>
                        <p className=' text-xs font-extralight'>
                            Follow up on client and increase chances of getting hired consistently 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                    <GoServer />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Tailor content to target customers
                        </p>
                        <p className=' text-xs font-extralight'>
                            Get to connect with your customers pain points and position your services as the right services they need.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyHireUs