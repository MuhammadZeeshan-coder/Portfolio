import React from 'react'

const ButtonOne = (Props) => {
  return (
    <a href="">
      <button className={`${Props.color} flex items-center justify-center gap-1 border-(--black) after:content-[""] text-white px-6 font-semibold py-3  rounded-[55px] uppercase duration-300 delay-75 `}>
        {Props.name} <span>{Props.icon}</span>
      </button>
    </a>
  )
}

export default ButtonOne