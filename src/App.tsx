import About from './About'
import Works from './Works'

function App() {
  const menulist = ["About","Works"]
  return (
    <div>
      <div className='flex justify-between fixed bg-base-100 z-10 w-full top-0 left-0'>
        <div className='md:text-9xl text-5xl font-bold drop-shadow'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-end right-[10%] relative'>
          {menulist.map((value,index)=>{
            return(
              <a key={index} href={`#${value}`}>
              <div className=" text-lg mx-3">{value}</div>
              </a>
            )
          })}
        </div>
      </div>
      <div className=' h-[120px]' id='About'></div>
      <About/>
      <div className=' h-40'></div>
      <div className=' h-[120px]' id='Works'></div>
      <Works/>
    </div>
  )
}

export default App
