import { CheckCircle } from 'lucide-react'
import React from 'react'

const BoxOne = (Props) => {
    return (
        <div className='border-2 rounded-md border-gray-300 w-full h-72 p-4 duration-300 delay-75 hover:scale-103 hover:border-(--green)'>
            <div className='border border-gray-300 size-12 flex justify-center items-center rounded-md bg-(--green) text-white'>
                {Props.icon}
            </div>
            <h3 className='text-xl font-bold mt-3' style={{ fontFamily: "poppins" }}>{Props.title}</h3>
            <p className='text-gray-700 text-lg mt-3'>{Props.description}</p>
            <hr className='mt-4 text-gray-400' />
            <div className='flex items-center mt-3 gap-2'>
                <CheckCircle size={20} className='text-(--green)' strokeWidth={3} />
                <p>{Props.value}</p>
            </div>
        </div>
    )
}

export default BoxOne