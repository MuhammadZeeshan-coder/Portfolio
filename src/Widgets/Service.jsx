import React from 'react'
import {
    ArrowUpRight,
    Cloud,
    Database,
    Layout,
    Search,
    Server,
    Smartphone,
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
            icon: <Database size={30} />,
            title: 'Database Architecture',
            description:
                'Optimizing data structures and queries for PostgreSQL, MongoDB, and Redis implementations.',
            value: '99.9% uptime with optimized query performance',
        },
        {
            key: 4,
            icon: <Smartphone size={30} />,
            title: 'API Integration',
            description:
                'Seamless third-party integrations including payment gateways, social APIs, and cloud services.',
            value: 'Secure, documented REST & GraphQL endpoints',
        },
        {
            key: 5,
            icon: <Cloud size={30} />,
            title: 'DevOps & Cloud',
            description:
                'Docker containerization, CI/CD pipelines, and AWS/GCP deployment strategies.',
            value: 'Automated deployments with zero-downtime updates',
        },
        {
            key: 6,
            icon: <Search size={30} />,
            title: 'Performance Optimization',
            description:
                'Core Web Vitals optimization, lazy loading, and caching strategies for maximum speed.',
            value: 'Sub-100ms initial load times guaranteed',
        },
    ]

    return (
        <section
            className="border-y border-[#e5e7eb] px-5 py-15 sm:px-8 lg:px-12 xl:px-20"
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
                <div className="flex justify-center ">
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

            </div>
        </section>
    )
}

export default Service