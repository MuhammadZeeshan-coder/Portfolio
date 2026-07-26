import React from 'react'
import SemiHeading from '../Shared/SemiHeading'
import {
    ArrowUpRight,
    UserRound,
    BriefcaseBusiness,
    MapPin,
} from 'lucide-react'
import ButtonOne from '../Shared/ButtonOne'
import AboutCards from '../Shared/AboutCards'

const About = () => {
    const info = [
        {
            icon: <BriefcaseBusiness size={40} />,
            h5: 'experience',
            h3: '6+ Months',
            p: 'of working experience',
        },
        {
            icon: <BriefcaseBusiness size={40} />,
            h5: 'projects',
            h3: '15+',
            p: 'completed projects',
        },
    ]

    const information = [
        {
            icon: <UserRound size={40} />,
            h5: 'clients',
            h3: '10+',
            p: 'happy clients worldwide',
        },
        {
            icon: <MapPin size={40} />,
            h5: 'location',
            h3: 'Pakistan',
            p: 'available for work',
        },
    ]

    return (
        <section
            className="w-full px-5 py-15 sm:px-8 lg:px-12 xl:px-20 bg-(--white) text-(--black)"
            id="about"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">

                {/* About Content */}
                <div className="flex w-full flex-col items-center gap-8 sm:flex-row lg:max-w-2xl lg:items-start">

                    {/* Profile Icon */}
                    <div className="flex size-28 shrink-0 items-center justify-center rounded-full bg-white shadow-xl sm:size-32">
                        <UserRound
                            className="size-20 sm:size-24"
                            strokeWidth={1}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-xl text-center sm:text-left">
                        <SemiHeading
                            h5="About Me"
                            h2="who i am"
                        />

                        <p className="mt-2 mb-5 text-sm font-semibold leading-7 sm:text-base">
                            I'm a passionate Full Stack Developer who loves
                            building beautiful, functional and user-centered
                            web applications. I enjoy turning complex
                            problems into simple, elegant solutions.
                        </p>

                        <ButtonOne
                            name="Read More"
                            icon={<ArrowUpRight size={18} />}
                            color="black text-sm mx-auto sm:mx-0"
                        />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex w-full max-w-xl flex-col gap-5">
                    <AboutCards data={info} />
                    <AboutCards data={information} />
                </div>

            </div>
        </section>
    )
}

export default About