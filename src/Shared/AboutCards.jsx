import React from 'react'

const AboutCards = ({ data }) => {
    return (
        <div className='flex gap-5'>
            {data.map((Props) => (
                <div className='flex items-center gap-3 border w-75 border-gray-300 bg-white px-3 py-5 rounded-lg'>
                    <div className='bg-white text-(--green) size-15 border border-gray-300 flex justify-center items-center rounded-full'>
                        {Props.icon}
                    </div>
                    <div style={{fontFamily:"poppins"}}>
                        <h5 className='text-md font-semibold capitalize'>{Props.h5}</h5>
                        <h3 className='text-lg text-(--green) font-bold'>{Props.h3}</h3>
                        <p className='text-sm'>{Props.p}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AboutCards