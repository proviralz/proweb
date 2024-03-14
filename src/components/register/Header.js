import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className=''>
        <Image src={'/assets/logo/logo.svg'} alt='proviralz' width={100} height={100} />
    </div>
  )
}

export default Header