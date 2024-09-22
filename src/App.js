import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import { HashRouter , Routes, Route, NavLink } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import React from 'react';
import Part from './Part.tsx';
import ProposeContainer from './ProposeContainer.js'


function Home({i, setI, motion}){
  useEffect(() => { 
setI(i+1)    
  }, [])
    

  return(
    <div id="home_page">

      <div>
        { i > 1 || !motion
        
        
        ?
      <span>
<span>FRACTAL is a dream of worldmaking through ongoing processes of joyful learning,</span>
<span>a pluripotent seed for queer and liberatory futures,</span>
<span>a portal for summoning desirable worlds.</span>
<br/>
<br/>
<br/>
<span>Want to come play with us?</span>
      </span>
      
      

      
      
      
      
      :
<Typewriter
options={{
loop: false,
delay: 40
}}
  onInit={(typewriter) => {
    typewriter
    .typeString('FRACTAL is a dream of worldmaking through ongoing processes of joyful learning,')
      .pauseFor(250)
      .typeString('<br/> a pluripotent seed for queer and liberatory futures,')
      .pauseFor(250)
      .typeString('<br/> a portal for summoning desirable worlds.')
      .typeString('<br/> <br/> <br/> Want to come play with us?')
      
      
      .start();
  }}
/>
}
      </div>
        </div>
  )
}


function News(){
  return(
    <>
    <div>Hang Tight! im thinking here can be announcments, video flyers, sign up for mailing list type stuff?</div>
  
  

  </>



)}
function Register(){


  return(
    <div>another form here for registering and logistical stuff</div>
  )
}
  function App() {
   const [i, setI] =useState(0)
   const [motion, setMotion] = useState(true)
    return (
      <div id='god'>
            {motion ?    <Part /> : <span style={{height: "103202"}} />}

               <div onClick={()=>setMotion(!motion)}id="accessability_menu">
               <span>{motion ? "disable" : "enable"}</span>
        <span>animation</span>
        </div>
      <div id="main_cont">
      <HashRouter basename="/">   
      
           <div id='top_bar'>
          <span id='page_title'>
{motion ?
<>
          <img className='old_logo_comp'src='https://media2.giphy.com/media/fwnnWvYviPiKt6ntai/giphy.gif' />
          <img className='old_logo_comp'src='https://media4.giphy.com/media/KZqzQhRNJNpaojzwXG/giphy.gif' />
          <img className='old_logo_comp'src='https://media1.giphy.com/media/j0jFCVOM5sPhIr5H9P/giphy.gif' />
          <img className='old_logo_comp'src='https://media2.giphy.com/media/hW3kIsAptt2RXANKuv/giphy.gif' />
          <img className='old_logo_comp'src='https://media4.giphy.com/media/eNRLJfZiILZweSXWwW/giphy.gif' />
          <img className='old_logo_comp'src='https://media1.giphy.com/media/j0jFCVOM5sPhIr5H9P/giphy.gif' />
          <img className='old_logo_comp'src='https://media2.giphy.com/media/LmT7v2LXaQoSIb27gm/giphy.gif' />
</>
:
<span id='accessable_title'>F.R.A.C.T.A.L.</span>
  }
<br />
<br />

</span>
        <div id="top_nav">
        
       <NavLink to=''> <span>About</span> </NavLink >
       <NavLink to='/news'> <span>News</span></NavLink>
       <NavLink to='/register'> <span>Logistics</span></NavLink>

      <NavLink to='/submit_class'> <span>Apply</span></NavLink>
        </div>
 
        </div>
   
   <div id='content_container'>
        <Routes>
        <Route path="" >
          <Route index path="/#" element={<Home i={i} motion={motion} setI={setI}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/submit_class" element={<ProposeContainer />} />
          <Route path="/register" element={<Register />} />
          </Route>
        </Routes>

      </div>   
      </HashRouter>

      </div>
      </div>
    );
  }


export default App;
