import { useState, useEffect } from "react";
export default function ProposeContainer({email}) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [foundUser, setFoundUser] = useState(null);
  const [req, setReq] =useState({
    class_name: '',
    class_type: '',
    activities_projects: '',
    resource_needs: '',
    location: '',
    time_needed: '',
    scaleability: '',
    fac_links: '',
    anything_else: ''
  })

  //this is the page where people suggest classes.                   <br />
//It will end up in the table called "Classes"


//this functoin here runs as soon as the page loads. What it does is it takes the email from the preious submission that created the user
//and it returns the notion entry that was created for that user.
//this is a way to get the notion entry id for the user that is submitting the class.
//and then we can use that id to link the class to the user.
useEffect(() => {
const lookupNotionEntry = async (email) => {
  const response = await fetch('https://niwikbfpmeckmeqekmnw.supabase.co/functions/v1/q_notion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization' : process.env.REACT_APP_SUPABASE_KEY

    },
    body: JSON.stringify({ email: email })
  });

  const result = await response.json();
  console.log("holy", result.myPage.results[0].id)
result.myPage.results.length > 0 ? 
buildUser(result.myPage.results[0]) 

: console.log('no user found')
} 

setTimeout(() =>lookupNotionEntry(email), 3000)
}, [email])

function buildUser(user){
setFoundUser({name : user.properties.name,
              email: user.properties.email,
              id: user.id
})
setReq((curr) => ({facilitator: user.id, ...curr}))


}




  const handleChange = (event) => {
    setReq((curr) => ({
      ...curr,
      [event.target.name]: event.target.value,
    }));
  };


    const handleSubmit = async(e) =>{
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization' : process.env.REACT_APP_SUPABASE_KEY
    
      },
      body: JSON.stringify({params: req})
    };
    fetch('https://niwikbfpmeckmeqekmnw.supabase.co/functions/v1/notion_link', options)
     .then(() => setIsSuccess(true))
     .then(() =>  window.scrollTo(0, 0))
    }
  



  return (
    <div>


{isSuccess && foundUser? 
<div>
    <span>Thank you!</span>
<br />
<span>We'll be in touch!</span>
<br />
<br />
<span>♡♡♡ Friends Resisting Corporate Tech and Laughing </span>

</div>
:   
<div>
<div>
<p>
Weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology (and more!), for a moment of shared inquiry, co-creation, nourishment and to stir up good trouble.
We are seeking proposals from facilitators interested in joining us in our endeavor. Be it a class, a workshop, a presentation, a collaborative session, whatever makes sense for your vision, we want to provide you with a <i>container</i> to fill as you see fit.</p>

</div>
{foundUser ?<> <p style={{fontWeight:'bold'}}>This submission will be associated with the database entry for user ID:{foundUser.id} - email:{foundUser.email.rich_text[0].plain_text} </p> <p>If this is not your email, or you spelled it wrong or something like that, please go back and register again and make a note of this in your bio.</p> </>: <span>loading profile...</span>}
<div> 
  <form id='apply_to_teach'  onSubmit={handleSubmit}> 
  
<div id='long_form_resp'>


<label>Container Title + Summary</label>
<textarea className='long_form' 
name="class_name"
placeholder="Example: 'Transverse Portals' A course on navigating through and around the physical and mental barriers utilized and imposed by the security state. Making openings is an ancient technology for summoning and inducing flows both material and spiritual. How might we change our orientation to the world if we understand the inherent flaws of systems that prioritize security over collective wellbeing? How might the physical skill of lockpicking provide epistemic models for affecting systemic change?"
 
onChange={handleChange}
 />

<br />
<br />


<label>Container type? How do you envision this container offering?</label>
<textarea className='long_form'
 placeholder="We want to encourage facilitators to think expansively about their offerings, beyond a typical class or workshop, using Fractal as an opportunity to stretch your practice towards experimental ways of thinking and learning together. It’s cool/encouraged if it’s new for you too!- Container possibilities include: class // workshop // secret mission // ritual // field trip // play date // etc"
 name="class_type" onChange={handleChange} /> 

<br />
<br />

<label>What activities will you facilitate and will there be any culminating projects? </label>
<textarea  
className='long_form'
name="activities_projects"
 placeholder="A share out, performance, a bracelet with your best friends name on it"  onChange={handleChange}  />

<br />
<br />

<label>Resources // supplies you would need? Would you bring any supplies?</label>
<textarea className='long_form'
placeholder="Electricity, Projector, Craft stuff, GIANT paper, 2000 gummy worms? "
name="resource_needs"  onChange={handleChange}  />
<br />
<br />

<label>Location</label>
<input type="text" 
 placeholder="Indoor, outdoor, near water, in the dark?? We expect to host a majority of programming on-site, but are interested in including offsite field trips as well!"
 name="location"  onChange={handleChange}  />

<br />
<br />

<label>What is the ideal length of time to hold your container?</label>
<input 
type="text" 
placeholder="We will organize daily programming based on facilitator submissions, but expect to have multiple activities occurring throughout each day "
name="time_needed"  onChange={handleChange}  />

<label>Is your container scalable for groups of different sizes? Is there an ideal group size or any size parameters?</label>
<input type="text"  
 placeholder="scaleability" name="scaleability"  onChange={handleChange} 
  />

<br />
<br />
<label>Any internet links / portfolio / website / social media of your previous work you’d like to share?</label>
<input placeholder="It's okay if not :)"name="fac_links"  onChange={handleChange} />
  <br />
  <br />
<label>Any thing else you'd like to share?</label>
<textarea className='long_form' 
name="anything_else"  onChange={handleChange} />
<br />
<br />

</div>
<button className="subbutton" type='submit'>send it!</button>
    <button className="subbutton" style={{ position: 'relative', left: "20px", backgroundColor: 'red'}}type='reset'>Cancel</button>
  </form>

</div>
</div>

}
  </div>

 );
}