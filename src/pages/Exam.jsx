import React from 'react'
import Navbar from '../components/global_comp/Navbar'
import { FaCloudUploadAlt } from 'react-icons/fa'

const Exam = () => {
  return (
    <>
      <Navbar />
      {/* This is upload portion */}
      <label title='upload file' htmlFor='file' className='h-[45px] w-[180px] border fixed z-50 top-5 rounded-[5px] border-borderSecondary text-gray-600 text-[14px] font-semibold right-53 flex items-center px-4 cursor-pointer'>
        <FaCloudUploadAlt className='text-2xl text-activePrimary mr-1.5' />
        <h1>Upload File</h1>
        <input id='file' type="file" className='hidden' accept=".xls,.xlsx" />
      </label>
      {/* This is upload portion */}

      {/* this is the main part */}
      <div className='pe-6'>
        
      </div>
      {/* this is the main part */}
    </>
  )
}

export default Exam
