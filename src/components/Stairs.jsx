import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";


const Stairs = ({children}) => {
    const stairsDiv = useRef(null);
    const pathname = useLocation().pathname;
    const appRef = useRef(null);
    
    

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.to(stairsDiv.current,{
      display:"block",
      delay:-0.4,
    })
    

    tl.from(".stairs",{
      height:0,
      stagger:{
        amount:-0.2,
    },
    duration:0.2,
      
  })

    tl.from(appRef.current,{
      opacity:0,
      delay:0.1,
      
    })

    tl.to(".stairs",{
      y:"100%",
      duration:0.3 ,
      stagger:{
        amount:-0.2,
      },
      
    })

    

    tl.to(stairsDiv.current,{
      display:"none"
    })

    tl.set(".stairs",{
      y:0,
      
    })

    
    
},[pathname])

console.log(children)
    

  return (
    <div>
        <div ref={stairsDiv}  className='h-screen fixed w-screen z-10'>
        
          <div  className=' h-screen fixed w-screen z-10  flex'>
            <div className='stairs h-full w-1/6 bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
            <div className='stairs h-full w-1/6  bg-black'></div>
          </div>
        
        </div>
        <div ref={appRef}>{children}</div>
    </div>
)}

export default Stairs;