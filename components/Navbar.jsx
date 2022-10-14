import { useState} from 'react'
import MobileNav from './MobileNav'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div >
      <div className='flex items-center justify-between sticky px-3 font-panchangBold'>
         <div className='flex flex-col text-lg md:text-xl items-center'>
            <div>JOSEPH</div>
            <div className='pl-6'>OMOTADE.</div>
        </div>
        <div onClick={() => setClicked(!clicked)}>
        <HiOutlineMenuAlt4 size={35}/> 
        </div>
      </div>
       <MobileNav clicked={clicked} setClicked={setClicked}  />
        
    </div>
  )
}

export default Navbar