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
        <h1 className='text-center text-[#2B2218] absolute top-[53%] left-[15%] font-medium text-[20px]'>
          Hi! I’m <b>Fernando Jocevine ! </b> <br /> Also known as<b> Epje !</b>
        </h1>
      </section>

      <div className='relative top-[190px]'>
        <span
          id='circle'
          className='bottom-[-40px] left-[200px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%]'
        ></span>
        <span
          id='circle'
          className='bottom-[142px] right-[100px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%] -z-10'
        ></span>
        <span
          id='circle-nofill'
          className='bottom-[132px] right-[180px] w-[135px] h-[123px] -z-10'
        ></span>
      </div>
      <h1 className='text-center mt-[35px] font-semibold text-[24px] text-[#FAF9F9]'>
        I’m very interested in
        <br /> <b className='text-[#EDC191]'> Web Dev </b> &
        <b className='text-[#EDC191]'> Mobile Dev. </b>
      </h1>

      <section
        id='about'
        className='relative pl-40 pr-40 mt-10 pt-10 pb-10 flex flex-col gap-y-10 items-center justify-center'
      >
        <span
          id='circle'
          className='bottom-[-148px] right-[-155px] w-[310px] h-[297px] !bg-[#2b2218] opacity-80'
        ></span>
        <span
          id='circle-nofill'
          className='top-[-204px] left-[50px] w-[424px] h-[409px]'
        ></span>
        <img
          src='/images/Me_2-nobg.jpg'
          alt='Me'
          className='absolute bottom-0 left-0 min-w-full'
        />
        <h1 className='font-semibold text-[32px] text-[#2B2218]'>About Me</h1>
        <div className='flex flex-col items-center text-start w-[55%]'>
          <h1 className='font-medium text-[28px] text-[#2B2218] z-50'>
            Hi! It’s me again, <b>Fernando Jocevine</b>
          </h1>
          <div className='mt-20 mb-20'>
            <p className='font-semibold text-[15px] text-[#5A442D] text-start break-all'>
              I’m currently a student at ITBSS with Sistem Teknik Informatika
              major and was in the 1st semester!
            </p>
          </div>
        </div>

        <div className='grid gap-y-5 lg:grid-cols-2 sm:grid-cols-1'>
          <div className='flex items-center gap-x-2'>
            <i className='ri-calendar-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Age : </h1>
              <b className='text-[#2b2218]'>17 y.o</b>
            </div>
          </div>

          <div className='flex items-center gap-x-2 lg:ml-10'>
            <i className='ri-heart-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Like : </h1>
              <b className='text-[#2b2218]'>Cheese</b>
            </div>
          </div>

          <div className='flex items-center gap-x-2'>
            <i className='ri-code-s-slash-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Interest : </h1>
              <b className='text-[#2b2218]'>Web & Mobile Dev</b>
            </div>
          </div>

          <div className='flex items-center gap-x-2 lg:ml-10'>
            <i className='ri-dislike-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Don’t like : </h1>
              <b className='text-[#2b2218]'>Bitter melon</b>
            </div>
          </div>
        </div>
      </section>

      <section id='skills'></section>
    </>
  )
}

export default page
