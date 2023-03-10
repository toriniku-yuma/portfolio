import About from './About'
import Works from './Works'

function App() {
  const menulist = ["About","Works"]
  return (
    <div>
      <div className='flex justify-between fixed bg-base-100 z-10 w-full top-0 left-0'>
        <div className='md:text-9xl text-5xl font-bold drop-shadow'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-end md:right-[10%] relative'>
          {menulist.map((value,index)=>{
            return(
              <a key={index} href={`#${value}`}>
              <div className=" md:text-lg md:mx-3 mx-2">{value}</div>
              </a>
            )
          })}
        </div>
      </div>
      <div className=' md:h-[120px] h-[48px]' id='About'></div>
      <About/>
      <div className=' h-40'></div>
      <div className=' md:h-[120px] h-[48px]' id='Works'></div>
      <Works/>
    </div>
  )
}

export default App
