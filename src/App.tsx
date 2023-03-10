import About from './About'
import Works from './Works'

function App() {
  const menulist = ["About","Works"]
  return (
    <div>
      <div className='flex justify-between fixed bg-base-100 z-10 w-full top-0 left-0'>
        <div className='md:text-9xl text-5xl font-bold drop-shadow'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-end md:right-[10%] right-2 relative'>
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
      <div className=' h-20'></div>
      <div className=' flex flex-col justify-center items-center bg-base-200'>
        <div className=' h-10'></div>
        {menulist.map((value,index)=>{
          return(
            <a href={`#${value}`} key={index} className=" m-3">{value}</a>
          )
        })}
        <div className=' h-10'></div>
      </div>
    </div>
  )
}

export default App
