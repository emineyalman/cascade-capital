import React from 'react'

const Button = ({ styles }) => {
  return (
    <button 
      type='button' 
      className={`py-4 px-8 bg-gradient-to-r from-[#9333EA] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#9333EA] font-poppins font-semibold text-[18px] text-white outline-none ${styles} rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all duration-300 transform hover:scale-105`}
    >
      <span className="relative z-10">Explore Now</span>
      <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 rounded-xl transition-opacity duration-300"></span>
    </button>
  )
}

export default Button
