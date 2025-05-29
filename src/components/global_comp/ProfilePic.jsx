import React from 'react'

const ProfilePic = ({ isVisible, setIsVisible, url }) => {
    return (
        <>
            {isVisible && <div>
                <div className="fixed inset-0 p-2 flex flex-wrap justify-center items-center  h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.8)] overflow-auto before:cursor-pointer">
                    <div className=" rounded-md relative">
                        <div className="my-1">
                            <div role="status">
                                <img src={url} className='h-[350px] w-[350px] object-cover rounded-full' />
                            </div>
                            <button onClick={() => setIsVisible(!isVisible)} className='w-full mt-6 text-white cursor-pointer underline'>Close</button>
                        </div>

                    </div>
                </div>
            </div>}
        </>
    )
}

export default ProfilePic
