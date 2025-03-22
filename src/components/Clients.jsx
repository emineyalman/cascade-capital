import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} flex-col py-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B]`}>
      <div className='text-center mb-12'>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent`}>
          Trusted by Industry Leaders
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] mx-auto mt-4 text-gray-400`}>
          We're proud to partner with innovative companies across the globe, helping them transform their digital infrastructure and achieve their business goals.
        </p>
      </div>
      
      <div className={`${styles.flexCenter} flex-wrap w-full max-w-7xl mx-auto px-4`}>
        {clients.map((client) => (
          <div 
            key={client.id} 
            className={`flex-1 ${styles.flexCenter} sm:min-w-[200px] min-w-[120px] m-4 p-6 rounded-2xl bg-[#1E293B] border border-[#334155] hover:border-[#3B82F6] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]`}
          >
            <img
              src={client.logo}
              alt={client.name}
              className='sm:w-[180px] w-[100px] object-contain grayscale hover:grayscale-0 transition-all duration-300'
            />           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
