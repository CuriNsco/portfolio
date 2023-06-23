import React from 'react'
import styles from '../style'
import { information } from './constants'


export const Footer = () => {
  return (
    <section>
        <div className='bg-[#f8f7f1] mt-12 sm:grid sm:grid-cols-3 sm:mt-12'>
            <div className='flex flex-col text-start mx-12 py-12  sm:flex sm:flex-col sm:text-start sm:items-start sm:col-span-2 sm:ml-12'>
                <span className={`sm:pb-32 sm:mt-20 sm:ml-12 ${styles.primaryText}`}>Let's make something <br/>amazing together.</span>
            </div>
            
            <div className='text-start mx-12 sm:col-start-1 sm:col-span-2 sm:text-start sm:mb-12 sm:ml-12'>
                <span className={`sm:mt-20 sm:ml-12 ${styles.primaryText}`}>Start by <a href="mailto:curiagus99@gmail.com" className='text-[#ffa500] underline font-semibold'>saiying hi</a></span>
            </div>

            <div className='invisible sm:visible sm:no-hidden sm:col-start-3 sm:row-start-1 sm:row-span-2 sm:mt-20 sm:ml-12'>
              <span className={`sm:text-2xl sm:font-semibold sm:text-[#0d2f3f]`}>
                Information
              </span>
            <div>
                <ul>
                  {information.map((list) => (
                    <li className='sm:pt-8 sm:text-[#0d2f3f]'>
                     <a href={list.id} className='sm:text-xl'>{list.title}</a>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}
