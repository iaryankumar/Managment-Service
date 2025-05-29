import React from 'react'
import Navbar from '../components/home_comp/Navbar'
import StatsCard from '../components/home_comp/StatsCard'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* this is the navbar portion */}
      <Navbar />
      {/* this is the navbar portion */}

      {/* this is the statics portion */}
      <div className='grid grid-cols-2 gap-4 mt-4 pe-5'>
        <StatsCard />
        <StatsCard />
      </div>
      {/* this is the statics portion */}

      {/* this is the teacher portion */}
      <div className='h-max w-full mt-4 mb-5 pe-5'>
        <div className='h-full w-full border border-borderPrimary rounded-[8px]'>
          <div className="relative overflow-x-auto  sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>

                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Subject Teacher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    class teacher
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  Array(3).fill(0).map((ele, i) => {
                    return <tr key={i} className="bg-white border-b border-gray-200 hover:bg-borderPrimary ">
                      <th scope="row" className="flex items-center px-6 py-4 text-gray-900">
                        <img onClick={() => handleShowImage('https://cdn.pixabay.com/photo/2025/04/28/19/59/female-model-9565629_640.jpg')} className="w-10 h-10 rounded-full object-cover cursor-pointer" src='https://cdn.pixabay.com/photo/2025/04/28/19/59/female-model-9565629_640.jpg' />
                        <div className="ps-3">
                          <div className="text-base font-semibold">Aryan Kushwaha</div>
                          <div className="font-normal text-gray-500">aryan@mail.com</div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        Maths
                      </td>
                      <td className="px-6 py-4">
                        12
                      </td>
                      <td className="px-6 py-4">
                        {/* Modal toggle */}
                        <NavLink to={`/teacher/${'teacherName'}`} data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">view more</NavLink>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* this is the teachers portion */}


      {/* this is the analytics portion
      <div className='h-[50vh] w-full mt-4 mb-5 pe-5'>
        <div className='h-full w-full border border-borderPrimary p-6 rounded-[8px]'>
           <div className='h-full w-full border-l border-gray-300'>
            <div></div>
           </div>
        </div>
      </div>
      this is the analytics portion */}

    </>
  )
}

export default Home
