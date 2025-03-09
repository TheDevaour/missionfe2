import React from 'react'
import Navbar from '../Components/Organisems/navbar'
import Formregister from '../Components/Molecules/formregister'
const registers = () => {
  return (
   
    <main>
        <body className='bg-base-default'>
            <Navbar />

               <div className='flex justify-center items-center h-screen'>

               <Formregister />
              
                </div>
        </body>

    </main>
  )
}

export default registers
