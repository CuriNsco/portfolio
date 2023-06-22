import React from 'react'
import styles from '../style'
import { information } from './constants'
import Script from 'react'

export const Footer = () => {
  return (
    <section>
        <div className='bg-[#f8f7f1] grid grid-cols-3 mt-12'>
            <div className='flex flex-col text-start items-start col-span-2 ml-12'>
                <span className={`pb-32 mt-20 ml-12 ${styles.primaryText}`}>Let's make something <br/>amazing together.</span>
            </div>
            
            <div className='col-start-1 col-span-2 text-start mb-12 ml-12'>
                <span className={`mt-20 ml-12 ${styles.primaryText}`}>Start by <a href="mailto:curiagus99@gmail.com" className='text-[#ffa500] underline font-semibold'>saiying hi</a></span>
            </div>

            <div className='col-start-3 row-start-1 row-span-2 mt-20 ml-12'>
              <span className={`text-2xl font-semibold text-[#0d2f3f]`}>
                Information
              </span>
            <div>
                <ul>
                  {information.map((list) => (
                    <li className='pt-8 text-[#0d2f3f'>
                     <a href={list.id} className='text-xl'>{list.title}</a>
                    </li>
                  ))}
                </ul>
            </div>
            </div>
        </div>
    </section>
  )
}
