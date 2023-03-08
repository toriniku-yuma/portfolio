import { useState } from 'react'
import About from './about'
import reactLogo from './assets/react.svg'

function App() {
  const menulist = ["about","works"]
  return (
    <div>
      <div className='flex justify-between'>
        <div className='text-9xl'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-end'>
          {menulist.map((value,index)=>{
            return(
              <a key={index}>
              <div className=" text-lg mx-3">{value}</div>
              </a>
            )
          })}
        </div>
      </div>
      <About/>
    </div>
  )
}

export default App
