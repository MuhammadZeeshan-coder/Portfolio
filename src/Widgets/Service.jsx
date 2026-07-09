import React from 'react'
import BoxOne from '../Shared/BoxOne'
import { ArrowUpRight, Cloud, Database, Layout, Search, Server, Smartphone } from 'lucide-react'
import SemiHeading from '../Shared/SemiHeading'
import ButtonOne from '../Shared/ButtonOne'

const Service = () => {
    const info = [
        {
            icon: <Layout size={30}  />,
            title: 'Frontend Development',
            description: 'Building responsive, interactive user interfaces with modern frameworks like React, Next.js, and Vue.',
            value: 'Pixel-perfect implementations with 60fps animations'
        },
        {
            icon: <Server size={30}  />,
            title: 'Backend Development',
            description: 'Designing robust APIs and server-side solutions using Node.js, Express, and microservices architecture.',
            value: 'Scalable systems handling 10k+ concurrent users'
        },
        {
            icon: <Database size={30}  />,
            title: 'Database Architecture',
            description: 'Optimizing data structures and queries for PostgreSQL, MongoDB, and Redis implementations.',
            value: '99.9% uptime with optimized query performance'
        },
    ]

    const informtion = [
        {
            icon: <Smartphone size={30} />,
            title: 'API Integration',
            description: 'Seamless third-party integrations including payment gateways, social APIs, and cloud services.',
            value: 'Secure, documented REST & GraphQL endpoints'
        },
        {
            icon: <Cloud size={30}  />,
            title: 'DevOps & Cloud',
            description: 'Docker containerization, CI/CD pipelines, and AWS/GCP deployment strategies.',
            value: 'Automated deployments with zero-downtime updates'
        },
        {
            icon: <Search  size={30} />,
            title: 'Performance Optimization',
            description: 'Core Web Vitals optimization, lazy loading, and caching strategies for maximum speed.',
            value: 'Sub-100ms initial load times guaranteed'
        }
    ]
    return (
        <section className='py-15 border-y border-[#e5e7eb]' id='services'>
            <div className='flex justify-center items-center gap-280'>
                <SemiHeading h5="services" h2="what i offer" />
                <ButtonOne name="hire me" color="white text-sm hidden" icon={<ArrowUpRight size={18} />} />
            </div>
            <BoxOne data={info} />
            <BoxOne data={informtion} />
        </section>
    )
}

export default Service