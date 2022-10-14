import React from 'react'
import { motion } from 'framer-motion';
import { Animations } from '../Animations'

const parentVariants = {
 hidden: {
    opacity: 1,
 },
 show: {
    opacity: 1,
    transition: {
        staggerChildren: 0.1,
        delayChildren: 3.5
    }
 }
}

const parentVariants2 = {
    hidden: {
       opacity: 1,
    },
    show: {
       opacity: 1,
       transition: {
           staggerChildren: 0.1,
           delayChildren: 4
       }
    }
   }

const textVariants = {
    hidden: {
        y: "120%",
    },
    show: {
        y: "0%"
    }
}

const Hero = () => {
    const Text1 = ["I", "M", "A", "G", "I", "N", 'A', 'T', 'I', 'O', 'N'];
    const Text2 = ['H', 'A', 'S'];
    const Text3 = [ 'N', 'O'];
    const Text4 = ['L', 'I', 'M',  'I', 'T', 'A', 'T', 'I', 'O', 'N'];
    const { transition } = Animations()
  return (
    <div>
        <motion.section className="mt-9  justify-center flex-col flex items-center">
            <motion.div initial={{
               opacity: 0,
            }} animate={{
               opacity: 1
            }}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 3.5,
            }}
             className='items-center list-none space-x-2 lg:text-7xl text-2xl md:text-5xl leading-[70px] overflow-hidden font-bold font-panchangExtraBold flex'>
                 {
                 Text1.map((letter, index) => {
                    return (
                     <motion.li key={index} initial={{
                        y: "170%"
                     }} animate={{
                        y: "0%"
                     }} transition={{...transition, duration: 1 }} >
                           {letter}
                        </motion.li>
                    ) 
                 })}
            </motion.div>

            <div className='flex space-x-3 items-center'>
            <motion.div initial={{
               opacity: 0,
            }} animate={{
               opacity: 1
            }}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 3.5,
            }} className='flex items-center lg:text-7xl text-2xl md:text-5xl leading-[70px] font-bold font-panchangExtraBold overflow-hidden space-x-2'>
                 {Text2.map((letter, index) => {
                    return <motion.div  initial={{
                     y: "170%"
                  }} animate={{
                     y: "0%"
                  }} key={index} className='' variant={textVariants} transition={{...transition, duration: 1}}>{letter}</motion.div>
                 })}
            </motion.div>
            <motion.div initial={{
               opacity: 0,
            }} animate={{
               opacity: 1
            }}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 3.5,
            }} className='flex items-center lg:text-7xl text-2xl md:text-5xl leading-[70px] font-bold font-panchangExtraBold overflow-hidden space-x-2'>
                 {Text3.map((letter, index) => {
                    return <motion.div  initial={{
                     y: "170%"
                  }} animate={{
                     y: "0%"
                  }} key={index} className='' variant={textVariants}transition={{...transition, duration: 1}}>{letter}</motion.div>
                 })}
            </motion.div>
            </div>
           
            <motion.div initial={{
               opacity: 0,
            }} animate={{
               opacity: 1
            }}
            transition={{
               staggerChildren: 0.2,
               delayChildren: 3.5,
            }} className='flex items-center lg:text-7xl text-2xl md:text-5xl leading-[70px] font-bold font-panchangExtraBold overflow-hidden space-x-2'>
                 {Text4.map((letter, index) => {
                    return <motion.div  initial={{
                     y: "170%"
                  }} animate={{
                     y: "0%"
                  }} key={index} className='' variant={textVariants} transition={{...transition, duration: 1}}>{letter}</motion.div>
                 })}
            </motion.div>
        </motion.section>
    </div>
  )
}

export default Hero