import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { experience, featured, gallery, reviews, skills } from '../data/featured'
import { TbCameraPlus } from "react-icons/tb";
import { FaStar } from 'react-icons/fa';
import Footer from '../footer/Footer';
import { MdOutlineEdit } from "react-icons/md";
import { FaPlus } from 'react-icons/fa6';
import CompleteProfile from './CompleteProfile';
import HeaderTwo from '../header/HeaderTwo';
import { useSelector } from 'react-redux';

const UserProfile = () => {

    const user = useSelector(state => state.user.info)

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
            <HeaderTwo />
        </div>


        <div  className=' p-5 md:p-10 md:flex md:justify-between gap-5'>


            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex md:flex-row flex-col gap-5'>
                    <div className=' relative bg-slate-400 md:w-2/5 rounded-sm overflow-hidden'>
                        <div className=' absolute bg-white p-1 rounded-full bottom-3 left-3 text-neutral-600 text-xl'>
                            <TbCameraPlus />
                        </div>
                        <Image src={user?.profilePic} alt='user' width={100} height={100} className=' h-full object-cover w-full' />
                    </div>
                    <div className=' md:w-3/5 text-neutral-500'>
                        <div>
                            <p>
                                {user?.fullName}
                            </p>
                            <p className=' text-xs mt-1'>
                                @{user?.username}
                            </p>
                        </div>
                        <div className=' mt-3 flex items-center gap-2'>
                            {user?.interests?.map((u, i)=> (
                                <p key={i} className=' text-sm'>
                                    {u}
                                </p>
                            ))}
                        </div>
                        <div className=' mt-3'>
                            <p className=' text-[0.7rem]'>
                                {user?.bio}
                            </p>
                        </div>
                        <div className='mt-3'>
                            <div>
                                Skills:
                            </div>
                            <div className=' mt-3'>
                                <div  className=' flex gap-3 flex-wrap '>
                                    {user?.skills?.map((tag, i)=> (
                                        <div key={i} className=' border capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-xs'>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5 bg-white rounded-md mt-5'>
                    <div className=' flex justify-between items-center border-b pb-5'>
                        <div>
                            <p className=' text-lg text-neutral-500'>
                                Portfolio
                            </p>
                        </div>
                        <div>
                            <p className=' purple-btn-long text-xs'>
                                Add to portfolio
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
                    <div className=' mt-10'>
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
                                            <p className=' w-1/2'>
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


            <div className=' w-full md:w-72  lg:w-[400px]'>
                <div className=' mt-5 md:mt-0 bg-white p-5 rounded-md'>
                    <div>
                        <p>
                            Basic information
                        </p>
                    </div>
                    <div className=' text-neutral-500 mt-3 text-xs flex flex-wrap gap-10'>
                        <div>
                            <p>
                                Availability
                            </p>
                            <p>
                                {user?.availability}
                            </p>
                        </div>
                        <div>
                            <p>
                                years of experience
                            </p>
                            <p>
                                {user?.experience[0]?.years} years
                            </p>
                        </div>
                        <div>
                            <p>
                                Location
                            </p>
                            <p>
                                {user?.location?.state} {user?.location?.country}
                            </p>
                        </div>
                        <div>
                            <p>
                                Rate
                            </p>
                            <p>
                                &#8358;{user?.rate}/hr
                            </p>
                        </div>
                        <div>
                            <p>
                                Ratings
                            </p>
                            <p>
                                5
                            </p>
                        </div>
                    </div>
                    <div  className='flex justify-center mt-5'>
                        <p className=' trans-purple-btn'>
                            Share your work
                        </p>
                    </div>
                </div>

                <div className=' bg-white p-5 rounded-md mt-5 text-neutral-500'>
                    <div className=' flex justify-center '>
                        <p>
                            Edit profile
                        </p>
                    </div>
                    <div className=' mt-4 border-b pb-4 flex justify-between'>
                        <div>
                            <p className=' text-sm'>
                                Description
                            </p>
                            <p className=' text-[0.6rem] w-3/4 mt-1'>
                                {user?.bio}
                            </p>
                        </div>
                        <div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                        </div>
                    </div>
                    <div className=' mt-4 border-b pb-4 flex justify-between'>
                        <div>
                            <p className=' text-sm'>
                                Skills
                            </p>
                            <div className=' mt-2'>
                                <div  className=' flex gap-1 flex-wrap '>
                                    {user?.skills?.map((tag, i)=> (
                                        <div key={i} className=' border capitalize bg-neutral-100 px-2 py-1 rounded-full text-neutral-500  text-[0.6rem]'>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=' flex gap-2 items-start '>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <FaPlus />
                            </div>
                        </div>
                    </div>
                    <div className=' mt-4 border-b pb-4 flex justify-between'>
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
                        <div className=' flex gap-2 items-start '>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <FaPlus />
                            </div>
                        </div>
                    </div>

                    {/* <div className=' mt-4 border-b pb-4 flex justify-between'>
                        <div>
                            <p className=' text-sm'>
                                Languages
                            </p>
                            <p className=' text-xs mt-2 font-light'>
                                English (Basic)
                            </p>
                        </div>
                        <div className=' flex gap-2 items-start '>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <FaPlus />
                            </div>
                        </div>
                    </div> */}

                    <div className=' mt-4 flex justify-between'>
                        <div>
                            <p className=' text-sm'>
                                Education
                            </p>
                            {user?.education?.map((e, i)=> (
                                <div key={i} className=' mt-2 text-xs font-light'>
                                    <p>
                                        {e.school}
                                    </p>
                                    <p>
                                        {e.field} ({e.degree})
                                    </p>
                                    <p>
                                        {convertDateToMonthYear(e.startDate)} - {convertDateToMonthYear(e.endDate)}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className=' flex gap-2 items-start '>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <FaPlus />
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className=' mt-5'>
                    <CompleteProfile />
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default UserProfile