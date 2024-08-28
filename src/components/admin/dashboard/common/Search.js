import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className=' inline-block w-1/3'>
      <div className=' flex items-center gap-3 bg-white p-2 rounded-md'>
        <div>
            <FiSearch size={20} />
        </div>
        <input type="text" name="" id="" placeholder='Search' className=' w-full' />
      </div>
    </div>
  )
}

export default Search
