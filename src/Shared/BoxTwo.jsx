import React from 'react'

const BoxTwo = (Props) => {
    return (
        <div className='flex items-center gap-2 mt-3'>
            <div className='bg-(--green) text-white w-fit p-2 rounded-md'>
                {Props.icon}
            </div>
            <div>
                <p className='text-gray-500'>{Props.title}</p>
                <p className='font-semibold'>{Props.value}</p>
            </div>
        </div>
    )
}

export default BoxTwo