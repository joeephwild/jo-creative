
import Head from 'next/head'
import Image from 'next/image'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>
    <Hero/>
    <div className='md:flex flex--col md:px-11 items-center md:justify-between'>
       <span className='md:text-sm text-xs mx-4 md:pl-0 text-center font-semibold  mt-6 tracking-widest font-cabinentLight w-[35%] md:w-[54%]'>
        Interactive developer striving to craft memorable experience on a digital canvas.
        with skills of a frontend developer but still fullstack capable,
        based in Lagos, Nigeria. </span>
        <span className='animate-bounce flex justify-end pt-[17%] md:pt-16'>
          <AiOutlineArrowDown size={37} />
        </span>
    </div>
     
    </div>
  )
}

export default Home
