import About from './About'
import ThreeVRM from './ThreeVRM'
import Works from './Works'
import useWindowSize from './useWindowSize'

function App() {
  const menulist = ["About","Works"]
  const [width,height] = useWindowSize();
  return (
    <div className='hidden-scrollbar'>
      <div id='hedder' className=' flex justify-between fixed bg-base-100 z-10 w-full -top-[140px] left-0'>
        <div className='lg:text-9xl md:text-7xl text-5xl font-bold drop-shadow'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-center md:pr-10'>
          {menulist.map((value,index)=>{
            return(
              <a key={index} href={`#${value}`}>
              <div className="md:mx-5 mx-2 btn btn-lg">{value}</div>
              </a>
            )
          })}
        </div>
      </div>
      <ThreeVRM/>
      <div className=' ' style={{height:height}} id='About'></div>
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
