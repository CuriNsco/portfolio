import React from 'react'
import styles from '../style'
import { hoobank, fiambreria } from '../assets'

export const Portfolio = () => {
  return (
    <section className='bg-[#f8f7f1]'>

      <div className='flex flex-col justify-center text-center mx-4 sm:flex sm:justify-center sm:flex-col sm:text-center'>
        <span className={`${styles.primaryText} mt-12`} id='portfolio'>
          My Latest Works 
        </span>
        <span className={styles.secondaryText}>
        Perfect solution for digital experience
        </span>
      </div>

    <div className='flex flex-col pb-16 sm:flex sm:place-content-center sm:mt-12 sm:flex-row'>

      <div className={styles.workSize}>
        <img src={hoobank} alt="hoobank" className={`rounded rounded-2xl ${styles.hoverImage}`}/>
      </div>

      <div className={styles.workSize}>
        <img src={fiambreria} alt="fiambreia" className={`rounded rounded-2xl ${styles.hoverImage}`}/>
      </div>
      
    </div>
    </section>
  )
}
