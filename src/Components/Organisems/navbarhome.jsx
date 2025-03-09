import React from 'react'
import Logonav from '../../assets/images/Logo VideoBelajar.svg'
import Logoprofile from '../../assets/images/Avatar.svg'
const navbarhome = () => {
  return (
    <nav className='flex border-b-1 border-other-border bg-other-primaryBackground z-1500 fixed w-full'>
    <div className='flex h-20 ml-20 p-6 cursor-pointer'>
    <img src={Logonav} alt="logo header"
      />
    </div>
    </nav>
  )
}

export default navbarhome
