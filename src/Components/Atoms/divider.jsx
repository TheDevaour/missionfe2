import React from 'react'

const divider = () => {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="flex-1 border-t border-input-default"></div>
      <span className="px-4 text-textDark-Tertiary">atau</span>
      <div className="flex-1 border-t border-input-default"></div>
    </div>
    // <div className='text-textDark-Tertiary '>
    //   <span>Atau</span>
    // </div>
  )
}

export default divider
