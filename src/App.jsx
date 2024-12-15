

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css'
import { useEffect, useRef, useState } from 'react';
import Nav from './nav';
import Expanded from './expanded';
import Card1 from './card1';
import { IoIosSettings } from "react-icons/io";

function App() {
  const cursorref=useRef();
  
  const [menuclicked,setmenuclicked]=useState(false);

  function handleclick(){
    setmenuclicked(!menuclicked);
    
    
  }

  

 

  useGSAP(
    () => {
      const mousefn=(e)=>{
        const {clientX, clientY} = e;
        gsap.to(cursorref.current,{
          x:clientX-1.5,
          y:clientY-1.5,
          ease:"power4.out",
          delay:0,
          duration: 1,
          
        });
      }
        window.addEventListener('mousemove',mousefn)

        return () => window.removeEventListener('mousemove', mousefn);
    },
    []
); // <
  const mousefn1=()=>{gsap.to(".cursor",{scale:7,
    ease:"power4.out",
    delay:0,
    duration: 1,

   })}

   const mousefn2=()=>{gsap.to(".cursor",{scale:1,
    ease:"power4.out",
    delay:0,
    duration: 1,

   })}

  useGSAP(()=>{
    gsap.from(".settings",{
      rotate:'+=360',
      duration:1,
      delay:1,
      repeat:-1,
      ease:'linear'
    })
   
  })

 
  
  return (
    <>
    
    
      <main>
        <Expanded mousefn1={mousefn1} mousefn2={mousefn2} toggle={menuclicked}/>
        <div ref={cursorref} className='cursor' 
      ></div>


      <div className="setting" style={{zIndex:"70"}}>
      <IoIosSettings className='settings' onMouseEnter={mousefn1} onMouseLeave={mousefn2}/>
      </div>



<div className="navbar">
        <h1 className='logo' onMouseEnter={mousefn1} onMouseLeave={mousefn2}>KURA</h1>
        <ul className='navlinks'>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#home">Home</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#about">Portfolio</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#projects">Skills</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#contact">Price</a></li>
          <li><a onMouseEnter={mousefn1} onMouseLeave={mousefn2} href="#contact">Contact</a></li>
        </ul>

       
  <div id="metaMenu" href="#" onMouseEnter={mousefn1} onMouseLeave={mousefn2} onClick={handleclick}>&#9776;</div>

  
    </div>
    

   
    <Card1 mousefn1={mousefn1} mousefn2={mousefn2}/>
  


      {/* <h1 className="h1"onMouseEnter={mousefn1 }onMouseLeave={mousefn2 } >abdvjbasklc</h1> */}
      </main>

      

   </>
   
  );
}

export default App
