'use client'
import React, { useState } from 'react'
import SelectUse from './SelectUse'
import Education from './Education'
import Bio from './Bio'
import { useParams } from 'next/navigation'
import Interests from './Interests'

const SkilledRegister = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const params = useParams()

    // const currentStep = 1

    const nextPage =()=> {
        setCurrentPage(currentPage +1)
    }

    const prevPage =()=> {
        setCurrentPage(currentPage - 1)
    }

  return (
    <div>
        {currentPage === 1 && 
            <SelectUse nextStep={nextPage} id={params.id} />
        }
        {currentPage === 2 && (
            <Education prevPage={prevPage} nextPage={nextPage} id={params.id} />
        )}
        {currentPage === 3 && (
            <Bio prevPage={prevPage} nextPage={nextPage} id={params.id} />
        )}
        {currentPage === 4 && (
            <Interests prevPage={prevPage} id={params.id} />
        )}
    </div>
  )
}

export default SkilledRegister