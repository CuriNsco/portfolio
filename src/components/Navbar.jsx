import React from 'react'
import {navLinks} from './constants/index'
import styles from '../style'

export const Navbar = () => {
  return (

    <div className={`${styles.navbar}`}>
        <ul className='flex mr-20'>
            {navLinks.map((nav) =>(
              <li key={nav.id}
              className='flex'>
                <a href={`#${nav.id}`}
                className='flex px-2 font-roboto text-md px-4 text-[#0d2f3f] font-[550] mx-2 my-4'>{nav.title}</a>
              </li>
            ))}
        </ul>
        </div>
  )
}
