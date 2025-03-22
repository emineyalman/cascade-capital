import styles from '../style'
import { discount,rbttt } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} bg-gradient-to-b from-[#0F172A] to-[#1E293B] w-[90%] mx-auto rounded-3xl shadow-2xl`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-3 px-4 bg-gradient-to-r from-[#9333EA] to-[#3B82F6] rounded-xl mb-4 shadow-lg'>
          <img
            src={discount}
            alt='discount'
            className='w-8 h-8'
          />
          <p className={`${styles.paragraph} ml-3 font-medium`}>
            <span className='text-white'>Exclusive</span> {" "}
            <span className='text-[#FDE047]'>30% OFF</span> for New Users
          </p>
        </div>

        <div className='flex flex-col space-y-6'>
          <h1 className='font-poppins font-bold text-5xl md:text-7xl text-white leading-tight'>
            Revolutionize Your <br/>
            <span className='bg-gradient-to-r from-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent'>
              Digital Experience
            </span>
          </h1>
          
          <p className={`${styles.paragraph} max-w-[600px] text-lg text-gray-300`}>
            Discover the future of financial technology with our AI-powered solutions. 
            We're redefining how you manage money, make payments, and grow your wealth.
          </p>
          
          <div className='flex space-x-6 items-center'>
            <button className='px-8 py-3 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg'>
              Explore Features
            </button>
            <button className='px-8 py-3 border-2 border-[#3B82F6] text-white font-semibold rounded-lg hover:bg-[#3B82F6] transition-colors duration-300'>
              Learn More
            </button>
          </div>

          <div className="mt-6">
          </div>
        </div>
      </div>
      
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={rbttt}
          alt='billing'
          className='w-[90%] h-[90%] relative z-[5] hover:scale-105 transition-transform duration-500'
        />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 bg-gradient-to-b from-[#3B82F6] to-[#9333EA] opacity-60 blur-2xl"/>
      </div>
    </section>
  )
}

export default Hero
