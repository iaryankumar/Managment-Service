import React from 'react'
import { FcOrgUnit } from 'react-icons/fc'
import { FiSearch } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import { IoNotifications } from 'react-icons/io5'
import { MdAdd, MdOutlineExpandMore } from 'react-icons/md'

const Navbar = () => {
    return (
        <>
            <nav className='h-[85px] w-full flex items-center gap-6 sticky top-0 bg-white z-50'>
                <form className='border w-[650px] h-[50px] rounded-[6px] border-borderSecondary px-3 py-0.5 flex items-center justify-center gap-2 text-gray-600 font-primary'>
                    <FiSearch />
                    <input type="text" placeholder='Search Here' className='h-full w-full outline-none text-[15px] ' />
                </form>
                <div className='w-[calc(100%-650px)] h-[70px] flex items-center justify-end px-5 text-xl text-gray-600 gap-6'>

                    <FcOrgUnit title='Statics' className='cursor-pointer text-2xl' />

                    <div title='Add Teacher' className='h-[36px] w-[36px] rounded-full bg-borderPrimary cursor-pointer flex items-center justify-center hover:bg-activePrimary hover:text-gray-50'>
                        <MdAdd />
                    </div>

                    <div title='Notifications' className='h-[36px] w-[36px] rounded-full bg-borderPrimary cursor-pointer flex items-center justify-center hover:bg-activePrimary hover:text-gray-50'>
                        <IoNotifications className='text-[16px]' />
                    </div>

                    <div title='Profile' className='h-[63px] w-[230px]  rounded flex items-center p-2 font-primary cursor-pointer hover:bg-borderPrimary'>
                        <img src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" className='h-[45px] w-[45px] rounded-full object-cover' />
                        <div className='h-full w-[calc(100%-50px)] px-1.5 '>
                            <h1 className='truncate text-[15px] font-semibold text-gray-600'>Aryan Kushwaha</h1>
                            <p className='text-[13px]'>12/05/2025</p>
                        </div>
                        <div className='w-[20px] h-full'>
                            <MdOutlineExpandMore />
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
