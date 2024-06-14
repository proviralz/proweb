import React, { useState } from 'react'
import ClientHeader from './ClientHeader'
import { FiSearch } from 'react-icons/fi'
import { PiHandshakeLight } from "react-icons/pi";
import { FaChalkboardUser } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import ActionsTab from './ActionsTab';
import Sidebar from './Sidebar';
import TopProjects from './TopProjects';
import Footer from '../footer/Footer';
import VerifyEmail from '../skilled/VerifyEmail';
import { useSelector } from 'react-redux';

const ClientHome = () => {

  const user = useSelector(state => state.user.info)

  const [showForm, setShowForm] = useState(!user?.emailVerified)

  return (
    <div>
        <div>
          <ClientHeader />
        </div>

        <div>
            <VerifyEmail 
                setShowForm={setShowForm} 
                showForm={showForm}
                user={user} />
        </div>

        <div className=' bg-neutral-100 h-full px-3 md:px-10 '>
          <div className=' p-5 bg-white rounded-b-lg space-y-4'>
            <div className=' '>
              <div className=' hidden md:flex items-center border px-2 py-1  rounded-xl gap-3'>
                  <FiSearch />
                  <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
              </div>
            </div>

            <ActionsTab />

          </div>


          {/* featured jobs */}
          <div className=' md:flex gap-5'>
              <div className=' mt-6 bg-white py-5 px-5 rounded-lg'>
                  <p className=' text-center text-xl font-light'>
                      Top Liked Projects
                  </p>
                  <div className=' mt-5'>
                      <TopProjects />
                  </div>
              </div>

              <div>
                  {/* <Sidebar /> */}
                  {/* <div className=' hidden md:flex mt-10'>
                      <Earn />
                  </div> */}
              </div>


          </div>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default ClientHome