import React from 'react'

const FeesCard = () => {
    return (
        <>
            <div className='max w-full border mt-5 border-dashed border-gray-300 rounded pb-3'>
                <div className='h-max w-full mt-3 grid grid-cols-6 gap-6.5 px-7'>
                    {
                        Array(8).fill(0).map((ele, i) => {
                            return <div key={i} className='bg-green-50 h-[70px] rounded flex flex-col px-2.5 py-2'>
                                <h1 className='text-[19px] font-bold text-gray-600'>January</h1>
                                <p className='text-[13px] font-semibold text-green-700'>Paid</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FeesCard
