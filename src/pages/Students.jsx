import React, { useState } from 'react'
import Navbar from '../components/global_comp/Navbar'
import { NavLink } from 'react-router-dom'
import ProfilePic from '../components/global_comp/ProfilePic'
import { RiFilter3Fill } from 'react-icons/ri'

const Students = () => {
  const [showProfilePic, setShowProfilePic] = useState(false)
  const [imgURL, setImagURL] = useState('')
  const handleShowImage = (img) => {
    setShowProfilePic(!showProfilePic)
    setImagURL(img)
  }
  return (
    <>
      <ProfilePic isVisible={showProfilePic} setIsVisible={setShowProfilePic} url={imgURL} />

      {/*This is navbar portion */}
      <Navbar />
      {/*This is navbar portion */}

      {/* This is filter portion */}
      <div className='h-[45px] w-[180px] border fixed z-50 top-5 rounded-[5px] border-borderSecondary text-gray-600 text-[15px] font-semibold right-53'>
        <select className='h-full w-full outline-none px-10 appearance-none cursor-pointer'>
          <option>All Students</option>
          <option value="lkg">LKG</option>
          <option value="">UKG</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
        </select>
        <RiFilter3Fill className='absolute text-2xl text-gray-500 top-2.5 left-2' />
      </div>
      {/* This is filter portion */}

      {/* This is the table list portion */}
      <div className='pe-6'>
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>

                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Class
                </th>
                <th scope="col" className="px-6 py-3">
                  Roll Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Father's Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Details
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
                        <div className="text-base font-semibold truncate">Aryan Kushwaha</div>
                        <div className="font-normal text-gray-500 truncate">aryan@gmail.com</div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      8<sup>th</sup>
                    </td>
                    <td className="px-6 py-4">
                      65055
                    </td>
                    <td className="px-6 py-4 ">
                      Sanjay Kumar
                    </td>
                    <td className="px-6 py-4">
                      <NavLink to={`/students/${'aryan'}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"> view</NavLink>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      {/* This is the table list portion */}

    </>
  )
}

export default Students
