import React from 'react'
import { FaCalendarCheck, FaThList } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { PiChatCircleTextFill, PiExamFill } from 'react-icons/pi'
import { RiBookletFill, RiMoneyRupeeCircleFill, RiUser3Fill } from 'react-icons/ri'
import { TbLayoutListFilled } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className='h-[100vh] w-[220px] flex flex-col px-0.5'>
                <header className='h-[88px] w-full flex items-center px-3 font-primary'>
                    <img src="/logo.png" className='h-[35px]' />
                </header>
                <nav className='w-full h-full flex flex-col items-center gap-1 font-primary'>

                    <NavLink to={'/'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary font-semibold text-gray-700'}`}>
                                <GoHomeFill className='text-[19px]' />
                                <span>Dashboard</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/attendance'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <FaCalendarCheck className='text-[18px]' />
                                <span>Attendance</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/students'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <TbLayoutListFilled className='text-[19px]' />
                                <span>Students</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/teacher'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <RiUser3Fill className='text-[19px]' />
                                <span>Teachers</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/assignment'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <RiBookletFill className='text-[18px]' />
                                <span>Assignment</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/exam'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <PiExamFill className='text-[19px]' />
                                <span>Exams</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/fees'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <RiMoneyRupeeCircleFill className='text-[19px]' />
                                <span>Fees</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/notice'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[44px] w-full flex items-center px-3 cursor-pointer text-gray-500 text-[13.5px] gap-2 transition-all ease-initial duration-100 ${isActive && ' border-r-6 border-r-activePrimary bg-activeSecondary  font-semibold text-gray-700'}`}>
                                <PiChatCircleTextFill className='text-[19px]' />
                                <span>Notice</span>
                            </div>
                        )}
                    </NavLink>

                </nav>
                
            </aside>
        </>
    )
}

export default Sidebar
