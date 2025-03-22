import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[200px] h-[240px] rounded-[40px] bg-gradient-to-b from-[#1A1A1A] to-[#2C3E50] p-[2px] cursor-pointer hover:scale-105 transition-all duration-300 relative overflow-hidden shadow-2xl`}>
      {/* Modern gradient border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B6B] to-[#FFE66D] rounded-[40px] opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className={`${styles.flexCenter} bg-[#1A1A1A] w-[100%] h-[100%] rounded-[38px] relative z-10 p-6`}>
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src={arrowUp}
              alt='arrow'
              className='w-[40px] h-[40px] object-contain animate-float'
            />
            <div>
              <p className='font-poppins font-bold text-[24px] leading-[30px]'>
                <span className='bg-gradient-to-b from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent'>
                  Start Your
                </span>
              </p>
              <p className='font-poppins font-bold text-[24px] leading-[30px]'>
                <span className='bg-gradient-to-b from-[#FF6B6B] to-[#FFE66D] bg-clip-text text-transparent'>
                  Journey
                </span>
              </p>
            </div>
          </div>
          
          <p className='font-poppins font-normal text-[14px] leading-[20px] text-gray-400'>
            Unlock new possibilities and shape your future
          </p>
          
          <div className="w-full h-[2px] bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D]"></div>
          
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFE66D] text-white font-semibold hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#FF6B6B] to-[#FFE66D] blur-2xl opacity-0 hover:opacity-20 transition-opacity duration-500 z-0"></div>
    </div>
  )
}

export default GetStarted
