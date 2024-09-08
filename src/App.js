import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {useState, useCallback} from 'react'
import React from 'react';
function Home(){


  return(
    <div>FRACTAL is a dream of worldmaking through ongoing processes of joyful learning, a radical non-hierarchical collective study convergence for experimenting towards thriving futures, a pluripotent seed for queer and liberatory futures, a portal for summoning desirable worlds. We’re gathering in Tovaangar/so called Los Angeles from Nov 22-25th, weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology, for a moment of shared inquiry, cocreation, nourishment and to stir up good trouble. Want to come play with us?</div>
  )
}


function SubmitClass(){
const handleSubmit = () =>{
  console.log('here')
}
const errors = {
  name : console.log("name eerror") 
}

  return(
    <div>
      <div>
      This Fall we are gathering in Tovaangar, so called Los Angeles, from November 22-25th. Weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology (and more!), for a moment of shared inquiry, co-creation, nourishment and to stir up good trouble.
We are seeking proposals from facilitators interested in joining us in our endevor. Be it a class, a workshop, a presntation, a collaboritive session, whatever makes sense for your vision, we want to provide you with a <i>container</i> to inhabit.
      </div>
      <div> 
        <form onSubmit={handleSubmit}>
        <label>Name:</label>
      <input type="text" name="name" required />
      {errors.name && <div className="error">{errors.name}</div>}

      <label>Email:</label>
      <input type="text" name="email" required />
      {errors.email && <div className="error">{errors.email}</div>}

      <label>Phone #:</label>
      <input type="text" name="phone" required />
      {errors.phone && <div className="error">{errors.phone}</div>}

      <label>Any internet links / portfolio / website / social media of your previous work you’d like to share?</label>
      <input type="text" placeholder="It's okay if not :)"name="web"  />
      {errors.web && <div className="error">{errors.web}</div>}


      <label>Facilitator Bio </label>
      <input type="text" name="bio" placeholder='Feel free to add any information you’d like shared about yourself relevant to your container offering or favorite fruit.' />
      {errors.web && <div className="error">{errors.web}</div>}

      <label>Container Title + Summary</label>
      <input type="text" placeholder="Example: 'Transverse Portals' A course on navigating through and around the physical and mental barriers utilized and imposed by the security state. Making openings is an ancient technology for summoning and inducing flows both material and spiritual. How might we change our orientation to the world if we understand the inherent flaws of systems that prioritize security over collective wellbeing? How might the physical skill of lockpicking provide epistemic models for affecting systemic change?"name="title" required />
      {errors.title && <div className="error">{errors.title}</div>}


      <label>Container type? How do you envision this container offering?</label>
      <input type="text" placeholder="We want to encourage facilitators to think expansively about their offerings, beyond a typical class or workshop, using Fractal as an opportunity to stretch your practice towards experimental ways of thinking and learning together. It’s cool/encouraged if it’s new for you too!
- Container possibilities include: class // workshop // secret mission // ritual // field trip // play date // etc"name="type" required />
      {errors.type && <div className="error">{errors.type}</div>}


      <label>What activities will you facilitate and will there be any culminating projects? </label>
      <input type="text" placeholder="A share out, performance, a bracelet with your best friends name on it"name="takeaway" required />
      {errors.takeaway && <div className="error">{errors.takeaway}</div>}


      <label>Resources // supplies you would need? Would you bring any supplies?</label>
      <input type="text" placeholder="Electricity, Projector, Craft stuff, GIANT paper, 2000 gummy worms? "name="needs" required />
      {errors.needs && <div className="error">{errors.needs}</div>}

      <label>Location</label>
      <input type="text" placeholder="Indoor, outdoor, near water, in the dark?? We expect to host a majority of programming on-site, but are interested in including offsite field trips as well!"name="location" required />
      {errors.location && <div className="error">{errors.location}</div>}

      <label>What is the ideal length of time to hold your container?</label>
      <input type="text" placeholder="We will organize daily programming based on facilitator submissions, but expect to have multiple activities occurring throughout each day "name="time" required />
      {errors.time && <div className="error">{errors.time}</div>}

      <label>s your container scalable for groups of different sizes? Is there an ideal group size or any size parameters?</label>
      <input type="text" placeholder="how many people we talking here?"name="size" required />
      {errors.size && <div className="error">{errors.size}</div>}


      <label>Is your container scalable for groups of different sizes? Is there an ideal group size or any size parameters?</label>
      <input type="text" placeholder="how many people we talking here?"name="size" required />
      {errors.size && <div className="error">{errors.size}</div>}


      <label>Are you interested / available in joining us for the full session?</label>
      <input type="text" placeholder="We expect to run Fractal as a group gathering from Friday, Nov 22-Monday, Nov 25. Please let us know if you are interested in joining for the full extent of programming."name="staying" />
      {errors.staying && <div className="error">{errors.staying}</div>}


      <label>Any community support needs?</label>
      <input type="text" placeholder="Accommodations? Dietary restrictions? Allergies? Medical and Access support?"name="accomidations"  />
      {errors.accomidations && <div className="error">{errors.accomidations}</div>}


      <label>What are some aspects of group gatherings that sparked inspiration and excitement for you that you would like to see integrated?</label>
      <input type="text" placeholder="Bulletin board for spontaneous activities, collective cooking and meal sharing, evening programming, community radio, secret message mailboxes etc."name="likes"  />
      {errors.likes && <div className="error">{errors.likes}</div>}
      
      <label>Any thing else you'd like to share?</label>
      <input type="text" name="ect" />
      {errors.ect && <div className="error">{errors.ect}</div>}

          <button type='submit'>send it</button>
        </form>

      </div>




    </div>
  )
}


  function App() {
   
    return (
      <div id="main_cont">
<Router>
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
        
       <NavLink to='/'> <span>Home</span> </NavLink >
      <NavLink to='/submit_class'> <span>Submit Your Idea</span></NavLink>
        </div>

        </div>
   
   <div id='content_container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit_class" element={<SubmitClass />} />

        </Routes>
      </div>   
      </Router>

      </div>
    );
  }


export default App;
