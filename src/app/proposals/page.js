'use client'
import ClientProposals from '@/components/proposals/ClientProposals'
import Proposals from '@/components/proposals/Proposals'
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const user = useSelector(state=> state.user.info)
  
  return (
    <div>

      {user.group === 'skilled' && (
        <Proposals />
      )}

      {user.group === 'unskilled' && (
        <Proposals />
      )}

      {user.group === 'client' && (
        <ClientProposals />
      )}
    </div>
  )
}

export default Page