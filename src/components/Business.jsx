import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] hover:border-[#3B82F6] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-gradient-to-r from-[#3B82F6] to-[#9333EA]`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-gray-300 text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${layout.section} bg-gradient-to-br from-[#0F172A] to-[#1E293B] backdrop-blur-lg rounded-3xl p-8 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300`}>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent`}>
          Revolutionize Your Finances, <br className='sm:block hidden'/>Focus on Your Business
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
          Our AI-powered financial platform handles all your monetary operations, 
          from smart investments to automated expense tracking. 
          While you focus on growing your business, we ensure your finances 
          are optimized for maximum growth and security.
        </p>
        <Button styles='mt-10 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] hover:from-[#9333EA] hover:to-[#3B82F6] transition-all duration-300'/>
      </div>
    </section>
  )
}

export default Business
