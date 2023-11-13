'use client'
import { useEffect, useState } from 'react'
import { client } from './sanity/services/sanityClient'
import { useForm } from 'react-hook-form'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'

// Typewriter Effect
import Typewriter from 'typewriter-effect'

// Interfaces
import { skillsProps } from './interfaces/skills.interface'

// Images
import Image from 'next/image'
import me_nobg from './assets/images/Me-nobg.png'
import me_nobg2 from './assets/images/Me_2-nobg.jpg'

// ScrollSpy
import ScrollSpyNav from 'react-scrollspy-nav'

// Sweet Alert
import Swal from 'react-sweetalert2'

const Page = () => {
  const [skills, setSkills] = useState<skillsProps[]>([])
  const [swalProps, setSwalProps] = useState({})
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm()

  const getSkills = async () => {
    const data = await client.fetch('*[_type == "skills"]')

    setSkills(data)
  }

  const postFeedback = async (data: any) => {
    const feedback = {
      _type: 'feedback',
      email: data.email,
      name: data.name,
      feedback: data.feedback,
    }

    try {
      const created = await client.create(feedback, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        },
      })

      if (created) {
        setSwalProps({
          show: true,
          icon: 'success',
          title: 'Feedback sent!',
          text: 'Thank you for your feedback! Have a blessed day :)',
        })
      }
      setValue('email', '')
      setValue('name', '')
      setValue('feedback', '')
    } catch (e: any) {
      console.log(e)
      setSwalProps({
        show: true,
        icon: 'error',
        title: 'Error :(',
        text: e,
      })
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function () {
      let midCircle = document.querySelectorAll('#mid-circle')
      let midCircleNofill = document.getElementById('mid-circle-nofill')

      let aboutCircle = document.getElementById('about-circle')

      let skillsCard = document.getElementById('items-card')

      if (window.scrollY >= 20) {
        midCircle.forEach((element) => {
          element?.classList.add('mid-circle-active')
        })
        midCircleNofill?.classList.add('mid-circle-nofill-active')
      }

      if (window.scrollY >= 470) {
        aboutCircle?.classList.add('about-circle-active')
      }

      if (window.scrollY >= 1000) {
        skillsCard?.classList.remove('hidden')
        skillsCard?.classList.add('items-card-active', 'grid')
      }
    })
  }

  useEffect(() => {
    getSkills()
  }, [])
  return (
    <>
      <ScrollSpyNav
        scrollTargetIds={['home', 'about', 'skills', 'feedback']}
        activeNavClass='active-link'
        scrollDuration='100'
        headerBackground='true'
      >
        <Navbar />
      </ScrollSpyNav>

      <MobileNav />

      <section id='home' className='relative'>
        <span
          id='home-circle'
          className='sm:top-[-148px] mobile:top-[-50px] sm:left-[-155px] mobile:left-[-50px] sm:w-[310px] sm:h-[297px] mobile:w-[100px] mobile:h-[100px]'
        ></span>
        <span
          id='home-circle-nofill'
          className='md:top-[-204px] mobile:top-[-67px] md:left-[-193px] mobile:left-[-67px] md:w-[424px] md:h-[409px] mobile:w-[150px] mobile:h-[150px]'
        ></span>
        <span
          id='home-circle-nofill'
          className='lg:top-[-190px] md:top-[-220px] mobile:top-[-80px] md:right-[-170px] mobile:right-[-70px] md:w-[424px] md:h-[409px] mobile:w-[180px] mobile:h-[170px]'
        ></span>
        <Image
          src={me_nobg}
          alt='Me'
          id='me'
          className='absolute bottom-0 w-full mobile:right-[-70px]'
        />
        <div className='mobile:flex mobile:flex-col mobile:justify-center mobile:h-full'>
          <h1
            className='text-center text-[#2B2218] md:absolute md:top-[53%] md:left-[15%] font-medium md:text-[20px] mobile:text-[17px] tracking-[1px]'
            id='main-text'
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    'Hi! I’m <b> Fernando Jocevine !</b> <br /> Also known as <b> Epje!</b>'
                  )
                  .changeDelay(1)
                  .start()
              }}
              options={{
                delay: 40,
              }}
            />
          </h1>
        </div>
      </section>

      <div className='relative top-[190px]'>
        <span
          id='mid-circle'
          className='lg:bottom-[-40px] md:bottom-[50px] mobile:bottom-[70px] lg:left-[90px] md:left-[-100px] mobile:left-[-120px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%]'
        ></span>
        <span
          id='mid-circle'
          className='md:bottom-[142px] mobile:bottom-[150px] lg:right-[100px] md:right-[40px] mobile:right-[-90px] w-[135px] h-[123px] !bg-[#E2B587] opacity-[80%] -z-10'
        ></span>
        <span
          id='mid-circle-nofill'
          className='md:bottom-[132px] lg:right-[180px] mobile:bottom-[150px] md:right-[100px] mobile:right-[-40px] w-[135px] h-[123px] -z-10'
        ></span>
      </div>
      <h1 className='text-center mt-[35px] font-semibold md:text-[24px] mobile:text-[14px] text-[#FAF9F9]'>
        I’m very interested in
        <br /> <b className='text-[#EDC191]'> Web Dev </b> &
        <b className='text-[#EDC191]'> Mobile Dev. </b>
      </h1>

      <section
        id='about'
        className='relative lg:pl-40 lg:pr-40 mt-10 md:pt-10 md:pb-10 flex flex-col md:gap-y-10 mobile:gap-5 items-center justify-center'
      >
        <span
          id='about-circle'
          className='md:bottom-[-148px] mobile:bottom-[-100px] right-[-155px] md:w-[310px] md:h-[297px] mobile:w-[210px] mobile:h-[197px] opacity-80 absolute'
        ></span>
        <span
          id='about-circle-nofill'
          className='md:top-[-270px] lg:top-[-260px] mobile:top-[-190px] lg:left-[-50px] md:w-[424px] md:h-[409px] md:left-[-200px] mobile:left-[-190px] mobile:w-[250px] mobile:h-[250px]'
        ></span>
        <Image
          src={me_nobg2}
          alt='Me'
          className='absolute bottom-0 left-0 min-w-full'
        />
        <h1 className='font-semibold md:text-[32px] mobile:text-[24px] text-[#2B2218] md:mt-[-1rem]'>
          About Me
        </h1>
        <div className='flex flex-col items-center lg:text-start mobile:text-center w-[55%]'>
          <h1 className='font-medium md:text-[28px] mobile:text-[18px] text-[#2B2218] z-40'>
            Hi! It’s me again, <b>Fernando Jocevine</b>
          </h1>
          <div className='md:mt-10 mobile:mt-5 md:mb-10 mobile:mb-5'>
            <p className='font-semibold md:text-[15px] mobile:text-[12px] text-[#5A442D] lg:text-start'>
              I’m currently a student at ITBSS with Sistem Teknik Informatika
              major and was in the 1st semester!
            </p>
          </div>
        </div>

        <div className='grid gap-y-5 md:grid-cols-2 sm:grid-cols-1 mobile:text-[12px] lg:text-[15px]'>
          <div className='flex items-center gap-x-2'>
            <i className='ri-calendar-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Age : </h1>
              <b className='text-[#2b2218]'>17 y.o</b>
            </div>
          </div>

          <div className='flex items-center gap-x-2 lg:ml-10 md:ml-5'>
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

          <div className='flex items-center gap-x-2 lg:ml-10 md:ml-5'>
            <i className='ri-dislike-line text-[#2B2218] text-[24px]'></i>
            <div className='flex gap-x-5 items-center'>
              <h1>Don’t like : </h1>
              <b className='text-[#2b2218]'>Bitter melon</b>
            </div>
          </div>
        </div>
      </section>

      <section
        id='skills'
        className='z-50 lg:pl-40 lg:pr-40 md:pl-28 mobile:pl-5 md:pr-28 mobile:pr-5 mt-10 pt-10 pb-10'
      >
        <div
          className='mt-10 lg:grid-cols-3 mobile:grid-cols-1 md:grid-cols-2 gap-10 z-50 hidden'
          id='items-card'
        >
          {skills.map((result, idx) => {
            return (
              <div
                className='flex flex-col items-center justify-center bg-[#221B14] rounded-[10px] gap-y-2 p-5'
                key={idx}
              >
                <div className='h-[115px] flex flex-col justify-center items-center'>
                  <Image
                    src={result?.image}
                    alt={result?.name}
                    width={114}
                    height={113}
                  />
                </div>
                <div className='flex flex-col items-center mobile:text-center'>
                  <h1 className='text-[#FAF9F9] font-bold md:text-[20px] mobile:text-[18px]'>
                    {result?.name}
                  </h1>
                  <p className='text-[#FAF9F9] md:text-[15px] mobile:text-[14px]'>
                    {result?.year}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section id='feedback' className='lg:pl-40 lg:pr-40 pt-10 pb-10 w-full'>
        <div className='mt-10 flex flex-col items-center w-full'>
          <h1 className='text-[#FAF9F9] font-bold md:text-[40px] mobile:text-[24px]'>
            Feedback
          </h1>
          <p className='text-[#EDC191] font-semibold md:text-[18px] mobile:text-[14px]'>
            I’m glad to hear your feedback!
          </p>
          <form
            onSubmit={handleSubmit(postFeedback)}
            method='POST'
            className='flex flex-col items-center gap-y-5 min-w-[70%] mt-7'
          >
            <input
              type='text'
              className='min-w-full h-[50px]'
              placeholder='Your name...'
              {...register('name', { required: true })}
              required
            />
            <input
              type='text'
              {...register('email', { required: true })}
              className='min-w-full h-[50px]'
              placeholder='Email...'
              required
            />
            <textarea
              {...register('feedback', { required: true })}
              className='min-w-full h-[250px]'
              placeholder='Your feedback'
              required
            ></textarea>
            <button
              type='submit'
              className='min-w-full h-[50px] rounded-[62px] bg-[#EDC191] text-[#5A442D] font-semibold'
            >
              Submit
            </button>
          </form>
        </div>
        <Swal {...swalProps} />
      </section>
      <Footer />
    </>
  )
}

export default Page
