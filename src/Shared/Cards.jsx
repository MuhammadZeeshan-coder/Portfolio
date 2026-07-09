import React from 'react'
import { ArrowRight } from 'lucide-react'

const Cards = (props) => {
  return (
    <div className={`rounded-3xl overflow-hidden w-100 shadow-sm`}>
      <div className={`w-100 h-50 overflow-hidden`}>
        <img
          src={props.image}
          alt="demo"
          className="w-full block group-hover:scale-110 transition duration-300"
        />
      </div>
      <div className='bg-white text-(--black) py-3 px-5 border-t border-gray-400 rounded-3xl scale-102 -mt-10 h-33'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-semibold' style={{fontFamily:"poppins"}}>{props.h3}</h3>
          <a href="">
            <button className='text-(--green) bg-[#'>Github</button>
          </a>
        </div>
        <p className=' line-clamp-2'>{props.p}</p>
        <a href={props.link} target='_blank' className='flex items-center gap-1 text-(--green) font-semibold mt-2 hover:animate__headShake animate__animated'>View Project <ArrowRight size={18} /></a>
      </div>
    </div>
  )
}

export default Cards