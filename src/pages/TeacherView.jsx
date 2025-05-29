import React from 'react'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

const TeacherView = () => {
    
    return (
        <>
            <div className='h-screen w-full mt-3 pe-6 text-gray-700'>
                <div className='h-max w-full border border-borderSecondary rounded bg-white px-5 pt-2 flex flex-col gap-3 pb-6'>
                    {/* this is the profile image and some detail portion  */}
                    <div className='h-[250px] w-full flex items-center px-9 relative mt-3'>
                        <div className='h-full w-full absolute top-0 left-0 -z-[1px]'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/081/820/small/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg" alt="" className='h-full w-full bg-cover opacity-20 rounded' />
                        </div>
                        <img src="https://cdn.pixabay.com/photo/2025/04/28/19/59/female-model-9565629_640.jpg" alt="profile" className='h-[190px] w-[190px] rounded-full object-cover cursor-pointer relative z-10' />
                        <div className='h-full flex-1 px-12 flex flex-col justify-center relative z-10'>
                            <h1 className='text-3xl font-semibold text-gray-900 flex items-center gap-2'><span>Aryan Kushwaha</span> <span><RiVerifiedBadgeFill className='text-sm mt-1 text-violet-900' /></span> </h1>
                            <p className='text-[14px] text-gray-600'>aryan@gmail.com</p>
                            <p className='text-[14px] text-gray-600'>aryan987@sch</p>
                            <p className='text-[14px] text-gray-600'>Class 8</p>
                        </div>
                    </div>
                    {/* this is the profile image and some detail portion  */}

                    {/* this is the details portion */}
                    <div>
                        {/* this is the personal data section */}
                        <div className='h-max w-full px-2 py-4'>
                            <h1 className='text-xl font-semibold'>Personal Details</h1>
                            {/* this is the form section */}
                            <form className='h-full w-full mt-3' >

                                {/* this is the full width input */}
                                <div className='flex flex-col gap-1 justify-center'>
                                    <label className='text-[14px] ml-1 text-textTitle' >Full Name</label>
                                    <input readOnly defaultValue='Aryan Kushwaha' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none' />
                                </div>
                                {/* this is the full width input */}

                                {/* this is the two input section */}
                                <div className='flex gap-6 items-center justify-center w-full mt-3'>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Gender</label>
                                        <input readOnly defaultValue='Male' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Aadhar Number</label>
                                        <input readOnly defaultValue='121212121212' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                    </div>
                                </div>
                                {/* this is the two input section */}

                                {/* this is the full width input */}
                                <div className='flex flex-col gap-1 justify-center mt-3'>
                                    <label className='text-[14px] ml-1 text-textTitle' >Father's Name</label>
                                    <input readOnly defaultValue='Sanjay Kumar' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                </div>
                                {/* this is the full width input */}

                                {/* this is the full width input */}
                                <div className='flex flex-col gap-1 justify-center mt-3'>
                                    <label className='text-[14px] ml-1 text-textTitle' >Mother's Name</label>
                                    <input readOnly defaultValue='Reeta Devi' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                </div>
                                {/* this is the full width input */}

                            </form>
                            {/* this is the form section */}
                        </div>
                        {/* this is the personal data section */}

                        {/* this is the Contact data section */}
                        <div className='h-max w-full px-2 py-4'>
                            <h1 className='text-xl font-semibold'>Contact Details</h1>
                            {/* this is the form section */}
                            <form className='h-full w-full mt-3' >

                                {/* this is the full width input */}
                                <div className='flex flex-col gap-1 justify-center'>
                                    <label className='text-[14px] ml-1 text-textTitle' >Address</label>
                                    <input readOnly defaultValue='Dudahi Kushinagar Uttar Pradesh' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                </div>
                                {/* this is the full width input */}

                                {/* this is the two input section */}
                                <div className='flex gap-6 items-center justify-center w-full mt-3'>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Phone Number</label>
                                        <input readOnly defaultValue='1212121212' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Email Address</label>
                                        <input readOnly defaultValue='aryan@gmail.com' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle outline-none' />
                                    </div>
                                </div>
                                {/* this is the two input section */}

                            </form>
                            {/* this is the form section */}
                        </div>
                        {/* this is the Contact data section */}

                        {/* this is the Acadamic data section */}
                        <div className='h-max w-full px-2 py-4'>
                            <h1 className='text-xl font-semibold'>Acadamic Details</h1>
                            {/* this is the form section */}
                            <form className='h-full w-full mt-3' >

                                {/* this is the full width input */}
                                <div className='flex flex-col gap-1 justify-center'>
                                    <label className='text-[14px] ml-1 text-textTitle' >Username / UID</label>
                                    <input readOnly defaultValue='7878@sch' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                </div>
                                {/* this is the full width input */}

                                {/* this is the two input section */}
                                <div className='flex gap-6 items-center justify-center w-full mt-3'>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Appoint Class</label>
                                        <input readOnly defaultValue='5th' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Experiance</label>
                                        <input readOnly defaultValue='Less than 1 years' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle outline-none' />
                                    </div>
                                </div>
                                {/* this is the two input section */}

                                {/* this is the two input section */}
                                <div className='flex gap-6 items-center justify-center w-full mt-3'>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Subject</label>
                                        <input readOnly defaultValue='Maths' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] outline-none text-textTitle' />
                                    </div>
                                    <div className='flex flex-col gap-1 justify-center w-[50%]'>
                                        <label className='text-[14px] ml-1 text-textTitle' >Joining Date</label>
                                        <input readOnly defaultValue='01/02/2023' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle outline-none' />
                                    </div>
                                </div>
                                {/* this is the two input section */}

                            </form>
                            {/* this is the form section */}
                        </div>
                        {/* this is the Acadamic data section */}
                    </div>
                    {/* this is the details portion */}
                </div>
            </div>
        </>
    )
}

export default TeacherView
