import Link from 'next/link'

// Images
import Image from 'next/image'
import me_nobg from '../assets/images/Me-nobg.png'

const Footer = () => {
  return (
    <section
      id='footer'
      className='flex w-full flex-col justify-center items-center pt-4 pb-2 bg-[#E5B37E] text-[#2b2218] mt-10 relative'
    >
      <Image
        src={me_nobg}
        alt='Me'
        className='md:right-[-6%] mobile:right-[-5%] absolute w-[30%] bottom-[0px]'
      />
      <span className='flex gap-x-1 mobile:text-[12px] md:text-[15px]'>
        Created and Designed By
        <p
          className='cursor-pointer'
          onClick={() => {
            window.open('https://www.instagram.com/fernandojocevine/', '_blank')
          }}
        >
          <b>Fernando Jocevine</b>
        </p>
      </span>
      <div className='flex items-center md:text-[24px] mobile:text-[18px] cursor-pointer gap-x-2'>
        <i
          className='ri-github-fill'
          onClick={() => {
            window.open('https://github.com/FernandoJocev', '_blank')
          }}
        ></i>
        <i
          className='ri-linkedin-box-fill'
          onClick={() => {
            window.open(
              'https://linkedin.com/in/fernando-jocevine-2111b624a',
              '_blank'
            )
          }}
        ></i>
      </div>
    </section>
  )
}

export default Footer
