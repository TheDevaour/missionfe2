import React from 'react'
import Googlebuttondaftar from '../Atoms/googlebuttondaftar'
import Divider from '../Atoms/divider'
import Bendera from '../../assets/images/Logobenderaindo.svg'
const Formregister = () => {
  return (
   <section className='flex justify-center'>
    
    <div className='w-2xl border bg-textLight-primary p-14 rounded border-other-border mt-20'>
        <h3 className='text-center text-textDark-primary font-semibold'>Pendaftaran Akun</h3>
        <h6 className='text-center m-0 text-textDark-secondary'>Yuk, daftarkan akunmu sekarang juga!</h6>
        
        <div className='mt-10'>
            <p>Nama Lengkap<span className='text-tertiary-default ml-0'>*</span></p>
                <input type="namalengkap" id='namalengkap' className='w-full h-12 mb-6 border rounded-xl border-input-default' />

            <p>E-Mail<span className='text-tertiary-default ml-0'>*</span></p>
                <input type="email" id='email' className='w-full h-12 mb-6 border rounded-xl border-input-default'/>
            
            <label htmlFor="nohp">No.HP<span className='text-tertiary-default ml-0'>*</span></label><br />
            <div className='flex justify-between'>
            {/* <img src={Bendera} alt='benderaindo' className='bg-no-repeat bg-cover w-8 h-8 '/> */}
            <select name="indo" id="indo" className=' w-40 h-12 mb-6 border rounded-xl border-input-default cursor-pointer' > <option value="+62">+62</option></select>
            <input type="text" id='' className='w-95 h-12 mb-6 border rounded-xl border-input-default' />
            </div>

            <p>Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
                <input type="password" id='katasandi' className='w-full h-12 mb-6 border rounded-xl border-input-default'/>

            <p>Konfirmasi Kata Sandi <span className='text-tertiary-default ml-0'>*</span></p>
                <input type="password" id='konfirmasikatasandi' className='w-full h-12 mb-6 border rounded-xl border-input-default'/>


            <p className='text-right font-medium text-textdark-tertiary cursor-pointer' >Lupa Password?</p>

            <button className='bg-primary-default text-textLight-primary w-full h-12 rounded-xl my-4 cursor-pointer font-bold'>
                Daftar
            </button>

            <button className='bg-primary-100 text-primary-default w-full h-12 rounded-xl mt-0 mb-6 cursor-pointer font-bold'>
                Masuk
            </button>

            <Divider />
            <Googlebuttondaftar />

        </div>
    </div>
   </section>
  )
}

export default Formregister
