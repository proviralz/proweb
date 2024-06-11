import HeaderTwo from '@/components/header/HeaderTwo'
import React from 'react'
import WhyHireUs from './WhyHireUs'
import Image from 'next/image'
import Plans from './Plans'
import Footer from '@/components/footer/Footer'

const Social = () => {
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
                        Social Media Marketing
                    </p>
                    <p className=' text-white text-lg font-light text-center mt-3'>
                        Crafting your social media presence. Our agency strategizes, engages, <br />
                        and grows your brand. Let&apos;s you connect and elevate your online impact
                    </p>
                </div>
            </div>
        </div>

        <div className=' p-10 space-y-10'>


            {/* desc */}
            <div className=' flex items-center gap-16'>
                <div className=' space-y-10 w-3/5'>
                    <div>
                        <p>
                            Social Media Marketing Services
                        </p>
                    </div>
                    <div>
                        <p className=' text-justify text-sm font-light'>
                            Take your business online presence to the next level with Proviralz marketing services. we&apos;ll show you how to build and maximize your business online impact with our social media marketing services. From growing your social media following to increasing engagement and conversions, we&apos;ll cover it all. Our team provides valuable information that resonates your target audience. 
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
                        <Image src={'/assets/agency/social.svg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                </div>
            </div>

            {/* why */}
            <div>
                <WhyHireUs />
            </div>

            {/* packages */}
            <div>
                <Plans />
            </div>
        </div>

        <div>
            <Footer />
        </div>

    </div>
  )
}

export default Social