import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchJobs = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };
  return (
    <div className=' bg-white p-2 md:p-5'>
        <div className=' flex  justify-center items-center'>
            <div className=' w-full'>
                <div className=' w-full '>
                    <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                        <FiSearch />
                        <input 
                            type="text" 
                            name="" 
                            value={searchTerm}
                            onChange={handleSearchChange}
                            id="" 
                            className=' w-28 md:w-full outline-none  text-neutral-600 ' 
                            placeholder='Search jobs' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchJobs