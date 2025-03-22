import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[160px] rounded-[20px] bg-gradient-to-b from-[#0F172A] to-[#1E293B] p-[1px] cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-lg`}>
      <div className={`${styles.flexCenter} bg-[#0F172A] w-[100%] h-[100%] rounded-[19px] relative z-10 p-4`}>
        <div className="flex flex-col items-center space-y-3">
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[32px] h-[32px] object-contain animate-float'
          />
          <p className='font-poppins font-bold text-[18px] leading-[22px] text-center'>
            <span className='bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent'>
              Get Started
            </span>
          </p>
          
          <button className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white text-sm font-medium hover:shadow-md transition-all duration-300">
            Explore
          </button>
        </div>
      </div>
      
      <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] blur-xl opacity-0 hover:opacity-15 transition-opacity duration-500 z-0"></div>
    </div>
  )
}

export default GetStarted
