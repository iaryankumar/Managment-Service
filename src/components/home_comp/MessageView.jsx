import React from 'react'
import { LuMessageCircleDashed } from 'react-icons/lu'

const MessageView = () => {
    return (
        <>
            <div className='h-[85vh] w-full border border-borderSecondary rounded'>
                <div className='h-full w-full text-[16px] flex flex-col gap-3 items-center justify-center text-gray-500 px-3'>
                    <LuMessageCircleDashed className='text-7xl text-activePrimary' />
                    <p className='text-center'>Tap on the message to see more or tap here to add <span className='text-activePrimary underline cursor-pointer'>Add Message</span></p>
                </div>
            </div>
        </>
    )
}

export default MessageView
