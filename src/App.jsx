import React from 'react'
// import { Navbar} from './components/Navbar'
import { Hero } from './components/Hero'
import { Me } from './components/Me'
import { Portfolio } from './components/Portfolio'
import { Languages } from './components/Languages'
// import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div>
      {/* <div>
        <div>
          <Navbar/>
        </div>
      </div> */}

      <div>
        <div>
          <Hero/>
        </div>
      </div>

      <div>
        <div>
          <Me/>
        </div>
      </div>

      <div>
        <div>
          <Portfolio/>
        </div>
      </div>

      <div>
        <div>
          <Languages/>
        </div>
      </div>

      {/* <div>
        <div>
          <Footer/>
        </div>
      </div> */}


    </div>
  )
}
