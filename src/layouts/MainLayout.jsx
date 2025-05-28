import React from 'react'
import Sidebar from '../components/global_comp/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            {/* this is the main container */}
            <div className='min-h-[100vh] max-h-max w-full flex items-center justify-end'>

                {/* this is the fixed portion  */}
                <div className='h-full w-[232px] border-r border-borderPrimary bg-sidebar fixed left-0 p-1 pe-3 top-0'>
                    <Sidebar/>
                </div>
                {/* this is the fixed portion  */}

                {/* this is the outlet portion */}
                <div className='min-h-[99.4vh] max-h-max w-[calc(100%-232px)] p-12 '>
                        <Outlet/>
                </div>
                {/* this is the outlet portion */}


            </div>
            {/* this is the main container */}

        </>
    )
}

export default MainLayout
