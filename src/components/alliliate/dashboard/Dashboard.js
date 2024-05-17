'use client'
import React from 'react'
import Layout from './Layout'

const Dashboard = ({children}) => {
  return (
    <div>
        <Layout>
            {children}
        </Layout>
    </div>
  )
}

export default Dashboard