import React from 'react'
import Layout from '../layout/Layout'
import Image from 'next/image'
import { FiFlag } from 'react-icons/fi'
import { PiEyeThin } from 'react-icons/pi'
import { ImSpinner9 } from "react-icons/im";

const About = () => {
  return (
    <Layout>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className='p-5 md:p-10 bg-white space-y-10'>
                <div className=' flex flex-col md:flex-row items-center gap-10'>
                    <div className=' md:max-w-[60%] space-y-5'>
                        <div>
                            <p className=' text-2xl text-[#31013f]'>
                                About Proviralz
                            </p>
                        </div>
                        <div className=' inline-block'>
                            <p className=' text-lg text-[#31013f] border-b border-neutral-700'>
                                Who we are
                            </p>
                        </div>
                        <div>
                            <p className=' text-sm text-neutral-600 font-light'>
                                Proviralz is an online recruitment platform where professionals,artisans,freelancers,skilled and unskilled workers get to showcase their skills to a larger audience,connect with ready customers or clients of their service and where clients get the best hands to work on their projects. <br /> <br />
                                At Proviralz we have the goal of consistently helping physical business owners and service providers make the most out of their skills,talent and expertise by giving them visibility to reach a targeted large audience who are based around their locality or how far they desire to extend the delivery of their services to. Spread their business stories and expertise across multiple online digital platforms where their potential customers can find them.
                                
                            </p>
                        </div>
                    </div>
                    <div className=' w-4/5 md:max-w-[40%]'>
                        <div>
                            <Image src={'/assets/about/1.svg'} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
                

                <div className=' flex flex-col md:flex-row items-center gap-10'>
                    <div className=' order-2 md:order-1 w-4/5 md:max-w-[40%]'>
                        <div>
                            <Image src={'/assets/about/2.svg'} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className=' order-1 md:order-2  md:max-w-[60%] space-y-5'>
                        
                        <div className=' inline-block'>
                            <p className=' text-lg text-[#31013f] border-b border-neutral-700'>
                                What we do
                            </p>
                        </div>
                        <div>
                            <p className=' text-sm text-neutral-600 font-light'>
                                We share business updates that facilitate the growth such as Trade fairs,Government grants,bootcamps,business insight,and brand strategies to stand out in the labor market. <br /> <br />
                                Creating a platform where Potential Customers of business owners can go through their portfolio,recent jobs and reviews from satisfied clients. <br /> <br />
                                We value the growth of our Users Businesses and satisfaction of Requesters of their services. We are dedicated to always providing them with all it requires to help them make consistent Sales and thorough screening of the best hands to work on their projects.
                            </p>
                        </div>
                    </div>
                    
                </div>


                <div>
                    <div className=' flex flex-col md:flex-row  md:justify-between gap-5'>
                        <div className=' bg-neutral-100 flex-1 p-4 flex flex-col gap-3 items-center text-center'>
                            <div className=' p-2 bg-[#31013f] rounded-md text-white'>
                                <FiFlag />
                            </div>
                            <div>
                                <p className=' font-semibold text-neutral-600'>
                                    Our Mission
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs font-extralight text-neutral-600'>
                                    To provide a platform that creates visibility for professionals,artisans,skilled and unskilled to display their expertise,interact and find ready recruiters of their services around their locality and beyond by increasing the demand for their services up to 70%.
                                    Provide an opportunity for skilled workers to network and get updates on events and fairs to make more sales. <br />
                                    Help Recruiters of services get the best hands needed around their locality and beyond for their project by taking away the fear of hiring an amateur to handle projects that need excellent touches.                                </p>
                            </div>
                        </div>

                        <div className=' bg-neutral-100 flex-1 p-4 flex flex-col gap-3 items-center text-center'>
                            <div className=' p-2 bg-[#31013f] rounded-md text-white'>
                                <PiEyeThin />
                            </div>
                            <div>
                                <p className=' font-semibold text-neutral-600'>
                                    Our Vision
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs font-extralight text-neutral-600'>
                                    To become the most trusted online platform to find jobs and best job deliveries for projects. <br />
                                    To help over at least 80% of the Nigerian Physical based business and experts get visibility and demand of their services consistently. <br />
                                    To Expand the Potentials that online visibility holds for Physical businesses to other African countries with proofs of the Impact that Proviralz has had in Nigeria&apos;s physical business market.                                </p>
                            </div>
                        </div>

                        <div className=' bg-neutral-100 flex-1 p-4 flex flex-col gap-3 items-center text-center'>
                            <div className=' p-2 bg-[#31013f] rounded-md text-white'>
                                <ImSpinner9 />
                            </div>
                            <div>
                                <p className=' font-semibold text-neutral-600'>
                                    Our Values
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs font-light text-neutral-600'>
                                    We are committed to growth,dedication, honesty,trust,Timely delivery and Teamwork.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default About