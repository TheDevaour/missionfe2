import React from 'react'

const navbox = () => {
  return (
        <div className='flex m-0 py-10 gap-8 '>
            <a href="#" class="semuakelas" className='text-tertiary-default font-semibold cursor-pointer border-b-4 border-solid rounded  border-tertiary-default '>Semua Kelas</a>
            <a href="#" class="tabs" className='text-textDark-secondary font-semibold cursor-pointer'>Pemasaran</a>
            <a href="#" class="tabs" className='text-textDark-secondary font-semibold cursor-pointer'>Desain</a>
            <a href="#" class="tabs" className='text-textDark-secondary font-semibold cursor-pointer'>Pengembangan Diri</a>
            <a href="#" class="tabs" className='text-textDark-secondary font-semibold cursor-pointer'>Bisnis</a>
        </div>
  )
}

export default navbox
