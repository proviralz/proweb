import HeaderTwo from '@/components/header/HeaderTwo'
import React from 'react'
import WhyHireUs from './WhyHireUs'
import Image from 'next/image'
import Plans from './Plans'
import Footer from '@/components/footer/Footer'

const Seo = () => {
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
                        <p className=' capitalize text-xl'>
                            Boost your visibility: The power of SEO Unleashed
                        </p>
                    </div>
                    <div>
                        <p className=' text-justify text-sm font-light'>
                            At Proviralz, we believe in a data-driven approach to digital marketing. Our team will work closely with you to understand your unique needs and goals, and develop a customized strategy to achieve them. Improve your business online visibility and credibility, improve your search engine rankings and drive organic traffic, Drive conversions and boost sales to stay ahead of the competition. Learn more about Proviralz services and take your business online presence to the next level. 
                        </p>
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
                    <div className=' h-96 w-72'>
                        <Image src={'/assets/agency/seo.svg'} alt='' width={100} height={100} className=' h-full w-full object-contain' />
                    </div>
                </div>
            </div>


            {/* 2 */}
            {/* <div className=' flex items-center gap-10'>
                <div className=' flex-1'>
                    <div className=' '>
                        <Image src={'/assets/agency/woman.svg'} alt='' width={500} height={500} className=' w-full h-full' />
                    </div>
                </div>
                <div className=' flex-1 space-y-5'>
                    <div>
                        <p className=' text-[#31013f] text-sm italic uppercase font-light'>
                            why us?
                        </p>
                    </div>
                    <div>
                        <p className=' text-[#31013f] text-2xl'>
                            How Proviralz create growth for your business
                        </p>
                    </div>
                    <div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                    </div>
                    <div>
                        <ul className=" list-inside space-y-2 text-sm font-light">
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
                        </ul>
                    </div>
                </div>
            </div> */}

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

export default Seo