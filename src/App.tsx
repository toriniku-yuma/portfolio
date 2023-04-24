import { useEffect, useRef, useState } from 'react'
import About from './About'
import ThreeVRM from './ThreeVRM'
import Works from './Works'
import useWindowSize from './useWindowSize'
import { gsap } from 'gsap'

function App() {
  const menulist = ["About","Works"]
  const [width,height] = useWindowSize();
  const [scrollPositionCount,setScrollPositionCount] = useState<number>(0)
  const aboutAnimBool = useRef(true);
  const worksAnimBool = useRef(true);
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({behavior: "smooth"});
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const scrollPosition = window.pageYOffset;
      //setScrollPositionCount(scrollPosition);
      if(scrollPosition>=450&&aboutAnimBool.current){
        gsap.to("#aboutAnimation",{duration:2,opacity:1,ease:"power4.out"});
        aboutAnimBool.current = false;
      }
      if(scrollPosition>=1000&&worksAnimBool.current){
        gsap.to("#worksAnimation",{duration:2,opacity:1,ease:"power4.out"});
        worksAnimBool.current = false;
      }
  },{passive:true})
  },[])

  return (
    <div className='hidden-scrollbar'>
      <div id='hedder' className=' flex justify-between fixed bg-base-100 z-10 w-full -top-[140px] left-0'>
        <div className='lg:text-9xl md:text-7xl text-5xl font-bold drop-shadow'><span className='text-primary'>PORT</span><span className=' text-secondary'>FOLIO</span></div>
        <div className='flex items-center md:pr-10'>
          {menulist.map((value,index)=>{
            return(
              <button key={index} onClick={() => scrollToSection(value)} className="md:mx-5 mx-2 btn btn-lg">{value}</button>
            )
          })}
        </div>
      </div>
      <div className=' hidden fixed z-10 font-bold text-3xl'>{scrollPositionCount}</div>
      <ThreeVRM/>
      <div className=' ' style={{height:height}}></div>
      <div className=' md:h-[120px] h-[48px]' id='About'></div>
      <div id='aboutAnimation' className=' relative opacity-0'>
        <About/>
      </div>
      <div className=' h-40'></div>
      <div className=' md:h-[120px] h-[48px]' id='Works'></div>
      <div id='worksAnimation' className=' opacity-0'>
        <Works/>
      </div>
      
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
