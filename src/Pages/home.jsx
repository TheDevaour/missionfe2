import React from 'react'
import Navbarhome from '../Components/Organisems/navbarhome.jsx'
import Formmenu from '../Components/Molecules/formmenu.jsx'
const home = () => {
  return (
    <main>
        <body className='bg-base-default'>  
        <Navbarhome />
        <div className='flex justify-center items-center'>
        <Formmenu />
          </div>
    
    </body>
    </main>
  )
}

export default home