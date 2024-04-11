"use client"
import { motion } from 'framer-motion';

export default function Card({ title, description ,image}) {
    return (
        <motion.span whileInView={{opacity:[0,1]}} transition={{duration:3}} className='mx-4 my-8 py-4 min-w-[90%] min-h-[48rem] md:min-w-[56rem] snap-start'>
            <div className='overflow-hidden rounded-3xl'>
            <img className='min-h-[32rem] md:w-[56rem] md:h-[24rem] hover:scale-110 duration-500 ease-out object-cover' src={image} alt={title}></img>
            </div>
            <div className='px-4 py-2'>
                <h2 className='text-3xl py-2 font-thebold'>{title}</h2>
                <h3 className='text-xl font-light py-2 font-raleway-regular'>{description}</h3>
            </div>
        </motion.span>
    )
}
