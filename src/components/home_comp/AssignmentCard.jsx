import React from 'react'
import { MdDelete } from 'react-icons/md'

const AssignmentCard = () => {
    return (
        <div className='h-max w-full border border-borderPrimary rounded flex flex-col bg-white px-2 py-1 gap-1'>
            <div className='h-[60px] w-full border-b pb-2 pt-1 border-borderSecondary flex items-center justify-between gap-2 '>
                <div className='flex gap-2 items-center'>
                    <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" className='h-[40px] w-[40px] rounded-full object-cover' />
                    <div className='flex flex-col gap-0'>
                        <h1 className='text-[13px] font-primary font-semibold text-textTitle'>Aryan Kushwaha</h1>
                        <p className='text-[11px] font-secondary mt-0 tracking-wide text-textTitle'>ak@mail.com</p>
                    </div>
                </div>
                <MdDelete className='text-xl text-red-600 hover:text-red-800 cursor-pointer mr-2' />
            </div>
            <div className='h-max w-full'>
                <img src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" className='rounded' />
            </div>
            <div className='h-full w-full px-1 py-3 flex flex-col gap-1'>
                <h1 className='font-bold text-[16px] text-gray-800 leading-5'>Lorem ipsum dolor sit amet.</h1>
                <p className='text-[13px] text-gray-800 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores hic in temporibus error. Ipsam commodi in ipsum esse, animi voluptas dolor odio soluta beatae fuga quam consequuntur laudantium quaerat tempora.</p>
                <p className='text-[12px] text-textTitle'>Date: 12/2/25</p>
            </div>
        </div>
    )
}

export default AssignmentCard
