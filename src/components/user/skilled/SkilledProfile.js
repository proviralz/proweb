import ClientHeader from '@/components/client/ClientHeader'
import Footer from '@/components/footer/Footer'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaPlus, FaRegAddressCard, FaStar } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlineEdit, MdOutlinePayments } from 'react-icons/md'
import SendMessage from '../client/SendMessage'
import { gallery, reviews } from '@/components/data/featured'

const SkilledProfile = ({user}) => {

    const [showForm, setShowForm] = useState(false)

    function convertDateToMonthYear(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className=" text-yellow-400"/>);
            } else {
                stars.push(<FaStar key={i} className=" text-neutral-500"/>);
            }
        }
        return stars;
    };
  return (
    <div className=' bg-neutral-100'>
        <div>
            <ClientHeader />
        </div>


        <div>
            <SendMessage 
                showForm={showForm} 
                setShowForm={setShowForm}
                clientData={user} />
        </div>


        <div className=' p-5 md:p-10 md:flex md:justify-between gap-5'>
            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex flex-col gap-1'>


                    <div className=' border rounded-sm p-5 flex flex-col md:flex-row gap-5'>
                        <div>
                            <div className=' md:h-20 md:w-20 md:rounded-full rounded-md overflow-hidden'>
                                <Image src={user?.profilePic} alt={user?.fullName} height={100} width={100} className=' h-full w-full object-cover' />
                            </div>
                        </div>
                        <div>
                            <div className=' space-y-5'>
                                <div className=' space-y-2'>
                                    <p>
                                        {user?.fullName}
                                    </p>
                                    <p className=' text-xs font-light'>
                                        @{user?.username}
                                    </p>
                                    <div className=' flex items-center gap-5'>
                                        <div className=' flex items-center gap-2'>
                                            {user?.interests.map((interest, i)=> (
                                                <p key={i} className=' text-sm font-light'>
                                                    {interest}
                                                </p>
                                            ))}
                                        </div>
                                        <div>
                                            <p className=' text-sm font-light'>
                                                &#8358;{user?.rate}/hr
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className=' text-sm font-light'>
                                        {user?.bio}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p onClick={()=> setShowForm(true)} className='purple-btn-long text-xs'>
                                            Send a message
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='p-5 bg-white rounded-md mt-5'>
                            <div className=' flex justify-center items-center border-b pb-5'>
                                <div>
                                    <p className=' text-lg text-neutral-500'>
                                        Portfolio
                                    </p>
                                </div>
                                
                            </div>
                            <div className=' mt-5'>
                                <div className=' flex flex-wrap justify-center md:justify-between gap-10'>
                                    {gallery.map((g, i)=> (
                                        <div key={i} className=' w-56'>
                                            <div className=' w-full rounded-lg overflow-hidden'>
                                                <Image src={g.img} alt={g.title} width={100} height={100} className=' w-full'  />
                                            </div>
                                            <div className=' mt-2 flex text-xs justify-between text-neutral-500'>
                                                <p>
                                                    {g.title}
                                                </p>
                                                <p className=' cursor-pointer'>
                                                    Remove
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    </div>


                </div>
            </div>


            <div className=' w-full md:w-72  lg:w-[400px]'>
                <div className=' mt-5 md:mt-0 bg-white p-5 rounded-md flex flex-col gap-1'>
                    
                    <div className='py-4'>
                        
                        
                        <div className=' mt-4 flex flex-col gap-2'>
                            <p className=' text-sm'>
                                Client verification
                            </p>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <FaRegAddressCard />
                                </p>
                                <p>
                                    Identity verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <IoMailOutline />
                                </p>
                                <p>
                                    Email verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <BsTelephone />
                                </p>
                                <p>
                                    Phone verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <MdOutlinePayments />
                                </p>
                                <p>
                                    Payment verified
                                </p>
                            </div>
                        </div>


                        {/* experience */}
                        <div className=' mt-7 flex justify-between'>
                            <div>
                                <p className=' text-sm'>
                                    Experience
                                </p>
                                <div className=' mt-2'>
                                    {user?.experience?.map((ex,i)=> (
                                        <div key={i} className=' flex gap-2'>
                                            <div className=''>
                                                <div className=' border rounded-full h-8 w-8 overflow-hidden'>
                                                    <Image src={'/assets/profile/company.jpeg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                                                </div>
                                            </div>
                                            <div className=' text-xs flex flex-col gap-1'>
                                                <div>
                                                    <p>
                                                        {ex.company}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        {ex.title}
                                                    </p>
                                                </div>
                                                <div className=' flex text-[0.5rem]'>
                                                    <p>
                                                        {convertDateToMonthYear(ex.startDate)} - &nbsp; 
                                                    </p>
                                                    <p>
                                                        {convertDateToMonthYear(ex.endDate)}
                                                    </p>
                                                    {/* <p>
                                                        ({ex.location})
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <div className=' flex gap-2 items-start '>
                                <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                    <MdOutlineEdit />
                                </div>
                                <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                    <FaPlus />
                                </div>
                            </div> */}
                        </div>
                        
                        {/* reviews */}
                        <div className=' mt-7'>
                            <div>
                                <p>
                                    Reviews
                                </p>
                            </div>
                            <div className=' mt-6 flex flex-col gap-4'>
                                {reviews.map((rev, i)=> (
                                    <div key={i} className=' flex gap-3'>
                                        <div className=''>
                                            <Image src={rev.img} alt='' width={100} height={100} className=' h-10' />
                                        </div>
                                        <div className=' text-xs text-neutral-500 flex flex-col gap-1'>
                                            <div>
                                                <p className=' text-sm'>
                                                    {rev.name}
                                                </p>
                                            </div>
                                            <div>
                                                <p className=' text-[0.6rem] '>
                                                    {rev.location}
                                                </p>
                                            </div>
                                            <div className=' flex items-center gap-5'>
                                                <div>
                                                    <p  className=' flex items-center gap-2'>
                                                        {rev.rating} <span className=' flex'>{generateStars(rev.rating)}</span>
                                                    </p>
                                                </div>
                                                <p className=' text-neutral-300'>
                                                    |
                                                </p>
                                                <div className=' text-[0.6rem] '>
                                                    {rev.date}
                                                </div>
                                            </div>
                                            <div>
                                                <p className=' w-full font-light'>
                                                    {rev.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default SkilledProfile