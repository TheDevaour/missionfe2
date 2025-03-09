import React from 'react'
import Navbarhome from '../Organisems/navbarhome'
import Hero from '../Organisems/hero'
import Cards from '../Atoms/cards'
import Footer from '../Organisems/footer'
import Newsletter from '../Organisems/newsletter'
const formmenu = () => {
  return (
    <body className='bg-base-default'>
    
    <Navbarhome />

     <div>
      <Hero />
      <Cards />
      <Newsletter />
     </div>

     <Footer />

    </body>
  )
}

export default formmenu