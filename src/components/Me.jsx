import React from 'react'
import styles from '../style'
import { certificado } from '../assets'

export const Me = () => {
  return (
    <section>
        <div className='text-center mt-12 sm:bg-[#ffffff] sm:grid sm:grid-cols-2 sm:text-start sm:justify-items-center'>

            <a className={`${styles.primaryText} ${styles.animationUp} sm:col-start-2 sm:mt-12`} id='about'>About me</a>

            <div className={`${styles.animationLeft} mx-4 my-8 sm:col-start-1`}>

                <img src={certificado} alt="certificado" className='rounded rounded-2xl sm:w-[490px] sm:h-[360px] sm:mb-20 sm:rounded sm:rounded-xl'/>

            </div>
            <div className= {`${styles.animationRight} mx-4 my-12 text-center sm:col-start-2 sm:text-center sm:mt-12 sm:my-4`}>
              <span className='text-xl text-primary leading-loose font-semibold px-4 text-start sm:text-primary sm:text-xl sm:col-start-2 sm:mt-6 sm:leading-loose sm:pt-12 sm:font-semibold '>
                  I am a full stack developer graduated in April 2022, having completed 212 hours of study at one of the most important universities in Argentina and Latam, in collaboration with MundosE IT school.
                  In the FS area, I prefer front end development, which I have been studying and using since 2020.
                  I am also studying UX/UI design to add experience and professionalism to my knowledge as a front end developer.
              </span>
            </div>

        </div>
    </section>
  )
}
