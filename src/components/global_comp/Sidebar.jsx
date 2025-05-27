import React from 'react'
import { GoHomeFill } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className='h-[100vh] w-[220px]'>
                <header className='h-[60px] w-full flex items-center px-3 font-primary'>
                    <img src="logo.png" className='h-[35px]' />
                </header>
                <nav className='w-full h-full flex flex-col items-center gap-0.5'>

                    <NavLink to={'/'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[42px] w-full flex items-center px-2 cursor-pointer text-gray-500 text-[15px] gap-2  ${isActive ? ' border-r-6 border-r-violet-600 bg-violet-50  font-semibold text-gray-900' : 'border border-gray-100'}`}>
                                <GoHomeFill />
                                <span>Home</span>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to={'/students'} className={'w-full'}>
                        {({ isActive }) => (
                            <div className={`h-[42px] w-full flex items-center px-2 cursor-pointer text-gray-500 text-[15px] ${isActive ? ' border-r-6 border-r-violet-600 bg-violet-50  font-semibold text-gray-900' : 'border border-gray-100'}`}>
                                Students
                            </div>
                        )}
                    </NavLink>

                </nav>
            </aside>
        </>
    )
}

export default Sidebar
