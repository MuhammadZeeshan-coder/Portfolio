import React from 'react'
import ButtonOne from '../Shared/ButtonOne'
import zeeshan from '../assets/zeeshan.png'
import NavbarList from '../Shared/NavbarList'
import { ArrowDownToLine } from 'lucide-react'

const Header = () => {
  return (
    <header className={`flex items-center justify-center gap-50 pt-0 -mt-5`} id='hero'>
      <div className=''>
        <h5 className='uppercase text-lg font-semibold text-(--black)' style={{ fontFamily: "poppins" }}>welcome to my profile</h5>
        <h1 className='text-8xl font-bold uppercase text-(--black) mt-3' style={{ fontFamily: "roboto" }}>i'm muhammad <br /> zeeshan</h1>
        <h3 className='text-5xl uppercase text-(--black) mt-5 font-semibold' style={{ fontFamily: "poppins" }}>Full stack Developer</h3>
        <p className=' font-semibold text-(--black) text-md leading-6 my-5' style={{ fontFamily: "Inter" }}>
          I work with a team of strategic working globally with largest <br />
          brands, we believe that progress only you to play things safe.
        </p>
        <div className='mt-5 w-fit'>
          <ButtonOne name={"Download CV"} color="black" icon={<ArrowDownToLine size={18}/>} />
        </div>
        <div className='w-fit flex items-center justify-center -mb-30 mt-10'>
          <ul className='flex gap-5'>
            <div className='flex items-center gap-1'>
              <i class="fa-brands fa-square-facebook"></i>
              <NavbarList name={"Facebook"} link="" />
            </div>
            <div className='flex items-center gap-1'>
              <i class="fa-brands fa-square-twitter"></i>
              <NavbarList name={"Twitter"} link="" />
            </div>
            <div className='flex items-center gap-1'>
              <i class="fa-brands fa-square-linkedin"></i>
              <NavbarList name={"LinkedIn"} link="" />
            </div>
          </ul>
        </div>
      </div>
      <div className=''>
        <img src={zeeshan} alt="" className=' lg:w-120 h-165' />
      </div>
    </header>
  )
}

export default Header