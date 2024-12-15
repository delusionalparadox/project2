import "./index.css"
import myimage5 from './assets/my.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaArrowDown } from "react-icons/fa6";
import { useRef } from "react";


const Card1 = ({mousefn1,mousefn2}) => {
  const arrow=useRef();
  
  useGSAP(()=>{
   
   gsap.to("#arrow",{
    y:20,
    duration:1,
    repeat:-1,
    delay:1,
    ease:'linear',
    
   })
  },[])
  return (
    <div className="mainclass">
    <div className="left">
      <h2 className="h1" onMouseEnter={mousefn1} onMouseLeave={mousefn2}>Dhruv Upadhyaya</h2>
      <h1 className="text-stone-100 font-extrabold text-2xl mt-6">ASPIRING SOFTWARE DEVELOPER <br /> BASED ON INDIA</h1>
      <h3 className="my-5 text-white text-sm">Problem solver and full time learner | Software developer | Artist | Guitarist |</h3>
      <FaArrowDown className="text-white text-4xl my-9  hover:text-red-700 transition-colors" id="arrow" ref={arrow} onMouseEnter={mousefn1} onMouseLeave={mousefn2}/>
    </div>
    <div className="right">
    <div className='eventlogo' onMouseEnter={mousefn1} onMouseLeave={mousefn2}>
           <div className="image1"  > <img src={myimage5} alt="" className="image" /></div>
        </div>
    </div>
   </div>
  )
}

export default Card1