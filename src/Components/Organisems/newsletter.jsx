import React from 'react'
import Bgnewsletter from '../../assets/images/newsletter.svg'

const newsletter = () => {
  return (
           <section className='flex justify-center items-center'>
      
      <div className='w-3/5 border rounded-2xl border-other-border text-center relative overflow-hidden shadow-lg group  bg-black/70 '>
        
         <div className='absolute inset-0 bg-center bg-cover'>
         <img src={Bgnewsletter} alt="announcement"/>
         </div>
 
         <div className='flex-col item-center  relative z-10 p-6 bg-black/70 bg-center bg-cover'>
          <h6 className='font-bold poppins text-textLight-primary text-center'>NEWSLETTER</h6>
         <h3 className='font-bold poppins text-textLight-primary text-center'>Mau Belajar Lebih Banyak?</h3>
         <p className='font-normal text-textLight-primary my-2 text-center'>Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id</p>
         
        <div className='relative inline-flex rounded border-textLight-primary'>
          <input type="input" id='' placeholder='Masukkan Emailmu' className='w-3/5 rounded-lg py-6 pl-8 pr-2 font-bold text-input-primary border-white border-solid' />
          <button type='submit' id='' className='font-bold text-button-default  cursor-pointer'>Subscribe</button>
        </div>    

         </div>
        
        </div>
 
     </section>

  )
}

export default newsletter
