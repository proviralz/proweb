'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import HeaderTwo from '../header/HeaderTwo'
import ClientHeader from '../client/ClientHeader'
import Footer from '../footer/Footer'

const Layout = ({children}) => {

    const user = useSelector(state => state.user.info)
    console.log(user)
  return (
    <div>
        <div>
            {(user?.group === 'skilled' || user?.group === 'unskilled') && (
                <HeaderTwo />
            )}
            {user?.group === 'client' && (
                <ClientHeader />
            ) }
        </div>
        <div>
            {children}
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout