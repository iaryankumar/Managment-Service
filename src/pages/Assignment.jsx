import React from 'react'
import Navbar from '../components/global_comp/Navbar'
import AssignmentCard from '../components/home_comp/AssignmentCard'

const Assignment = () => {
  return (
    <>
      {/* this is navbar portion */}
      <Navbar />
      {/* this is navbar portion */}

      {/* this is the list portion */}
      <div className='w-full grid grid-cols-4 pe-6 gap-2 pb-6'>
        {Array(12).fill(0).map((ele) => {
          return <AssignmentCard />
        })}
      </div>
      {/* this is the list portion */}
    </>
  )
}

export default Assignment
