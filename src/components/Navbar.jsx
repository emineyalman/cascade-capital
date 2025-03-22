import React, { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar bg-gradient-to-b from-[#0F172A] to-[#1E293B] backdrop-blur-lg border-b border-[#2C3E50]'>
      <div className='flex items-center space-x-4'>
        <img src={logo} alt='nexify' className='w-[140px] h-[36px] hover:scale-105 transition-transform hover:rotate-3'/>
        <span className='text-xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent animate-gradient'>
          Nexify
        </span>
      </div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 space-x-8'>
        {navLinks.map((nav, i) => (
          <li 
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-[#3B82F6] transition-all ${
              i === navLinks.length - 1 ? 'mr-0' : 'mr-6'
            } text-gray-300 hover:scale-105`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>        
        ))}
        <button className='ml-6 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]'>
          Start Your Journey
        </button>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[32px] h-[32px] object-contain hover:scale-110 transition-transform'
          onClick={() => setToggle((previous) => !previous)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#1A1A1A] backdrop-blur-lg absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl border border-[#2C3E50] shadow-2xl`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1 space-y-4'>
            {navLinks.map((nav, i) => (
              <li 
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] hover:text-[#3B82F6] transition-all ${
                  i === navLinks.length - 1 ? 'mb-0' : 'mb-4'
                } text-gray-300 hover:scale-105`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>        
            ))}
            <button className='mt-4 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#9333EA] text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg'>
              Start Your Journey
            </button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
