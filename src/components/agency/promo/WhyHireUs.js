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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            <div className=' flex-1 space-y-6'>
                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFolderSimplePlusThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Email campaign design and creation
                        </p>
                        <p className=' text-xs font-extralight'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center  ml-10'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFloppyDiskBackThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Email campaign design and creation
                        </p>
                        <p className=' text-xs font-extralight'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                    <GoServer />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Email campaign design and creation
                        </p>
                        <p className=' text-xs font-extralight'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyHireUs