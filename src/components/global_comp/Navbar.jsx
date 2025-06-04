import React from 'react'
import { FcOrgUnit } from 'react-icons/fc'
import { FiSearch } from 'react-icons/fi'
import { IoNotifications } from 'react-icons/io5'
import { MdAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='h-[85px] w-full flex items-center gap-6 sticky top-0 bg-white z-50'>
                <form className='border w-[850px] h-[50px] rounded-[6px] border-borderSecondary px-3 py-0.5 flex items-center justify-center gap-2 text-gray-600 font-primary'>
                    <FiSearch />
                    <input type="text" placeholder='Search Here' className='h-full w-full outline-none text-[15px] ' />
                </form>
                <div className='w-[calc(100%-650px)] h-[70px] flex items-center justify-end px-12 text-xl text-gray-600 gap-6'>

                    <FcOrgUnit title='Statics' className='cursor-pointer text-2xl' />

                    <Link to={'/add/teacher'} title='Add Teacher' className='h-[36px] w-[36px] rounded-full bg-borderPrimary cursor-pointer flex items-center justify-center hover:bg-activePrimary hover:text-gray-50'>
                        <MdAdd />
                    </Link>

                    <div title='Notifications' className='h-[36px] w-[36px] rounded-full bg-borderPrimary cursor-pointer flex items-center justify-center hover:bg-activePrimary hover:text-gray-50'>
                        <IoNotifications className='text-[16px]' />
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
