import React from 'react'
import Googlebutton from '../Atoms/googlebutton'
import Divider from '../Atoms/divider'
const formlogin = () => {
  return (
   <section className='flex justify-center'>
    
    <div className='w-2xl border bg-textLight-primary p-14 rounded border-other-border'>
        <h3 className='text-center text-textDark-primary font-semibold'>Masuk ke Akun</h3>
        <h6 className='text-center m-0 text-textDark-secondary'>Yuk, lanjutin belajarmu di videobelajar.</h6>
        
        <div className='mt-10'>
            <p>E-Mail <span className='text-tertiary-default ml-0'>*</span></p>
                <input type="E-Mail" id='email' className='w-full h-12 mb-6 border rounded-xl border-input-default' />
            <p>Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
                <input type="Kata Sandi" id='katasandi' className='w-full h-12 mb-6 border rounded-xl border-input-default'/>
            <p className='text-right font-medium text-textdark-tertiary cursor-pointer' >Lupa Password?</p>

            <button className='bg-primary-default text-textLight-primary w-full h-12 rounded-xl my-4 cursor-pointer font-bold'>
                Masuk
            </button>

            <button className='bg-primary-100 text-primary-default w-full h-12 rounded-xl mt-0 mb-6 cursor-pointer font-bold'>
                Daftar
            </button>

            <Divider />
            <Googlebutton />

        </div>
    </div>
   </section>
  )
}

export default formlogin
