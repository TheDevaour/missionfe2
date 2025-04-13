import React from 'react'
import Logonav from '../../assets/images/Logo VideoBelajar.svg' 
const navbar = () => {
  return (
    <nav className='border-b-1 border-other-border bg-other-primaryBackground z-1500 fixed w-full'>
    <div className='flex h-20 ml-20 p-6 '>
    <img src={Logonav} alt="logo header" className='cursor-pointer'
      />
    </div>
    </nav>
  )
}

export default navbar
