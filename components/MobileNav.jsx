import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const MobileNav = ({ clicked, setClicked}) => {
  return (
    <div className={clicked 
        ? ` fixed h-screen w-screen bg-[#ffffe3] text-[#191815] top-0 right-0 transition ease-in duration-150`
     : `fixed top-[-100] hidden transition duration-150`}>
        <div className='flex items-center justify-between px-3 font-panchangBold'>
         <div className='flex flex-col text-xl items-center'>
            <div>JOSEPH</div>
            <div className='pl-6'>OMOTADE.</div>
        </div>
        <div onClick={() => setClicked(!clicked)}>
        <HiOutlineMenuAlt4 size={35}/> 
        </div>
        </div>
        <div className='grid grid-cols-1 mt-16 md:mt-[10%] text-3xl md:text-5xl lg:text-7xl font-bold font-panchangBold md:grid-cols-2 gap-16 items-center mx-auto space-y-9 justify-center'>
            <span>Home</span>
            <span>Works</span>
            <span>About</span>
            <span>Contact</span>
        </div>
     </div>
  )
}

export default MobileNav