import React from 'react'
import { CgNotes } from 'react-icons/cg'
import { GiClick } from 'react-icons/gi'
import { IoReload } from 'react-icons/io5'
import { PiCurrencyDollarSimpleThin } from 'react-icons/pi'
import BarChart from './Barchart'




const Overview = () => {

    const earningsData = [
        { date: 'January', earnings: 500 },
        { date: 'February', earnings: 700 },
        { date: 'March', earnings: 800 },
        { date: 'April', earnings: 600 },
        { date: 'May', earnings: 750 },
        { date: 'June', earnings: 900 },
        { date: 'July', earnings: 850 },
        { date: 'August', earnings: 650 },
        { date: 'September', earnings: 700 },
        { date: 'October', earnings: 950 },
        { date: 'November', earnings: 1100 },
        { date: 'December', earnings: 1200 }
    ];


  return (
    <div>
        <div className=' space-y-4'>
            <div className=' flex flex-wrap gap-5'>

                <div className=' flex flex-1 gap-2 items-center p-3 shadow-md rounded-md'>
                    <div className=' bg-[#31013f]/10 text-[#31013f] p-2 font-light'>
                        <CgNotes size={17} />
                    </div>
                    <div>
                        <p className=' text-[0.6rem]'>
                            Registration
                        </p>
                        <p className=' text-xs'>
                            206
                        </p>
                    </div>
                </div>

                <div className=' flex flex-1 gap-2 items-center p-3 shadow-md rounded-md'>
                    <div className=' bg-[#31013f]/10 text-[#31013f] p-2 font-light'>
                        <GiClick size={17} />
                    </div>
                    <div>
                        <p className=' text-[0.6rem]'>
                            Clicks
                        </p>
                        <p className=' text-xs'>
                            703
                        </p>
                    </div>
                </div>

                <div className=' flex flex-1 gap-2 items-center p-3 shadow-md rounded-md'>
                    <div className=' bg-[#31013f]/10 text-[#31013f] p-2 font-light'>
                        <IoReload size={17} />
                    </div>
                    <div>
                        <p className=' text-[0.6rem]'>
                            Conversiion
                        </p>
                        <p className=' text-xs'>
                            32%
                        </p>
                    </div>
                </div>

                <div className=' flex flex-1 gap-2 items-center p-3 shadow-md rounded-md'>
                    <div className=' bg-[#31013f]/10 text-[#31013f] p-2 font-light'>
                        <PiCurrencyDollarSimpleThin size={17} />
                    </div>
                    <div>
                        <p className=' text-[0.6rem]'>
                            Commission
                        </p>
                        <p className=' text-xs'>
                            $1200
                        </p>
                    </div>
                </div>
            </div>

            {/* greetings */}
            <div>
                <div>
                    <p className=' text-sm text-[#31013f]'>
                        Hey Santa!
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <p className=' text-lg font-light'>
                        You earned $2,000 this month
                    </p>
                </div>
            </div>
            <div>
                <div>
                    {/* <p>
                        2024
                    </p> */}
                </div>
                <div>
                    <BarChart earningsData={earningsData} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview