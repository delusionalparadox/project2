
import { useRef } from 'react'
import App from './App'
import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Nav = ({mousefn1,mousefn2}) => {
  const progress= useRef(null);
  useGSAP(()=>{
    gsap.from("#p1 ",{
      value:0,
      duration:2,
      ease:'power2.out',
      scrollTrigger:{
        trigger:'#p1',
        
       scroller:"body",
       
      }
      
    })

    gsap.from("#p2 ",{
      value:0,
      duration:2,
      ease:'power2.out',
      scrollTrigger:{
        trigger:'#p2',
        
       scroller:"body",
       
      }
      
    })
    gsap.from("#p3 ",{
      value:0,
      duration:2,
      ease:'power2.out',
      scrollTrigger:{
        trigger:'#p3',
        
       scroller:"body",
       
      }
      
    })
    gsap.from("#p4 ",{
      value:0,
      duration:2,
      ease:'power2.out',
      scrollTrigger:{
        trigger:'#p4',
        
       scroller:"body",
       
      }
      
    })
    gsap.to("#cardpin1 ",{
      transform:"translateX(-200%)",
      zIndex:"10",
      cursor:"default",
      ease:"linear",
      backgroundColor:"transparent",
      
      scrollTrigger:{
        trigger:'#cardpin1 ',
        scroller:"body",
        scrub:2,
      start:"top 0%",
      end:"top -100%",
       pin:true,
       
      }
      
    })

    gsap.to("#photo1 ",{
      transform:"translateX(-200%)",
      zIndex:"10",
      cursor:"default",
      ease:"linear",
      backgroundColor:"transparent",
      
      scrollTrigger:{
        trigger:'#photo1 ',
        scroller:"body",
        scrub:2,
      start:"top 0%",
      end:"top -100%",
       pin:true,
       
      }
      
    })

  })
  
  

  
  return (<div className='flex flex-col'>
    <div><App /></div>
    <div className="cardpin flex bg-black m-10  cursor-default" id='cardpin1'>
      <div className="1">
      <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">ANIME</h2>
    <p>les go art work</p>
  </div>
  <figure>
    <img
      src="https://tse2.mm.bing.net/th?id=OIP.gEUuvSuSV1fiuTI_frZINwHaEo&pid=Api&P=0&h=220"
      alt="Shoes" />
  </figure>
</div>
      </div>
      <div className="2"><div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
  </div>
  <figure>
    <img
      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210206185509/Top-7-Interesting-Blockchain-Project-Ideas-for-Beginners.png"
      alt="Shoes" />
  </figure>
</div></div>
<div className="3"><div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
  </div>
  <figure>
    <img
      src="https://blockchain.oodles.io/wp-content/uploads/1-5.jpg"
      alt="Shoes" />
  </figure>
</div></div>
<div className="1">
      <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
  </div>
  <figure>
    <img
      src="https://tse2.mm.bing.net/th?id=OIP.gEUuvSuSV1fiuTI_frZINwHaEo&pid=Api&P=0&h=220"
      alt="Shoes" />
  </figure>
</div>
      </div>
      <div className="2"><div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
  </div>
  <figure>
    <img
      src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210206185509/Top-7-Interesting-Blockchain-Project-Ideas-for-Beginners.png"
      alt="Shoes" />
  </figure>
</div></div>
<div className="3"><div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p></p>
  </div>
  <figure>
    <img
      src="https://blockchain.oodles.io/wp-content/uploads/1-5.jpg"
      alt="Shoes" />
  </figure>
</div></div>
    </div>
  <div className='bg-zinc-900 cursor-default p-10 z-40' >
    <div className="skils font-sans  text-slate-100 text-2xl font-bold flex justify-center m-12">
      <div>SKILLS</div>
    </div>
<div className='1st flex justify-between  ' id='col1'>
<div className="1st"><div className=' text-teal-50'>70% in DSA</div>           
<progress id='p1'  className="progress progress-secondary w-56" value={70} max="100"></progress>
</div>
<div className="1st"><div className=' text-teal-50'>50% in REACT</div>           
<progress id='p2' className="progress progress-success w-56" value="50" max="100"></progress>
</div>
<div className="1st"><div className=' text-teal-50'>70% in JS</div>           
<progress id='p3' ref={progress}className="progress progress-error w-56" value="70" max="100"></progress>
</div>


</div>
<div className='2nd p-1 flex justify-center'>
<div className="1st"><div className=' text-teal-50 pt-3'>70% in NODEJS</div>  <br className='c1' />         
<progress id="p4" className="progress progress-error w-56" value="70" max="100"></progress>
</div>


</div>


   

    

  
    </div>

    <div className="price flex ">
      <div className="photo1 cursor-default flex" id='photo1'>
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <img src="https://images.pexels.com/photos/1038935/pexels-photo-1038935.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      </div>
    </div>

    <div className="textanimate">
      
    </div>

    <div className="footer bg-stone-600 p-40 cursor-default z-30">
         <div className='flex justify-start p-3 items-center flex-col'>
         <div className='text-red-400 font-bold'>Contact</div>
         <div className='text-slate-50 font-bold text-2xl'>Get in touch!</div>
         <div className="form bg-transparent">
           <input type="text" placeholder="Name" className='my-9 p-1 rounded-lg'/>
           <br />
           <input type="email" placeholder="Email" className='my-9 p-1 rounded-lg'/>
           <br />
           <input type="text" placeholder="Subject" className='my-9 p-1 rounded-lg'/>
           <br />
           <textarea placeholder="Message" className='my-9 p-1 rounded-lg' />
           <br />

           <button className='my-9 bg-orange-500 text-teal-50 font-bold text-1xl p-2 rounded-lg'>Submit</button>
         </div>
         </div>
    </div>

    <div className="footer2 bg-black p-3">
      <div className='text-white font-bold text-1xl'>@Dhruv Upadhyaya 2024</div>
      
    </div>

    
    </div>
  )
}

export default Nav
