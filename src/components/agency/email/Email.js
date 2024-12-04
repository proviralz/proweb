import React from 'react'
import HeaderTwo from '../../header/HeaderTwo'
import Image from 'next/image'
import WhyHireUs from './WhyHireUs'
import Plans from './Plans'
import Footer from '../../footer/Footer'

const Email = () => {
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>

        <div>
            <div className='bg-slate-100 h-48 relative overflow-hidden'>
                <div
                    className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                    style={{
                        backgroundImage: `url('/assets/extra/gradient.svg')`,
                    }}
                />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <p className='text-white text-4xl font-semibold text-center'>
                        Email Marketing
                    </p>
                    <p className=' text-white text-lg font-light text-center mt-3'>
                        Elevate your outreach. Our agency delivers impactful email campaigns that resonate. <br />
                        Reach new heights with us
                    </p>
                </div>
            </div>
        </div>

        <div className=' p-10 space-y-10'>


            {/* desc */}
            <div className=' flex items-center flex-col md:flex-row gap-16'>
                <div className=' space-y-10 w-3/5'>
                    <div>
                        <p>
                            Email Marketing Services
                        </p>
                    </div>
                    <div>
                        <p className=' text-justify text-sm font-light'>
                            Proviralz is a marketing platform designed to help businesses like yours thrive online. Our team will provide tips on segmentation and personalization techniques, comprehensive guide on how email marketing automation can save time and boost efficiency, Creative ideas for email marketing campaigns, how to avoid spam filters and improve deliverability.
                        </p>
                    </div>
                    <div>
                        {/* <ul className=" list-inside space-y-2 text-sm font-light">
                            <li className="text-gray-700">
                                <span className="inline-block w-3 h-3 bg-[#31013f] rounded-full mr-2"></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="text-gray-700">
                                <span className="inline-block w-3 h-3 bg-[#31013f] rounded-full mr-2"></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="text-gray-700">
                                <span className="inline-block w-3 h-3 bg-[#31013f] rounded-full mr-2"></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="text-gray-700">
                                <span className="inline-block w-3 h-3 bg-[#31013f] rounded-full mr-2"></span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="text-gray-700">
                                <span className="inline-block w-3 h-3 bg-[#31013f] rounded-full mr-2"></span>
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul> */}
                    </div>
                    <div>
                        <div className=' inline-block'>
                            <p className=' purple-btn text-xs'>
                                Book a package
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' h-60 w-60'>
                        <Image src={'/assets/agency/email.svg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                </div>
            </div>

            {/* why */}
            <div>
                <WhyHireUs />
            </div>

            {/* packages */}
            {/* <div>
                <Plans />
            </div> */}
        </div>

        <div>
            <Footer />
        </div>

    </div>
  )
}

export default Email