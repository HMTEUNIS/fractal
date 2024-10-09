import './App.css';
import * as ReactDOM from "react-dom/client";
import { HashRouter , Routes, Route, NavLink } from 'react-router-dom';
import {useState, createContext} from 'react'
import React from 'react';
import ProposeContainer from './ProposeContainer.js'
import Home from './Home.js'
import News from './News.js';
import Register from './Register.js';
import Fracs from './fracs.png'
  function App() {
   const [i, setI] =useState(0)
   const [motion, setMotion] = useState(true)
  const [email, setEmail] = useState('')
    return (
      <div id='god' style={{backgroundImage: `url(${Fracs})`}}>
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
       <NavLink to='/register'> <span>Register</span></NavLink>        </div>
 
        </div>
   
   <div id='content_container'>
        <Routes>
        <Route path="" >
          <Route index path="" element={<Home i={i} motion={motion} setI={setI}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/submit_class" element={<ProposeContainer email={email} />} />
          <Route path="/register" element={<Register setEmail={setEmail} />} />
          </Route>
        </Routes>

      </div>   
      </HashRouter>

      </div>
      </div>
    );
  }


export default App;
