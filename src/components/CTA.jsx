import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col-reverse sm:flex-row bg-gradient-to-r from-[#3B82F6] to-[#9333EA] rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-all duration-300`}>
      <div className={`${styles.flexCenter} sm:mr-10 mr-0 sm:mt-0 mt-8`}>
        <Button/>
      </div>
      <div className='flex-1 flex flex-col text-center sm:text-left'>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-white to-[#E0EAFF] bg-clip-text text-transparent`}>
          Transform Your Business <br className='sm:block hidden'/>with Our Solutions
        </h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5 text-gray-200`}>
          Unlock the future of digital payments with our cutting-edge platform. Seamlessly integrate, scale globally, and boost your revenue with our AI-powered tools.
        </p>
      </div>
    </section>
  )
}

export default CTA
