import React from 'react'
import {
    ArrowUpRight,
    Atom,
    MonitorSmartphone,
    Layout,
    Layers,
    Server,
    PlugZap,
} from 'lucide-react'

import SemiHeading from '../Shared/SemiHeading'
import ButtonOne from '../Shared/ButtonOne'
import BoxOne from '../Shared/BoxOne'

const Service = () => {
    const info = [
        {
            key: 1,
            icon: <Layout size={30} />,
            title: 'Frontend Development',
            description:
                'Building responsive, interactive user interfaces with modern frameworks like React, Next.js, and Vue.',
            value: 'Pixel-perfect implementations with 60fps animations',
        },
        {
            key: 2,
            icon: <Server size={30} />,
            title: 'Backend Development',
            description:
                'Designing robust APIs and server-side solutions using Node.js, Express, and microservices architecture.',
            value: 'Scalable systems handling 10k+ concurrent users',
        },
        {
            key: 3,
            icon: <MonitorSmartphone size={30} />,
            title: 'Responsive Web Design',
            description:
                'Make websites work smoothly across mobile, tablet, laptop, and desktop devices.',
            value: 'Fast & Responsive',
        },
        {
            key: 4,
            icon: <PlugZap size={30} />,
            title: 'API Integration',
            description:
                'Connect frontend applications with REST APIs and display dynamic data efficiently.',
            value: 'Seamless Integration',
        },
        {
            key: 5,
            icon: <Atom size={30} />,
            title: 'React Development',
            description:
                'Create scalable and interactive web applications using React and reusable components.',
            value: 'Component-Based Architecture',
        },
        {
            key: 6,
            icon: <Layers size={30} />,
            title: 'Next.js Development',
            description:
                'Develop high-performance websites and applications with Next.js, routing, SEO, and server-side features.',
            value: 'High Performance',
        },
    ]

    return (
        <section
            className="border-y border-[#e5e7eb] px-6 lg:px-15 py-16"
            id="services"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                    <SemiHeading
                        h5="services"
                        h2="what i offer"
                    />

                    <ButtonOne
                        name="hire me"
                        color="white text-sm mt-5 md:mt-0"
                        icon={<ArrowUpRight size={18} />}
                    />
                </div>

                {/* Services Grid */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {info.map((item) => (
                            <BoxOne
                                key={item.key}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                value={item.value}
                            />
                        ))}
                    </div>

            </div>
        </section>
    )
}

export default Service