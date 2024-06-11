'use client'
import Layout from '@/components/settings/Layout'
import React from 'react'

const Page = ({children}) => {
  return (
    <div>
        <Layout>
            {children}
        </Layout>
    </div>
  )
}

export default Page