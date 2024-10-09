import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect';

export default function Home({i, setI, motion}){
    useEffect(() => { 
  setI(i+1)    
    })
    return(
      <div id="home_page">
  
        <div>     
        <span>
        <span>FRACTAL is a dream of worldmaking through ongoing processes of joyful learning,</span>
        <span>a pluripotent seed for queer and liberatory futures,</span>
        <span>a portal for summoning desirable worlds.</span>
          <br/>
         <br/>
          <br/>
            <span>Want to come play with us?</span>
        </span>
        </div>
          </div>
    )
  }