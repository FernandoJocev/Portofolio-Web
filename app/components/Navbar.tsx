import Link from 'next/link'

const Navbar = () => {
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

  if (typeof window !== 'undefined') {
    const navBackground = () => {
      let navbar = document.getElementById('navbar')
      // console.log(window.scrollY)
      if (window.scrollY >= 1200 || window.scrollY >= 500) {
        navbar?.classList.remove('lg:pt-10')
        navbar?.classList.add('active', 'lg:pt-2')
      } else {
        navbar?.classList.remove('active', 'lg:pt-2')
        navbar?.classList.add('lg:pt-10')
      }
    }

    window.addEventListener('scroll', navBackground)
  }
  return (
    <>
      <div
        id='navbar'
        className='fixed top-0 flex justify-between min-w-full lg:pl-40 lg:pr-40 lg:pt-10 items-center overflow-x-hidden z-50'
      >
        <Link
          href=''
          className='text-[#FAF9F9] font-bold hover:text-[#2b2218] transition-all duration-[0.2s]'
        >
          Epje.
        </Link>
        <nav className='flex lg:gap-x-20 md:gap-x-5 items-center'>
          <div className='text-[#2B2218] flex font-bold gap-x-20 items-center'>
            <Link
              href='#home'
              className='active-link'
              id='home-nav'
              onClick={() => scrollActive('home-nav')}
            >
              Home
            </Link>
            <Link
              href='#about'
              onClick={() => scrollActive('about-nav')}
              id='about-nav'
            >
              About
            </Link>
            <Link
              href='#skills'
              onClick={() => scrollActive('skills-nav')}
              id='skills-nav'
            >
              Skills
            </Link>
            <Link
              href='#feedback'
              onClick={() => scrollActive('feedback-nav')}
              id='feedback-nav'
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

export default Navbar
