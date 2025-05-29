import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'

const Calender = () => {
    return (
        <>
            <div className='h-max w-full border mt-5 border-dashed border-gray-300 rounded pb-6'>
                <div className='h-[60px] w-full border-b border-gray-50 mt-3 flex items-center px-8'>

                    <div className='relative w-max h-max'>
                        <select className='appearance-none h-[35px] w-[160px] border border-gray-200 text-gray-600 cursor-pointer px-3 rounded focus:outline-none  relative'>
                            <option value="">January</option>
                            <option value="">Febraury</option>
                            <option value="">March</option>
                            <option value="">April</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">August</option>
                            <option value="">September</option>
                            <option value="">October</option>
                            <option value="">November</option>
                            <option value="">December</option>
                        </select>
                        <MdOutlineExpandMore className='absolute top-3 right-3' />
                    </div>
                </div>

                <div className='h-max w-full mt-3 grid grid-cols-14 gap-5 px-7'>
                    {
                        Array(30).fill(0).map((ele, i) => {
                            return <div key={i} className='h-[50px] w-full bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xl cursor-pointer'>{i + 1}</div>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Calender
