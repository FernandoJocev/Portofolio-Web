'use client'
/* eslint-disable @next/next/no-img-element */
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <div id='bg' className='relative'>
        <img
          src='/images/bg-main.png'
          alt='Background'
          className='min-w-full'
        />
        <img
          src='/images/Me-nobg.png'
          alt='Me'
          className='absolute bottom-0 min-w-full'
        />
      </div>
      <section id='home' className='absolute z-50 top-[40%] left-[17%]'>
        <h1 className='text-center text-[#2B2218]'>
          Hi! I’m Fernando Jocevine ! <br /> Also known as Epje !
        </h1>
      </section>
    </>
  )
}

export default page
