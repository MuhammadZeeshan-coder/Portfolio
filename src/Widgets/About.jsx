import React from 'react'
import SemiHeading from '../Shared/SemiHeading'
import { ArrowUpRight, CalendarDays, UserRound, BriefcaseBusiness, MapPin } from 'lucide-react'
import ButtonOne from '../Shared/ButtonOne'
import AboutCards from '../Shared/AboutCards'
const About = () => {
    const info = [
        {icon:<CalendarDays size={40}/>, h5:"experience", h3:"6+ Months", p:"of working experience"},
        {icon:<BriefcaseBusiness size={40}/>, h5:"projects", h3:"15+", p:"completed projects"},
    ]

    const information = [
        {icon:<UserRound size={40}/>, h5:"clients", h3:"10+", p:"happy clients worldwide"},
        {icon:<MapPin size={40}/>, h5:"location", h3:"Pakistan", p:"available for work"},
    ]
    return (
        <section className='py-15 bg-(--white) text-(--black) flex justify-center gap-20' id='about'>
            <div className='flex gap-10'>
                <div className='size-30 flex justify-center items-center rounded-full bg-white shadow-xl'>
                    <UserRound size={100} strokeWidth={1} />
                </div>
                <div className='max-w-120'>
                    <SemiHeading h5='About Me' h2='who i am' />
                    <p className='font-semibold mb-5 mt-2'>
                        I'm a passionate Full Stack Developer who loves 
                        building beautiful, functional and user-centered 
                        web applications. I enjoy turning complex 
                        problems into simple, elegant solutions.
                    </p>
                    <ButtonOne name="Read More" icon={<ArrowUpRight size={18} />} color="black text-sm" />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <AboutCards data={info} />
                 <AboutCards data={information} />
            </div>

        </section>
    )
}

export default About