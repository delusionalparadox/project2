import { useEffect, useRef } from 'react';
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Expanded = ({mousefn1,mousefn2,toggle}) => {

    const menu=useRef();
    const tl=useRef();
    const toggle1=toggle;
    
    

    useGSAP(()=>{
        tl.current=gsap.timeline({paused:true})
        tl.current.to(menu.current, {top:0,
            duration:0.7,
        })

    },[])

    useGSAP(()=>{
        toggle1? tl.current.play():tl.current.reverse()
    },[toggle1])
  return (
    <div className="expanded" ref={menu}>
        
        <ul className='navlinks2'>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#home">Home</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#about">Portfolio</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#projects">Skills</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#contact">Price</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#contact">Contact</a></li>
        </ul>
  
    </div>
  )
}

export default Expanded;