import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className='flex items-center justify-center h-[75vh] '>
        <ClipLoader
        size={100}
      />
    </div>
  )
}

export default Loader