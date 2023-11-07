'use client'
/* eslint-disable @next/next/no-img-element */
import Navbar from './components/Navbar'

const page = () => {
  return (
    <>
      <Navbar />
      <section id='home' className='relative'>
        <span
          id='circle'
          className='top-[-148px] left-[-155px] w-[310px] h-[297px]'
        ></span>
        <span
          id='circle-nofill'
          className='top-[-204px] left-[-193px] w-[424px] h-[409px]'
        ></span>
        <span
          id='circle-nofill'
          className='top-[-190px] right-[-170px] w-[424px] h-[409px]'
        ></span>
        <img
          src='/images/Me-nobg.png'
          alt='Me'
          className='absolute bottom-0 min-w-full'
        />
        <h1 className='text-center text-[#2B2218] absolute top-[53%] left-[15%] font-semibold text-[20px]'>
          Hi! I’m <b>Fernando Jocevine ! </b> <br /> Also known as<b> Epje !</b>
        </h1>
      </section>
      <span
        id='circle'
        className='bottom-[-72px] left-[200px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%]'
      ></span>
      <div className='relative top-[190px]'>
        <span
          id='circle'
          className='bottom-[142px] right-[100px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%] -z-10'
        ></span>
        <span
          id='circle-nofill'
          className='bottom-[132px] right-[180px] w-[135px] h-[123px] -z-10'
        ></span>
      </div>
      <h1 className='text-center mt-[5%] font-semibold text-[24px]'>
        I’m very interested in
        <br /> <b className='text-[#EDC191]'> Web Dev </b> &
        <b className='text-[#EDC191]'> Mobile Dev. </b>
      </h1>
      <section id='about' className='relative'></section>
    </>
  )
}

export default page
