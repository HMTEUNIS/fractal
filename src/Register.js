import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
// import { UserContext } from './UserContext';
export default function Register({setEmail}){
    const [hasRegistered, setRegister] = useState(false)
    const [req, setReq] =useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        staying_for_full_session: false,
        accomodations: '',
        things_liked_from_other_gatherings: ''
    })
    


//this is the page where people can register for the event.
// It will be a form that will be sent to the database called
// "people"



useEffect(() => {
  if (hasRegistered && req.email) {
      setEmail(req.email);
  }
}, [hasRegistered, req.email, setEmail]);

    const handleChange = (event) => {
      setReq((curr) => ({
        ...curr,
        [event.target.name]: event.target.value,
      }));
    };
    
    
    const createReservation = async(e) =>{
    e.preventDefault()
    console.log("res", req, Object.keys(req).length)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization' : process.env.REACT_APP_SUPABASE_KEY
    
      },
      body: JSON.stringify({params: req})
    };
    fetch('https://niwikbfpmeckmeqekmnw.supabase.co/functions/v1/notion_link', options)
     .then(() => setRegister(true))
     .then(() =>  window.scrollTo(0, 0))

    }
    
      return(
        <>
        <div>
        <span className='two_buttons_horizontal'>
        {hasRegistered ? 
        
        
        <div>
            <span>
                <p>Thank you for regiestering! Don't worry, we are really going out of our way to keep all of our guests information as private as possible.</p>
            </span>
            <p>Would you like to</p>
        <NavLink to='/submit_class'> <span className="registeration_link">Apply To Lead A <i>Container</i> As Well?</span></NavLink>
        </div>
        :
        
        <form onSubmit={createReservation}>
            <div>
            <p>This Fall we are gathering in Tovaangar, so called Los Angeles, from November 22-24th.</p> 
    <p>Weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology (and more!), for a moment of shared inquiry, co-creation, nourishment and to stir up good trouble.</p>
        <p>In order for us to prepare we're asking you to register before hand. If you have already registered but are coming back to submit a class, please register again and make note of it in the bio section :)</p>
        <p>See you soon!</p>
            </div>
             <div id='basic_info'>
                 <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} required />
                <br />
                <br />
                <label>Email: </label>
                <input type="text" name="email" onChange={handleChange} required />
                <br />
                <br />
                <label>Phone: </label>
                <input type="text" name="phone"   onChange={handleChange} required />
            </div>
            <br />
            <br />
                 <label>Give A Little Bio: </label>
    
                 <textarea  className='long_form' name="bio" onChange={handleChange} placeholder='Feel free to add any information you’d like shared about yourself relevant to your container offering or favorite fruit.' />
                 <br />
                 <br />                     <label>Staying with us the whole time?</label>
                 <input type="checkbox" style={{width: '30px', height: '30px'}} name="staying_for_full_session" />
                    
                    <br />
                    <br />
                    
                      <label>Any community support needs?</label>
                        <textarea className='long_form' name='accomodations' placeholder="Accommodations? Dietary restrictions? Allergies? Medical and Access support?" />
                        <br />
                    <label>What are some aspects of group gatherings that sparked inspiration and excitement for you that you would like to see integrated?</label>
<                       textarea  className='long_form' name="things liked from other gatherings" 

placeholder="Bulletin board for spontaneous activities, collective cooking and meal sharing, evening programming, community radio, secret message mailboxes etc."
 />
    <br/>
    <button className="subbutton" type='submit'>Register</button>
    <button className="subbutton" style={{ position: 'relative', left: "20px", backgroundColor: 'red'}}type='reset'>Cancel</button>
    
    <p>
      This will add you to our mailing list and we will also be in touch about ammenities and logistics.
    </p>
        </form>
        
        
    }
    </span>
    
        </div>

    
        </>
      )
    }