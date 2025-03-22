import React from 'react'
import { creditcard } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={`${layout.section} bg-gradient-to-br from-[#0F172A] to-[#1E293B] backdrop-blur-lg rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}>
      <div className={layout.sectionImg}>
        <img
          src={creditcard}
          alt='creditcard'
          className='w-[100%] h-[100%] transform hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent`}>
          Revolutionize Your Payments <br className='sm:block hidden'/>with Smart Banking
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
          Experience the future of finance with our AI-powered banking solutions. 
          Get instant approvals, personalized rewards, and seamless integration 
          with your digital lifestyle. Join thousands of satisfied users who've 
          transformed their financial management.
        </p>
        <Button styles='mt-10 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] hover:from-[#9333EA] hover:to-[#3B82F6] transition-all duration-300'/>
      </div>
    </section>
  )
}

export default CardDeal
