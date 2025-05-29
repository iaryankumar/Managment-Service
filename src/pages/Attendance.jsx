import React, { useState } from 'react'
import Navbar from '../components/global_comp/Navbar'
import { RiFilter3Fill } from 'react-icons/ri'
import ProfilePic from '../components/global_comp/ProfilePic'

const Attendance = () => {
  const [showProfilePic, setShowProfilePic] = useState(false)
  const [imgURL, setImagURL] = useState('')
  const handleShowImage = (img) => {
    setShowProfilePic(!showProfilePic)
    setImagURL(img)
  }
  return (
    <>
      <ProfilePic isVisible={showProfilePic} setIsVisible={setShowProfilePic} url={imgURL} />
      {/* this is navbar  portion */}
      <Navbar />
      {/* this is navbar  portion */}

      {/* This is filter portion */}
      <div className='h-[45px] w-[180px] border fixed z-50 top-5 rounded-[5px] border-borderSecondary text-gray-600 text-[15px] font-semibold right-53'>
        <select className='h-full w-full outline-none px-10 appearance-none cursor-pointer'>
          <option>Presents</option>
          <option>Absents</option>
        </select>
        <RiFilter3Fill className='absolute text-2xl text-gray-500 top-2.5 left-2' />
      </div>
      {/* This is filter portion */}

      {/* this is table list portion  */}
      <div className='pe-6'>
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Roll Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Attendance
                </th>
              </tr>
            </thead>
            <tbody>
              {
                Array(12).fill(0).map((ele, i) => {
                  return <tr key={i} className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900">
                      <img onClick={() => handleShowImage('https://cdn.pixabay.com/photo/2025/04/28/19/59/female-model-9565629_640.jpg')} className="w-10 h-10 rounded-full object-cover cursor-pointer" src='https://cdn.pixabay.com/photo/2025/04/28/19/59/female-model-9565629_640.jpg' />
                      <div className="ps-3">
                        <div className="text-base font-semibold">Aryan Kushwaha</div>
                        <div className="font-normal text-gray-500">8<sup>th</sup></div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      65055
                    </td>
                    <td className="px-6 py-4 text-green-600 font-semibold">
                      <h1 className='flex items-center gap-2'>
                        <span><div className='h-[10px] w-[10px] bg-green-600 rounded-full'></div></span>
                        <span>Present</span>
                      </h1>
                    </td>
                    <td className="px-6 py-4">
                      69.87%
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {/* this is table list portion  */}
    </>
  )
}

export default Attendance
