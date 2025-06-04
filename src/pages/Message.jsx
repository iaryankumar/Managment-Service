import React from 'react'
import Navbar from '../components/global_comp/Navbar'
import MessageCard from '../components/home_comp/MessageCard'
import MessageView from '../components/home_comp/MessageView'
import { MdOutlineAdd } from 'react-icons/md'

const Message = () => {
  return (
    <>
    <Navbar/>
    {/* This is Adding portion */}
          <div title='Add message' className='h-[45px] w-[180px] border fixed z-50 top-5 rounded-[5px] border-borderSecondary text-gray-600 text-[15px] font-semibold right-53 flex items-center px-3 cursor-pointer'>
            <MdOutlineAdd className='text-xl mr-1' />
            <h1>Add Message</h1>
          </div>
          {/* This is Adding portion */}
    {/* this is main part */}
      <div className='h-max flex justify-start relative'>
        <div className='min-h-[85vh] max-h-max w-[63%] p-0.5'><MessageCard/></div>
        <div className='min-h-[85vh] max-h-max w-[37%] px-3 sticky top-[85px]'><MessageView/></div>
      </div>
    {/* this is main part */}
    </>
  )
}

export default Message
