import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddStudent = () => {
    useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [details, setDetails] = useState({
    name: '',
    gender: '',
    dob: '',
    aadhar: '',
    aaparId: '',
    category: '',
    address: '',
    mobile: '',
    parentMobile: '',
    email: '',
    parentEmail: '',
    admissionDate: '',
    grade: '',
    stream: '',
  })
    return (
        <>
            <nav className='h-[65px] w-full bg-white shadow sticky top-0 z-50 flex items-center lg:ps-12 ps-5 md:pe-8 pe-2 justify-between'>
                <Link to={'/'} ><img src="/public/blackLogo.png" className='h-[35px] w-[35px] cursor-pointer' /></Link>
                <div className='h-full flex items-center gap-9 py-3'>
                    <div className='relative sm:block hidden'>
                        <div className='h-[35px] w-[35px] rounded-full bg-black border-2 border-borderPrimary flex items-center justify-center absolute right-7 top-1 -z-40'>
                            <img src="/public/logo-noBG.png" className='h-[30px] w-[30px] rounded-full' alt="" />
                        </div>
                        <div className='h-[45px] w-[45px]  right-0 rounded-full bg-blue-700 border-2 border-borderPrimary flex items-center justify-center cursor-pointer'>
                            <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" className='h-full w-full object-cover rounded-full' alt="" />
                        </div>
                    </div>
                </div>
            </nav>


            <div className='h-max w-full px-10 py-6 bg-bgPrimary'>
                <div className='h-[55px] w-full bg-red-900 flex items-center px-6 text-gray-200 text-[13px] tracking-wide'>
                    <p>Please fill the deatils correctly.You can't edit after submission.</p>
                </div>
                <form className='h-max w-full flex flex-col items-end'>
                    <div className='w-full py-3 bg-white rounded mt-6 shadow px-6 font-primary flex flex-col gap-3'>
                        <div className='text-textTitle font-bold font-primary text-xl'><h1>Personal Details</h1></div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="name" className='text-[14px] ml-1 text-textTitle' >Full Name</label>
                            <input value={details.name} name='name' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='name' type="text" placeholder='eg- John Doe' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="gender" className='text-[14px] ml-1 text-textTitle' >Gender</label>
                            <select value={details.gender} name='gender' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} id="gender" className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle'>
                                <option value="">Select Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="dob" className='text-[14px] ml-1 text-textTitle' >Date of Birth</label>
                            <input value={details.dob} name='dob' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id="dob" type='date' className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="adhar" className='text-[14px] ml-1 text-textTitle' >Aadhar Number</label>
                            <input value={details.aadhar} name='aadhar' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='adhar' type="number" placeholder='eg- 00000000000' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="aaparId" className='text-[14px] ml-1 text-textTitle' >Aapar Id</label>
                            <input value={details.aaparId} name='aaparId' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='aaparId' type="number" placeholder='eg- 00000000000' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="category" className='text-[14px] ml-1 text-textTitle' >Category</label>
                            <select value={details.category} name='category' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id="category" className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle'>
                                <option>Please select one</option>
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC/ST">SC/ST</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="fatherName" className='text-[14px] ml-1 text-textTitle' >Father Name</label>
                            <input value={details.fatherName} name='fatherName' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='fatherName' type="text" placeholder='eg- John Doe' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="motherName" className='text-[14px] ml-1 text-textTitle' >Mother Name</label>
                            <input value={details.motherName} name='motherName' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='motherName' type="text" placeholder='eg- John Doe' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                    </div>
                    <div className='w-full py-3 bg-white rounded mt-6 shadow px-6 font-primary flex flex-col gap-3'>
                        <div className='text-textTitle font-bold font-primary text-xl'><h1>Contact Details</h1></div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="address" className='text-[14px] ml-1 text-textTitle' >Address</label>
                            <input value={details.address} name='address' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='addrss' type="text" placeholder='eg- Lucknow,Uttar Pradesh' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="phone" className='text-[14px] ml-1 text-textTitle' >Mobile Number</label>
                            <input value={details.mobile} name='mobile' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='phone' type="number" placeholder='eg- 1212121212' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="parentMobile" className='text-[14px] ml-1 text-textTitle' >Parent's Mobile</label>
                            <input value={details.parentMobile} name='parentMobile' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='parentMobile' type="number" placeholder='eg- 1212121212' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="email" className='text-[14px] ml-1 text-textTitle' >Email Address</label>
                            <input value={details.email} name='email' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='email' type="email" placeholder='eg- john@email.com' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="parentEmail" className='text-[14px] ml-1 text-textTitle' >Parent's Email</label>
                            <input value={details.parentEmail} name='parentEmail' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='parentEmail' type="email" placeholder='eg- alex@email.com' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>

                    </div>
                    <div className='w-full py-3 bg-white rounded mt-6 shadow px-6 font-primary flex flex-col gap-3'>
                        <div className='text-textTitle font-bold font-primary text-xl'><h1>Academic Details</h1></div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="admissionDate" className='text-[14px] ml-1 text-textTitle' >Admission Date</label>
                            <input value={details.admissionDate} name='admissionDate' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id='admissionDate' type="date" placeholder='eg- Lucknow,Uttar Pradesh' className='border border-borderSecondary  px-2 py-2 rounded text-[14px]' />
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="grade" className='text-[14px] ml-1 text-textTitle' >Grade</label>
                            <select value={details.grade} name='grade' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id="grade" className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle'>
                                <option >Please Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-1 justify-center'>
                            <label htmlFor="stream" className='text-[14px] ml-1 text-textTitle' >Stream</label>
                            <select value={details.stream} name='stream' onChange={(e) => setDetails({ ...details, [e.target.name]: e.target.value })} required id="stream" className='border border-borderSecondary  px-2 py-2 rounded text-[14px] text-textTitle'>
                                <option >Please Select</option>
                                <option value="Maths">Maths</option>
                                <option value="Biology">Biology</option>
                                <option value="Arts">Arts</option>
                                <option value="Home Science">Home Science</option>
                            </select>
                        </div>
                    </div>
                    <button className='py-2.5 px-9 bg-black hover:bg-[#2c2c2c] cursor-pointer text-white mt-6 w-max rounded'>Register Student</button>
                </form>
            </div>
        </>
    )
}

export default AddStudent
