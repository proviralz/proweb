import Link from 'next/link'
import React from 'react'
import { IoCloudUploadOutline } from 'react-icons/io5'

const StepOne = ({handleFileDrop, file, handleFileSelect, fileProgress, previewId, setCurrentStep }) => {
  return (
    <div className=' p-10  space-y-6 text-neutral-600'>
        <div className=' flex items-center justify-between'>
            <div>
                <div>
                    <p className=' text-lg'>
                        Enchace your portfolio! Upload your media now
                    </p>
                </div>
            </div>
            <div className=' flex items-center gap-5'>
                <div>
                    <Link href={'/profile'} className='trans-purple-btn'>
                        Cancel
                    </Link>
                </div>
                {previewId && <div>
                    <p onClick={()=> setCurrentStep(2)} className=' purple-btn'>
                        Continue
                    </p>
                </div>}
            </div>
        </div>


        {/* upload */}
        <div>
            <div className=' w-full mt-5'>
                <div 
                    onDragOver={(e) => e.preventDefault()} 
                    onDrop={handleFileDrop} 
                    className=' h-80 border border-neutral-500  border-dashed p-5 rounded-md  flex flex-col gap-5 items-center justify-center'>
                    <div className=' flex items-center gap-3 text-xs'>
                        <IoCloudUploadOutline />
                        {file && file[0]?.name || <p>
                            Drag and drop your files here
                        </p>}
                    </div>

                    <div className=''>
                        <label htmlFor="browse" className=' bg-neutral-100 px-5 py-2 text-neutral-600 text-sm'> Select Image</label>
                        <input type="file" onChange={handleFileSelect} className=' hidden' id='browse' />
                    </div>
                </div>
                {fileProgress && (
                    <div className="h-1 mt-1 rounded-full overflow-hidden">
                        <div className={` ${fileProgress < 100 ? 'bg-red-600' : 'bg-green-600'} h-full transition-all ease-in-out duration-500`} style={{width: `${fileProgress}%`}} />
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default StepOne