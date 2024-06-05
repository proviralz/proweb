'use client'
import React, { useState } from 'react'
// import HeaderTwo from '../skilled/HeaderTwo'
import Footer from '../footer/Footer'
import { CiWallet } from 'react-icons/ci'
import { FaRegCreditCard } from 'react-icons/fa6'
import { GoHistory } from 'react-icons/go'
import Account from './Account'
import Card from './Card'
import History from './History'
import HeaderTwo from '../header/HeaderTwo'

const Home = () => {
    const [currentPage, setCurrentPage] = useState("wallet")
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className='p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg text-neutral-600 flex flex-col md:flex-row gap-5'>
                <div className=' w-full md:w-40'>
                    <div className='wallet-nav'>
                        <div className={`${currentPage === "wallet"? "bg-neutral-100": ""}`} onClick={()=> setCurrentPage("wallet")}>
                            <CiWallet />
                            <p>wallet</p>
                        </div>
                        <div className={`${currentPage === "card"? "bg-neutral-100": ""}`} onClick={()=> setCurrentPage("card")}>
                            <FaRegCreditCard />
                            <p>cards</p>
                        </div>
                        <div className={`${currentPage === "history"? "bg-neutral-100": ""}`} onClick={()=> setCurrentPage("history")}>
                            <GoHistory />
                            <p>history</p>
                        </div>
                    </div>
                </div>
                <div className=' flex-1'>
                    {currentPage === "wallet" &&  <Account />}
                    {currentPage === "card" && <Card />}
                    {currentPage === "history" && <History  />}
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home