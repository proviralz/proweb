import Image from 'next/image'
import React from 'react'

const FilesUpload = ({project}) => {
  return (
    <div>
        <div className=' space-y-7'>
            {project?.files?.map((img, i)=> (
                <div key={i} className=' flex gap-5'>
                    <p>
                        {i+1}.
                    </p>
                    <div className=' h-40 w-72'>
                        <Image src={img} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FilesUpload