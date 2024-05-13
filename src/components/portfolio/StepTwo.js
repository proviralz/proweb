import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StepTwo = ({previewId, handlePublish, setCurrentStep, setTitle, title}) => {
  return (
    <div className='p-10  space-y-6 text-neutral-600'>
        <div className=' flex items-center justify-between'>
            <div className=' flex-1'>
                <div className=' w-3/5'>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        onChange={(e)=> setTitle(e.target.value)}
                        className=' outline-none text-lg border-b p-4 w-full'
                        placeholder='Give this project a name' />
                </div>
            </div>
            <div className=' flex items-center gap-5'>
                <div>
                    <p onClick={()=> setCurrentStep(1)} href={'/profile'} className='trans-purple-btn'>
                        Back
                    </p>
                </div>
                {previewId && title &&  <div>
                    <p onClick={handlePublish} className=' purple-btn'>
                        Continue
                    </p>
                </div>}
            </div>
        </div>


        {/* preview */}
        <div className=' w-full h-80 mt-5'>
            <div className=' w-full h-full'>
                <Image src={previewId} alt=''  width={500} height={500} className=' w-full h-full rounded-md object-cover' />
            </div>
        </div>
    </div>
  )
}

export default StepTwo