import React from 'react'

const MessageCard = () => {
  return (
    <>
        <div className='h-max w-full flex flex-col items-center gap-2.5 pb-6'>

            {
                Array(20).fill(0).map((ele,i)=>{
                    return <div className='h-[80px] w-full  border border-borderPrimary hover:border-1 hover:border-activePrimary transition-all ease-initial duration-75 flex px-4 rounded items-center'>
                    <img src="https://cdn.pixabay.com/photo/2024/07/14/14/42/woman-8894656_1280.jpg" className='h-[60px] w-[60px] rounded-full object-cover'/>
                    <div className='h-full w-[calc(100%-60px)] px-4 flex flex-col justify-center font-primary'>
                        <h1 className='font-bold text-[16px] text-gray-700'>This is the title of the exam</h1>
                        <p className='truncate w-full text-[14px] font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat nesciunt eaque doloremque obcaecati.</p>
                    </div>
            </div>
                })
            }

        </div>
    </>
  )
}

export default MessageCard
