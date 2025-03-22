import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-gradient-to-b from-[#0F172A] to-[#1E293B]`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((link) => (
            <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent'>
                {link.title}
              </h4>
              <ul className='list-none mt-4'>
                {link.links.map((item, index) => (
                  <li 
                    key={item.name} 
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-gray-400 hover:text-[#3B82F6] cursor-pointer transition-colors duration-300 ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex-1 flex flex-col justify-start ml-10'>
          <img
            src={logo}
            alt='logo'
            className='w-[266px] h-[172px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] text-gray-400`}>
            Revolutionizing digital finance with cutting-edge blockchain technology and AI-powered solutions.
          </p>
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3B82F6]/20'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-gray-400'>
          © 2023 NexaBank. Empowering the future of finance.
        </p>  
        <div className='flex flex-row md:mt-0 mt-6 space-x-6'>
          {socialMedia.map((social) => (
            <div key={social.id} className='p-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] hover:scale-110 transition-transform duration-300'>
              <img
                src={social.icon}
                alt={social.id}
                className='w-[21px] h-[21px] object-contain'
              />
            </div>
          ))}
        </div>    
      </div>
    </section>
  )
}

export default Footer
