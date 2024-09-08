import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import { HashRouter , Routes, Route, NavLink } from 'react-router-dom';
import {useState, useRef, useEffect} from 'react'
import Typewriter from 'typewriter-effect';
import React from 'react';
import Part from './Part.tsx';
import emailjs from '@emailjs/browser';
function Home({i, setI}){
  useEffect(() => { 
setI(i+1)    
  }, [])
    

console.log("i",i)
  return(
    <div id="home_page">

      <div>
        { i > 1
        
        
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


function SubmitClass(){
const handleSubmit = (e) =>{

  e.preventDefault()

const tempPerms ={
  fac : {
    name: "",
    email: "",
    phone: "",
    bio: "",
    accomidations: "",
    staying: "",
    links: "",
    likes: "",
    ect: ""
  },
  cont : {
    title: "",
    type: "",
    takeaway: "",
    needs: "",
    location: "",
    time: "",
    size: ""
  }
}

  
  
  const formData = Array.from(e.target)
  formData.forEach((input) =>{
    if (tempPerms.fac[input.name] === ""){
      tempPerms.fac[input.name] = input.value
    }else{
      tempPerms.cont[input.name] = input.value
    }

    emailjs
    .send('service_tfem7t5', 'template_jnj7u3m', tempPerms, {publicKey : 'AHBkhOErAFk4Ao6F_', limitRate:{throttle: 0}}).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  })
}
const errors = {
  name : console.log("name eerror") 
}

  return(
    <div>
      <div>
     <p>This Fall we are gathering in Tovaangar, so called Los Angeles, from November 22-25th.</p> 
      <p>
      Weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology (and more!), for a moment of shared inquiry, co-creation, nourishment and to stir up good trouble.
We are seeking proposals from facilitators interested in joining us in our endevor. Be it a class, a workshop, a presntation, a collaboritive session, whatever makes sense for your vision, we want to provide you with a <i>container</i> to fill as you see fit.</p>

      </div>
      <div> 
        <form id='apply_to_teach'  onSubmit={handleSubmit}> 
           <div id='basic_info'>
        <label>Name: </label>
    
      <input type="text" name="name" required />
      {errors.name && <div classname="error">{errors.name}</div>}

      <label>Email: </label>
      <input type="text" name="email" required />
      {errors.email && <div classname="error">{errors.email}</div>}

      <label>Phone: </label>
      <input type="text" name="phone" required />
      {errors.phone && <div className="error">{errors.phone}</div>}
</div>
<div id='long_form_resp'>
      <label>Any internet links / portfolio / website / social media of your previous work you’d like to share?</label>
      <input placeholder="It's okay if not :)"name="web"  />
      {errors.web && <div className="error">{errors.web}</div>}
<br />

      <label>Facilitator Bio: </label>
     
      <textarea type="text" className='long_form'name="bio" placeholder='Feel free to add any information you’d like shared about yourself relevant to your container offering or favorite fruit.' />
      {errors.web && <div className="error">{errors.web}</div>}
      <br />

      <label>Any community support needs?</label>
      <textarea type="text" class='long_form' placeholder="Accommodations? Dietary restrictions? Allergies? Medical and Access support?"name="accomidations"  />
      {errors.accomidations && <div className="error">{errors.accomidations}</div>}


      <label>What are some aspects of group gatherings that sparked inspiration and excitement for you that you would like to see integrated?</label>
      <textarea type="text" class='long_form' placeholder="Bulletin board for spontaneous activities, collective cooking and meal sharing, evening programming, community radio, secret message mailboxes etc."name="likes"  />
      {errors.likes && <div className="error">{errors.likes}</div>}
      
      <label>Any thing else you'd like to share?</label>
      <textarea type="text" class='long_form' name="ect" />
      {errors.ect && <div className="error">{errors.ect}</div>}



      <label>Container Title + Summary</label>
      <textarea type="text" className='long_form' placeholder="Example: 'Transverse Portals' A course on navigating through and around the physical and mental barriers utilized and imposed by the security state. Making openings is an ancient technology for summoning and inducing flows both material and spiritual. How might we change our orientation to the world if we understand the inherent flaws of systems that prioritize security over collective wellbeing? How might the physical skill of lockpicking provide epistemic models for affecting systemic change?"name="title" required />
      {errors.title && <div className="error">{errors.title}</div>}
      <br />

      <label>Container type? How do you envision this container offering?</label>
      <textarea type="text" class='long_form' placeholder="We want to encourage facilitators to think expansively about their offerings, beyond a typical class or workshop, using Fractal as an opportunity to stretch your practice towards experimental ways of thinking and learning together. It’s cool/encouraged if it’s new for you too!
- Container possibilities include: class // workshop // secret mission // ritual // field trip // play date // etc"name="type" required />
      {errors.type && <div className="error">{errors.type}</div>}

      <br />

      <label>What activities will you facilitate and will there be any culminating projects? </label>
      <textarea type="text" class='long_form'placeholder="A share out, performance, a bracelet with your best friends name on it"name="takeaway" required />
      {errors.takeaway && <div className="error">{errors.takeaway}</div>}


      <label>Resources // supplies you would need? Would you bring any supplies?</label>
      <textarea type="text" class='long_form' placeholder="Electricity, Projector, Craft stuff, GIANT paper, 2000 gummy worms? "name="needs" required />
      {errors.needs && <div className="error">{errors.needs}</div>}

      <label>Location</label>
      <input type="text" placeholder="Indoor, outdoor, near water, in the dark?? We expect to host a majority of programming on-site, but are interested in including offsite field trips as well!"name="location" required />
      {errors.location && <div className="error">{errors.location}</div>}

      <label>What is the ideal length of time to hold your container?</label>
      <input type="text" placeholder="We will organize daily programming based on facilitator submissions, but expect to have multiple activities occurring throughout each day "name="time" required />
      {errors.time && <div className="error">{errors.time}</div>}

      <label>Is your container scalable for groups of different sizes? Is there an ideal group size or any size parameters?</label>
      <textarea type="text" class='long_form' placeholder="how many people we talking here?"name="size" required />
      {errors.size && <div className="error">{errors.size}</div>}


      <label>Are you interested / available in joining us for the full session?</label>
      <input type="text" placeholder="We expect to run Fractal as a group gathering from Friday, Nov 22-Monday, Nov 25. Please let us know if you are interested in joining for the full extent of programming."name="staying" />
      {errors.staying && <div className="error">{errors.staying}</div>}


</div>
          <button type='submit'>send it</button>
        </form>

      </div>




    </div>
  )
}

function News(){
  console.log("beep")

  return(
    <div>Hang Tight! im thinking here can be announcments, video flyers, sign up for mailing list type stuff?</div>
  )
}
function Register(){


  return(
    <div>another form here for registering and logistical stuff</div>
  )
}
  function App() {
   const [i, setI] =useState(0)
    return (
      <div id='god'>
        <Part />
      <div id="main_cont">
      <HashRouter basename="/">   
      
           <div id='top_bar'>
          <span id='page_title'>

          <img className='old_logo_comp'src='https://media2.giphy.com/media/fwnnWvYviPiKt6ntai/giphy.gif' />
          <img className='old_logo_comp'src='https://media4.giphy.com/media/KZqzQhRNJNpaojzwXG/giphy.gif' />
          <img className='old_logo_comp'src='https://media1.giphy.com/media/j0jFCVOM5sPhIr5H9P/giphy.gif' />
          <img className='old_logo_comp'src='https://media2.giphy.com/media/hW3kIsAptt2RXANKuv/giphy.gif' />
          <img className='old_logo_comp'src='https://media4.giphy.com/media/eNRLJfZiILZweSXWwW/giphy.gif' />
          <img className='old_logo_comp'src='https://media1.giphy.com/media/j0jFCVOM5sPhIr5H9P/giphy.gif' />
          <img className='old_logo_comp'src='https://media2.giphy.com/media/LmT7v2LXaQoSIb27gm/giphy.gif' />
<br />
<br />
</span>
        <div id="top_nav">
        
       <NavLink to='*'> <span>About</span> </NavLink >
       <NavLink to='/news'> <span>News</span></NavLink>
       <NavLink to='/register'> <span>Logistics</span></NavLink>

      <NavLink to='/submit_class'> <span>Apply</span></NavLink>
        </div>
        </div>
   
   <div id='content_container'>
        <Routes>
        <Route path="/" >
          <Route index path="*" element={<Home i={i} setI={setI}/>} />
          <Route path="/news" element={<News />} />
          <Route path="/submit_class" element={<SubmitClass />} />
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
