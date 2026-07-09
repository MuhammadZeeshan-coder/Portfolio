import React from 'react'

const NavbarList = (Props) => {
  return (
    <li>
        <a href={Props.link} className='font-semibold relative after:content-[""] after:absolute after:w-0 after:h-0.5 after:left-0 after:bottom-0 after:bg-black after:transition-all hover:after:w-full' style={{fontFamily:"poppins"}}>{Props.name}</a>
    </li>
  )
}

export default NavbarList