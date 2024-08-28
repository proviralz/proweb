import React, { useState } from 'react'
import Top from './nav/Top'
import Side from './nav/Side'
import Summary from './Summary'
import Clients from './users/Clients'
import Freelancer from './users/Freelancer'

const componentMapping = {
    dashboard: Summary,
    clients: Clients,
    freelancers: Freelancer,
    users: Freelancer
}

const Layout = ({children}) => {

    const [isSelected, setIsSelected] = useState("dashboard")

     const SelectedComponent = componentMapping[isSelected]
  return (
    <div className=' '>
      <div className='bg-neutral-100 h-screen overflow-auto flex flex-col'>
        <div className=' fixed top-0 left-0 right-0 z-10'>
            <Top isSelected={isSelected} />
        </div>
        <div className=' flex flex-grow mt-20'>
            <div className=' fixed top-16 left-0 z-10 bg-white shadow-md w-56 h-full'>
                <Side isSelected={isSelected} setIsSelected={setIsSelected} />
            </div>
            <div className=' ml-56 p-5 w-full overflow-auto'>
                {children}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
