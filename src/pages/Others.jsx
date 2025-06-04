import React from 'react'
import Navbar from '../components/global_comp/Navbar'

const Others = () => {
  return (
    <>
    <Navbar/>
    {/* this is the main part */}
    <div className='h-[85vh] w-full pe-6 pt-6'>
        <div className='h-[60px] w-full border border-borderSecondary rounded-2xl flex items-center justify-between px-4 font-primary text-gray-600'>
            <h1 className='font-semibold'>Download Admit Card</h1>
            <button className='bg-activePrimary text-[14px] py-1 px-3 rounded-xl text-white cursor-pointer'>Download</button>
        </div>

        <div className='h-[60px] w-full border border-borderSecondary rounded-2xl flex items-center justify-between px-4 font-primary text-gray-600 mt-2'>
            <h1 className='font-semibold'>Download ID Card</h1>
            <button className='bg-activePrimary text-[14px] py-1 px-3 rounded-xl text-white cursor-pointer'>Download</button>
        </div>

        <div className='h-[60px] w-full border border-borderSecondary rounded-2xl flex items-center justify-between px-4 font-primary text-gray-600 mt-2'>
            <h1 className='font-semibold'>Request for Data</h1>
            <button className='bg-activePrimary text-[14px] py-1 px-3 rounded-xl text-white cursor-pointer'>Request</button>
        </div>

        <div className='h-[60px] w-full border border-borderSecondary rounded-2xl flex items-center justify-between px-4 font-primary text-gray-600 mt-2'>
            <h1 className='font-semibold'>Request for Callback</h1>
            <button className='bg-activePrimary text-[14px] py-1 px-3 rounded-xl text-white cursor-pointer'>Request</button>
        </div>
    </div>
    {/* this is the main part */}
    </>
  )
}

export default Others
