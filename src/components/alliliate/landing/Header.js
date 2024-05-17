import React from 'react'

const Header = () => {
  return (
    <div className=' p-7 flex items-center justify-between'>
        <div>
            <p className=' text-lg font-bold text-[#31013f]'>
                Affiliates
            </p>
        </div>
        <div className=' flex items-center gap-5'>
            <div>
                <p className=' trans-purple-btn'>
                    Login
                </p>
            </div>
            <div>
                <p  className=' purple-btn'>
                   Join Now 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Header