import Link from 'next/link'

const Navbar = () => {
  if (typeof window !== 'undefined') {
    const navBackground = () => {
      let navbar = document.getElementById('navbar')
      // console.log(window.scrollY)
      if (
        window.scrollY >= 1200 ||
        (window.scrollY >= 570 && window.scrollY <= 770)
      ) {
        navbar?.classList.remove('pt-10')
        navbar?.classList.add('active', 'pt-2')
      } else {
        navbar?.classList.remove('active', 'pt-2')
        navbar?.classList.add('pt-10')
      }
    }

    window.addEventListener('scroll', navBackground)
  }
  return (
    <>
      <div
        id='navbar'
        className='fixed top-0 flex justify-between min-w-full z-50 pl-40 pr-40 pt-10 items-center overflow-x-hidden'
      >
        <Link
          href=''
          className='text-[#FAF9F9] font-bold hover:text-[#2b2218] transition-all duration-[0.2s]'
        >
          Epje.
        </Link>
        <nav className='flex gap-x-20 items-center'>
          <div className='text-[#2B2218] flex font-bold gap-x-20 items-center'>
            <Link href='#home' className='active-link'>
              Home
            </Link>
            <Link href='#about'>About</Link>
            <Link href='#skills'>Skills</Link>
            <Link href='#feedback'>Feedback</Link>
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
