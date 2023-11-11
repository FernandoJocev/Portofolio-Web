import Link from 'next/link'

const Footer = () => {
  return (
    <section
      id='footer'
      className='flex w-full flex-col justify-center items-center pt-4 pb-2 bg-[#E5B37E] text-[#2b2218] mt-10'
    >
      <span className='flex gap-x-1'>
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
      <div className='flex items-center text-[24px] cursor-pointer gap-x-2'>
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
              'https://www.linkedin.com/in/fernando-jocevine-b5743a246/',
              '_blank'
            )
          }}
        ></i>
      </div>
    </section>
  )
}

export default Footer
