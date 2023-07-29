import React from 'react'
import styles from '../style'
import { hoobank,fiambrerianext,carshop } from '../assets'

export const Portfolio = () => {
  const githubRepoEcommerce = 'https://github.com/CuriNsco/next-ecommerce'
  const githubRepoCarshop = "https://bicicletas-ecommerce.vercel.app/"
  return (
    <section>
      <div className='flex flex-col justify-center text-center bg-[#f8f7f1] sm:flex sm:justify-center sm:flex-col sm:text-center'>
        <span className={`${styles.primaryText} mt-12`} id='portfolio'>
          My Latest Works 
        </span>
        <span className={`${styles.secondaryText} mx-4 `}>
        Perfect solution for digital experience
        </span>

        <div className='flex flex-col pb-16 sm:flex sm:pb-0 sm:mt-12 sm:flex-row sm:place-content-center'>

      <div className={`${styles.workSize}`}>
        <img src={hoobank} alt="hoobank" className={`rounded-2xl ${styles.hoverImage}`}/>
      </div>

      <div className={styles.workSize}>
        <a href={githubRepoEcommerce} target='_blank' rel='noopener noreferrer'>
        <img src={fiambrerianext} alt="fiambreia" className={` rounded-2xl ${styles.hoverImage}`}/>
        </a>
      </div>

      <div className={styles.workSize}>
        <a href={githubRepoCarshop} target='_blank' rel='noopener noreferrer'>
        <img src={carshop} alt="fiambreia" className={`rounded-2xl ${styles.hoverImage}`}/>
        </a>
      </div>
      </div>
      </div>

      
    </section>
  )
}
