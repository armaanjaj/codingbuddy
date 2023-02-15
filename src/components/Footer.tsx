import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[10rem] bg-[#0f172a] text-white'>
      <div>{new Date().getFullYear()}&nbsp; CodingBuddy</div>
    </div>
  )
}

export default Footer
