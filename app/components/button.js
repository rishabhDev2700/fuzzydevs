"use client"
import { motion } from 'framer-motion'
export default function Button({ children }) {

    return (
        <motion.button className='px-8 py-4 m-4 font-semibold bg-white rounded-xl shadow-md hover:scale-95 hover:shadow-sm ease-in-out duration-200'>{children}</motion.button>
    )
}
