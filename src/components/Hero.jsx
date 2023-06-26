import React from 'react'
import {foto,unclogoo,mundose,logofcefyn} from "../assets";
import styles from '../style'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export const Hero = () => {
  return (
    <section>
        <div className={`grid grid-cols-3 grid-rows-1 bg-[#f8f7f1] sm:flex sm:bg-[#f8f7f1] sm:grid sm:grid-cols-3`}>
            <div className='text-center flex flex-col justify-between col-span-3 sm:col-span-1 sm:bg-[#f8f7f1] sm:flex sm:flex-col sm:text-start sm:items-center sm:justify-center'>

                <span className={`${styles.animationLeft} mt-12 pb-12 sm:flex sm:mt-12 sm:ml-8 ${styles.primaryText}`}>Hey there,<br/> I'm Agustin</span>

                <span className={`${styles.animationLeft} invisible sm:visible sm:text-xl sm:font-roboto sm:text-start sm:text-yellow-500 sm:font-semibold`}>curiagus99@gmail.com</span>

            </div>


            <div className={` ${styles.animationRight} flex flex-col items-center text-center col-start-1 row-start-3 col-span-3 sm:col-start-3 sm:row-start-1 sm:text-center sm:items-center sm:flex sm:flex-col`}>

                <span className='text-2xl text-[#0d2f3f] mt-4 font-roboto font-medium px-8 py-8 sm:text-2xl sm:font-roboto sm:px-8 sm:mt-20 sm:text-[#0d2f3f] sm:font-semibold'>I design beautiful simple things, and I love what I do</span>

                <span className='text-2xl text-[#0d2f3f] font-roboto font-medium py-8 sm:text-xl sm:font-roboto sm:text-[#0d2f3f] sm:font-semibold'>FULL STACK DEVELOPER <br/> CERTIFIED</span>

                <div className='flex flex-row gap-2 items-center px-4 mb-12 sm:flex sm:flew-row sm:gap-2 sm:pt-4 sm:pr-4 sm:mb-4'>

                    <img src={unclogoo} alt="unc" className='w-[100px] h-[50px] sm:w-[150px] sm:h-[60px]'/>

                    <img src={logofcefyn} alt="https://agrimensorescordoba.org.ar/wp-content/uploads/logo-fcefyn.png" className='w-[100px] h-[50px] sm:w-[150px] sm:h-[60px]'/>

                    <img src={mundose} alt="mundose" className='w-[100px] h-[50px] sm:w-[150px] sm:h-[60px]' />

                </div>
            </div>

        <div className='row-start-2 col-span-3 mx-4 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex sm:justify-center'>
            <img src={foto} alt="foto perfil" className={`sm:w-[400px] sm:h-[420px] ${styles.animationUp}`} />
        </div>

        </div> 
    </section>
    
  )
}
