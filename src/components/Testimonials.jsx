import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] backdrop-blur-lg`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bg-gradient-to-r from-[#3B82F6] to-[#9333EA] opacity-20 blur-3xl bottom-40'/>
      
      <div className='w-full flex flex-col items-center text-center space-y-8 mb-16 relative z-[1]'>
        <h2 className={`${styles.heading2} bg-gradient-to-r from-[#3B82F6] to-[#9333EA] bg-clip-text text-transparent`}>
          Voices of Success <br className='sm:block hidden'/>From Our Community
        </h2>
        <p className={`${styles.paragraph} max-w-[800px] text-center text-gray-400`}>
          Discover how we're transforming businesses and empowering entrepreneurs worldwide. 
          From seamless integrations to unparalleled support, see what our clients have to say about their journey with us.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-[1]'>
        {feedback.map((card) => (
          <div key={card.id} className={`${styles.card} hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all`}>
            <Feedback {...card}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
