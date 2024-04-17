'use client'
import Details from '@/components/jobs/Details'
import UnskilledDetails from '@/components/jobs/unskilled/Details'
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const userGroup = useSelector(state => state.user.info.group)
  return (
    <div>
      {userGroup === 'skilled' && (
        <Details />
      )}
      {userGroup === 'unskilled' && (
        <UnskilledDetails />
      )}
      
    </div>
  )
}

export default Page