import React from 'react'
import Navbar from '../Components/Organisems/navbar.jsx'
import Formlogin from '../Components/Molecules/formlogin.jsx'
const login = () => {
  return (
    <main>
        <body className='bg-base-default'>  
        <Navbar />
        <div className='flex justify-center items-center h-screen'>
        <Formlogin />
          </div>
    
    </body>
    </main>
  )
}

export default login
