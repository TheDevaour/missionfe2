import React from 'react'
import Bgannouncement from '../../assets/images/announcement.svg'
const hero = () => {
  return (
    <section className='flex justify-center items-center'>

     <div className='w-3/5 mt-30 border rounded-2xl border-other-border text-center relative overflow-hidden shadow-lg group bg-black/70 '>
       
        <div className='absolute inset-0 bg-center bg-cover'>
        <img src={Bgannouncement} alt="announcement"/>
        </div>

        <div className='relative z-10 p-6 bg-black/70 bg-center bg-cover'>
        <h3 className='font-bold poppins text-textLight-primary text-center'>Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!</h3>
        <p className='font-bold text-textLight-primary my-2 text-center'>Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.</p>
        <button className=' bg-primary-default text-textLight-primary w-100 h-12 rounded-xl my-4 cursor-pointer font-bold'>Temukan Video Course untuk Dipelajari!</button>
        </div>

     </div>

    </section>
    
  )
}

export default hero