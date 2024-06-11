import React from 'react'
import { GoServer } from 'react-icons/go'
import { PiFloppyDiskBackThin, PiFolderSimplePlusThin } from 'react-icons/pi'

const WhyHireUs = () => {
  return (
    <div className=' bg-yellow-500/10 rounded-lg'>
        <div className=' flex flex-col md:flex-row items-center gap-5 p-3'>
            <div className=' flex-1'>
                <p className=' text-[#31013f] text-lg'>
                    Why should you hire us?
                </p>
                <p className=' text-xs font-light mt-5 text-justify'>
                Hiring us is the best decision that will move your business from few sales per week to consistently daily appointments and bookings.
                We have a team of  digital marketing experts with years of experience in indepth data analytics,metrics measurement and customer behavior needs tailored to serve different type of businesses and now is the time to reach out to more audiences of your services within your scope.
                </p>
            </div>
            <div className=' flex-1 space-y-6'>
                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFolderSimplePlusThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Email design
                        </p>
                        <p className=' text-xs font-extralight'>
                            We help you build an email list of leads of your services get them stored and to use for marketing and retargetting in future 
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center  ml-10'>
                    <div className=' p-4 bg-white rounded-full'>
                        <PiFloppyDiskBackThin />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Automation emails sequence
                        </p>
                        <p className=' text-xs font-extralight'>
                            Get our email service where our team of marketing professionals send out offers,deals,sales of your product to you potential customers on a consistent basis.
                        </p>
                    </div>
                </div>

                <div className=' flex gap-3 items-center'>
                    <div className=' p-4 bg-white rounded-full'>
                    <GoServer />
                    </div>
                    <div className=' space-y-3 text-neutral-600 w-3/4'>
                        <p className=' text-sm font-semibold'>
                            Personalization and segment :
                        </p>
                        <p className=' text-xs font-extralight'>
                            We provide a detailed list of hot,cold and existing Customers  of your brand and push out different type of marketing materials to them to take buying decision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyHireUs