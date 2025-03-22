import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12 py-16 ${styles.gradientBg}`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex flex-col items-center p-8 rounded-3xl ${styles.glassEffect} hover:scale-105 transition-transform duration-300`}>
          <h4 className='font-poppins font-bold text-5xl md:text-6xl bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent'>
            {stat.value}
          </h4>
          <p className='font-poppins font-medium text-lg md:text-xl text-gray-300 mt-4 text-center'>
            {stat.title}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] mt-6 rounded-full" />
        </div>
      ))}
    </section>
  )
}

export default Stats
