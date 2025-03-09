import React from 'react'
import Googlelogo from '../../assets/images/logos_google-icon.svg'
const googlebutton = () => {
  return (
<button className='flex border bg-textLight-primary border-input-default w-full h-12 rounded-xl justify-center items-center gap-2 cursor-pointer mt-6'>
<img src={Googlelogo} alt="logo google" className='w-6 h-6'/>
  Masuk Dengan Google
</button>
  )
}

export default googlebutton
