import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from "motion/react"

const Services = () => {
    const servicesData = [
        {
            title: 'Advertisting',
            description: 'We turn bold ideas into poerful digital solution that connect, engage ....',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drivers results.',
            icon: assets.content_icon
        },
        {
            title: 'Social Media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ]
  return (
    <motion.div 
    initial={{opacity: 0, y: 40}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, delay: 0.8}}
    viewport={{once: true}}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution, we craft digital solution that move your business forward.'></Title>

        {/* MOUNT SERVICE CARD */}
        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>

    </motion.div>
  )
}

export default Services
