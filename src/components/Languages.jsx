import React from 'react'
import styles from '../style'
import { languages } from './constants';


export const Languages = () => {
  return (
    <section>
        <div className='flex flex-col text-center mt-12 sm:mt-4 sm:flex sm:grid sm:grid-cols-5 sm:text-center sm:justify-center sm:items-center'>
            <div className='sm:mt-12 sm:col-start-3'>
                <span className= {`${styles.primaryText}`} id='languages'>
                Languages
                </span>
                <br />
                <span className={`${styles.secondaryText}`}>
                    and tools
                </span>
            </div>

            <div className='mt-8 sm:col-start-1 sm:col-span-3 sm:mt-14'>
                <div className='grid grid-cols-4 flex justify-items-center'>
                    {languages.map((foto) => (
                        <img src={foto.imagen} alt="foto" className='w-[60px] my-2' key={foto.id}/>
                    ))}
                </div>
            </div>

            <div className='flex sm:flex sm:col-start-4 sm:col-span-2'>
                <span className='text-primary text-xl mt-6 leading-loose mx-4 font-semibold sm:text-primary sm:text-xl sm:mt-6 sm:leading-loose sm:my-4 sm:mt-12 sm:px-12 sm:pt-12 sm:text-center sm:font-semibold'>
                These are the design tools and languages ​​that I know.
                In the programming area, I prefer to work with react, but I am willing to learn and use the framework that is assigned to me.
                In the design area I work with AdobeXD, Figma together with editing programs such as Illustrator and Photoshop.
                </span>
            </div>
        </div>
    </section>
  )
}
