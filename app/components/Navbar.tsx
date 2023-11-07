import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className='absolute top-0 flex justify-between min-w-full z-50 pl-40 pr-40 pt-10 items-center'>
        <h4 className='text-[#FAF9F9] font-bold'>Epje</h4>
        <div className='flex gap-x-20 items-center'>
          <div className='text-[#2B2218] flex font-bold gap-x-20 items-center'>
            <Link href='#home'>Home</Link>
            <Link href='#about'>About</Link>
            <Link href='#skills'>Skills</Link>
          </div>
          <button
            id='contact-me'
            type='submit'
            onClick={(): void => {
              window.location.href = 'https://wa.me/6282350036421'
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
