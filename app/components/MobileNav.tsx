import Link from 'next/link'

const MobileNav = () => {
  const openNav = () => {
    let element = document.getElementById('mobile-nav')

    if (element?.classList.contains('!hidden')) {
      element?.classList.remove('!hidden')
      return
    } else if (element?.classList.contains('hide')) {
      element.classList.remove('hide')
      return
    }
    element?.classList.add('hide')
  }

  const scrollActive = (navId: string) => {
    const allElements = document.querySelectorAll('.active-link')
    const navElement = document.getElementById(navId)

    if (navElement) {
      allElements.forEach((element) => {
        element.classList.remove('active-link')
      })
      navElement.classList.add('active-link')
    }
  }
  return (
    <>
      <div className='lg:hidden' id='mobile-nav-parent'>
        <div
          className='rounded-lg fixed right-0 top-0 md:mt-5 mobile:mt-[1.2rem] mobile:mr-[-30px] md:mr-5 z-50 md:text-[42px] mobile:text-[27px] cursor-pointer text-[#faf9f9] pr-14'
          id='icon'
        >
          <i className='ri-menu-fill' onClick={openNav}></i>
        </div>

        <div className='md:pr-40 md:pt-10 mobile:pt-8 md:pl-40 mobile:pl-10 absolute z-50 md:text-[14px] mobile:text-[10px]'>
          <Link
            href='#home'
            className='text-[#FAF9F9] font-bold hover:text-[#2b2218]'
          >
            Epje.
          </Link>
        </div>

        <nav id='mobile-nav' className='!hidden'>
          <div>
            <Link
              href='#home'
              id='home-nav'
              onClick={() => scrollActive('home-nav')}
            >
              Home
            </Link>
            <Link
              href='#about'
              id='about-nav'
              onClick={() => scrollActive('about-nav')}
            >
              About
            </Link>
            <Link
              href='#skills'
              id='skills-nav'
              onClick={() => scrollActive('skills-nav')}
            >
              Skills
            </Link>
            <Link
              href='#feedback'
              id='feedback-nav'
              onClick={() => scrollActive('feedback-nav')}
            >
              Feedback
            </Link>
          </div>
          <button
            id='contact-me'
            type='submit'
            className='relative'
            onClick={(): void => {
              window.location.href = 'https://wa.me/6282350036421'
            }}
          >
            Contact Me
          </button>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
