import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaArrowCircleRight ,FaArrowAltCircleLeft} from "react-icons/fa";

const Stories = () => {
  return (
    <div className='bg-black/50 w-full h-20 rounded-2xl flex items-center px-4 py-2'>
      <div className='flex items-center justify-center circle'>
        <FaUserCircle className='w-15 h-15'/>
      </div>

    </div>
  )
}

export default Stories