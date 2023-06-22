import React from 'react'
import {foto,unclogoo,mundose,logofcefyn} from "../assets";
import styles from '../style'


export const Hero = () => {
  return (
    <section>
        <div className={`grid grid-cols-3 grid-rows-1 bg-[#f8f7f1] sm:bg-[#f8f7f1] sm:grid sm:grid-cols-3`}>
            <div className='text-center flex flex-col justify-between col-span-3 sm:col-span-1 sm:bg-[#f8f7f1] sm:flex sm:flex-col sm:text-center sm:items-center'>

                <span className={`mt-20 sm:pb-32 sm:mt-20 sm:ml-12 ${styles.primaryText}`}>Hey there,<br/> I'm Agustin</span>

                <span className='hidden sm:text-xl sm:font-roboto sm:text-start sm:text-yellow-500 sm:pl-12 sm:font-semibold'>curiagus99@gmail.com</span>

            </div>


            <div className='flex flex-col items-center text-center col-start-1 row-start-3 col-span-3 sm:col-start-3 sm:row-start-1 sm:text-center sm:items-center sm:flex sm:flex-col'>

                <span className='text-2xl text-[#0d2f3f] font-roboto font-semibold px-8 py-8 sm:text-2xl sm:font-roboto sm:pb-32 sm:px-8 sm:mt-20 sm:text-[#0d2f3f] sm:font-semibold'>I design beautiful simple things, And I love what I do</span>

                <span className='text-2xl text-[#0d2f3f] font-roboto font-semibold py-8 sm:text-xl sm:font-roboto sm:text-[#0d2f3f] sm:font-semi'>FULL STACK DEVELOPER <br/> CERTIFIED</span>

                <div className='flex flex-row gap-2 items-center px-4 mb-12 sm:flex sm:flew-row sm:gap-2 sm:pt-4 sm:pr-4'>

                <img src={unclogoo} alt="unc" className='w-[1000px] h-[50px] sm:w-[150px] sm:h-[60px]'/>

                <img src={logofcefyn} alt="https://agrimensorescordoba.org.ar/wp-content/uploads/logo-fcefyn.png" className='w-[1000px] h-[50px] sm:w-[150px] sm:h-[60px]'/>

                <img src={mundose} alt="mundose" className='w-[1000px] h-[50px] sm:w-[150px] sm:h-[60px]' />

                </div>
            </div>

        <div className='row-start-2 col-span-3 mx-4 sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex sm:justify-center'>
            <img src={foto} alt="foto perfil" className='sm:w-[400px] sm:h-[420px]' />
        </div>

        </div> 
    </section>
    
  )
}