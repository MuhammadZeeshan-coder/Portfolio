import React from 'react'
import Cards from '../Shared/Cards'
import p1 from '../assets/p-1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p6 from '../assets/p6.png'
import p5 from '../assets/p5.png'
import SemiHeading from '../Shared/SemiHeading'
import ButtonOne from '../Shared/ButtonOne'
import { ArrowUpRight } from 'lucide-react';

const Project = () => {
    return (
        <section className='py-15 scroll-smooth bg-(--white)' id='project'>
            <div className='flex justify-center items-center gap-195 '>
                <SemiHeading h2='featured projects' h5='projects' />
                <ButtonOne name='view all projects' icon={<ArrowUpRight size={18} />} color={"white text-sm"} />
            </div>
            <div className='flex justify-center gap-15 mt-10'>
                <Cards link="https://techno-kids.netlify.app/" image={p1} h3="TechnoKids" p="I make this website of AI and Humonoid Robots Course" bg={Image} />
                <Cards image={p2} h3="MZ Travels" p="Explore breathtaking destinations and uncover hidden gems around the world.Plan your perfect journey with curated experiences and stunning locations." />
                <Cards image={p3} h3="SMIT" p="I make this clone website of Saylani Mass IT Training" />
            </div>
            <div className='flex justify-center gap-15 mt-10'>
                <Cards link="https://hackathosmit.netlify.app" image={p4} h3="HelpHub AI" p="HelpHub AI connects people through a smart, community-driven support system.Ask for help, share knowledge, and solve problems faster with AI-powered matching" />
                <Cards image={p5} h3="ZeLux" p="Zelux is a modern fashion e-commerce platform focused on style, simplicity, and user experience. It delivers a seamless shopping journey with elegant design and intuitive navigation." />
                <Cards image={p6} h3="Comming Soon" />
            </div>
        </section>
    )
}

export default Project