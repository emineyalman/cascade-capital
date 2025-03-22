import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const Billing = () => {
  return (
    <section id='product' className={`${layout.section} bg-gradient-to-br from-[#0F172A] to-[#1E293B] backdrop-blur-lg rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent`}>
          Smart Billing Solutions <br className='sm:block hidden'/>for Modern Businesses
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
          Revolutionize your financial operations with our AI-powered billing platform. 
          Automate invoicing, track expenses in real-time, and gain valuable insights 
          to optimize your cash flow. Experience seamless integration with your 
          existing systems and take control of your finances like never before.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 gap-4'>
          <img
            src={apple}
            alt='app-store'
            className='w-[128px] h-[42px] object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300'
          />
          <img
            src={google}
            alt='google-play'
            className='w-[128px] h-[42px] object-contain cursor-pointer transform hover:scale-105 transition-transform duration-300'
          />
        </div>
        <Button styles='mt-8 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] hover:from-[#9333EA] hover:to-[#3B82F6] transition-all duration-300'/>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5] transform hover:scale-105 transition-transform duration-300'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full bg-gradient-to-r from-[#3B82F6]/20 to-[#9333EA]/20 blur-3xl'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full bg-gradient-to-r from-[#9333EA]/20 to-[#3B82F6]/20 blur-3xl'/>
      </div>
    </section>
  )
}

export default Billing
