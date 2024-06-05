import React from 'react'

const Account = () => {
  return (
    <div className=' space-y-5'>
        <div>
            <p>
                Wallet
            </p>
        </div>
        <div className=' wallet-cards'>
            <div>
                <p className=' text-xs font-light'>
                    Available Balance
                </p>
                <p>
                    $0.00
                </p>
            </div>
            <div>
                <p className=' text-xs font-light'>
                    Pending
                </p>
                <p>
                    $0.00
                </p>
            </div>
            {/* <div className=' flex flex-1'>
                <div className=' border-r w-32'>
                    <p className=' text-xs font-light '>
                        Affliate Balance
                    </p>
                    <p>
                        $0.00
                    </p>
                </div>
                <div className=' space-y-1 pl-4 flex flex-col'>
                    <p className=' text-xs font-semibold '>
                        Like to earn some more?
                    </p>
                    <p className=' text-xs '>
                        Refer people and earn more cash
                    </p>
                    <div className=''>
                        <p className=' inline-block purple-btn'>
                            start earning
                        </p>
                    </div>
                </div>
            </div> */}
        </div>

        {/* buttons */}
        <div className=' flex gap-5 capitalize'>
            <div>
                <p className='trans-purple-btn'>
                    + add funds
                </p>
            </div>
            <div>
                <p className='trans-purple-btn'>
                    withdraw funds
                </p>
            </div>
        </div>
    </div>
  )
}

export default Account