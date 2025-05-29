import React from 'react'

const StatsCard = () => {
    return (
        <>
            <div className=' h-full bg-white border border-borderSecondary rounded flex flex-col gap-3'>
                <div className='px-4 pt-4 flex gap-3 items-center'><h1 className='text-[16px] font-primary text-textTitle font-[700]'>Students</h1></div>
                <div className='flex-1 w-full flex flex-col justify-center px-6 pb-9'>
                    <div className='h-[200px] w-full border-b border-l border-borderPrimary relative'>
                        <ul className='h-[25px] w-full absolute top-[100%] flex items-center justify-between left-0 text-[12px] text-gray-500 pe-2'>
                            <li>
                                <span>0</span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>1</span>
                                <span title='waiting' className='h-[190px] w-8 bg-green-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>2</span>
                                <span title='waiting' className='h-[95px] w-8 bg-red-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>3</span>
                                <span title='waiting' className='h-[155px] w-8 bg-orange-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>4</span>
                                <span title='waiting' className='h-[190px] w-8 bg-green-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>5</span>
                                <span title='waiting' className='h-[95px] w-8 bg-red-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>6</span>
                                <span title='waiting' className='h-[155px] w-8 bg-orange-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            <li className='w-8 flex items-center justify-center relative'>
                                <span>7</span>
                                <span title='waiting' className='h-[190px] w-8 bg-green-200 absolute bottom-[calc(100%+3px)] rounded-t-xl'></span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsCard
