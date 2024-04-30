'use client'
import React, { useState } from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import { useParams, usePathname } from 'next/navigation'

const Client = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const pathname = usePathname()
    const params = useParams()

    // console.log(params.id)

    const nextPage =()=> {
        setCurrentPage(currentPage +1)
    }

    const prevPage =()=> {
        setCurrentPage(currentPage - 1)
    }
  return (
    <div>
        {currentPage === 1 && (
            <StepOne 
                nextPage={nextPage} 
                userId={params.id}
                
            />
        )}
        {currentPage === 2 && (
            <StepTwo 

               userId={params.id} 
               prevPage={prevPage}
            />
        )}
    </div>
  )
}

export default Client