import React from 'react'
import {navLinks} from './constants/index'
import styles from '../style'
import { useState } from 'react'
import { close, menu } from '../assets'

export const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (

    <nav className={`${styles.navbar}`}>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) =>(
              <li key={nav.id}
              className={`cursor-pointer ${active=== nav.title ? 'text-[$0d2f3f]' : 'text-[$0d2f3f]'} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}` } onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}
                className='sm:flex sm:px-2 sm:font-roboto sm:text-md sm:px-4 sm:text-[#0d2f3f] sm:font-[550] sm:mx-2 sm:my-4'>{nav.title}</a>
              </li>
            ))}
        </ul>

        {/* tres lineas de la navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle(!toggle)}
        />

          {/* info de la navbar chica */}
              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-black absolute top-20 right-4 mx-4 my-2 min-w-[340px] rounded-xl sidebar z-10`}>
              <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-roboto font-semibold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-white"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
              </div>
              </div>

        </nav>
  )
}
