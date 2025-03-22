import React from 'react'
import { quotes } from '../assets'

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-col px-8 py-10 rounded-2xl max-w-[400px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] hover:border-[#3B82F6] transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'>
      <div className='flex items-center mb-6'>
        <img
          src={img}
          alt={name}
          className='w-14 h-14 rounded-full border-2 border-[#3B82F6]'
        />
        <div className='ml-4'>
          <h4 className='font-poppins font-bold text-xl text-white'>{name}</h4>
          <p className='font-poppins font-medium text-sm text-gray-400'>{title}</p>
        </div>
      </div>
      
      <img
        src={quotes}
        alt='double-quotes'
        className='w-10 h-6 mb-6 opacity-80'
      />
      
      <p className='font-poppins font-light text-lg leading-relaxed text-gray-300 mb-8'>
        "This platform transformed our business operations. The seamless integration and exceptional support have been game-changers for our productivity and growth."
      </p>
      
      <div className='flex items-center justify-between'>
        <div className='flex space-x-2'>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className='font-poppins font-medium text-sm text-gray-400'>2 days ago</p>
      </div>
    </div>
  )
}

export default Feedback
