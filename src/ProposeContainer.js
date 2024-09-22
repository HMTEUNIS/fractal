import { useState } from "react";
export default function ProposeContainerContainer() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);
  
const handleSubmit = async (e) =>{
    e.preventDefault()
    const fData = new FormData(e.target);

    fData.append("access_key", "58931617-ed93-4ef9-a5da-86424d496759");
    fData.append("subject", `New Fractal Container Idea Submitted by ${fData.get('facilitator name')}`);
    fData.append("email", fData.get('email'));

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target.reset();
        setIsSuccess(true);
        window.scrollTo(0, 0);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
}



  return (
    <div>


{isSuccess ? 
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
<p>This Fall we are gathering in Tovaangar, so called Los Angeles, from November 22-25th.</p> 
<p>
Weaving together constellations of our beloved and brilliant friends, at the leading edges, in the shadowy undergrounds, fugitive cracks, and entangled middles, of art, ecology and technology (and more!), for a moment of shared inquiry, co-creation, nourishment and to stir up good trouble.
We are seeking proposals from facilitators interested in joining us in our endevor. Be it a class, a workshop, a presntation, a collaboritive session, whatever makes sense for your vision, we want to provide you with a <i>container</i> to fill as you see fit.</p>

</div>
<div> 
  <form id='apply_to_teach'  onSubmit={handleSubmit}> 
     <div id='basic_info'>
  <label>Name: </label>

<input type="text"
name="facilitator name" 
/>

<label>Email: </label>
<input type="text" 
name="email"
 
 />

<label>Phone: </label>
<input type="text"
 name="phone"
   />
</div>

<label>How do you envision this offering? What sort of container will you hold it in? </label>
<textarea className='long_form'
 placeholder="We want to encourage facilitators to think expansively about their offerings, beyond a typical class or workshop, using Fractal as an opportunity to stretch your practice towards experimental ways of thinking and learning together. It’s cool/encouraged if it’s new for you too!- Container possibilities include: class // workshop // secret mission // ritual // field trip // play date // etc"
 name="Container Type/Vision"  /> 

 <br />
 <label>Container Title + Summary</label>
<textarea className='long_form' 
name="Container Title & Summary"
placeholder="Example: 'Transverse Portals' A course on navigating through and around the physical and mental barriers utilized and imposed by the security state. Making openings is an ancient technology for summoning and inducing flows both material and spiritual. How might we change our orientation to the world if we understand the inherent flaws of systems that prioritize security over collective wellbeing? How might the physical skill of lockpicking provide epistemic models for affecting systemic change?"
 />

<br />
<label>What activities will you facilitate and will there be any culminating projects? </label>
<textarea  
className='long_form'
name="What activities will you facilitate and will there be any culminating projects?"
 placeholder="A share out, performance, a bracelet with your best friends name on it" />
< br />


<label>Resources // supplies you would need? Would you bring any supplies?</label>
<textarea className='long_form'
placeholder="Electricity, Projector, Craft stuff, GIANT paper, 2000 gummy worms? "
name="supplies needed"  />

<br />




<label>Where would you like your activity to take place? Is there a specific day, or time of day, that would work best for your programming?</label>
<input type="text" 
 placeholder="Indoor, outdoor, near water, in the dark?? We expect to host a majority of programming on-site, but are interested in including offsite field trips as well!"
 name="location / setting needs"  />




<div id='long_form_resp'>



<label>What is the ideal length of time to hold your container?</label>
<input 
type="text" 
placeholder="We will organize daily programming based on facilitator submissions, but expect to have multiple activities occurring throughout each day "
name="time length"  />
<br />

<label>Is your container scalable for groups of different sizes? Is there an ideal group size or any size parameters?</label>
<textarea  className='long_form' 
 placeholder="how many people we talking here?"name="size and scaleability"
  />
<br />

<label>Are you interested / available in joining us for the full session?</label>
<input className='long_form' 
 type="text" 
 placeholder="We expect to run Fractal as a group gathering from Friday, Nov 22-Monday, Nov 25. Please let us know if you are interested in joining for the full extent of programming."
 name="staying the whole session?" />

 <br />



<label>Any internet links / portfolio / website / social media of your previous work you’d like to share?</label>
<input placeholder="It's okay if not :)"name="website"
  />
<br />

<label>Facilitator Bio: </label>

<textarea  className='long_form'
  name="bio" 
  placeholder='Feel free to add any information you’d like shared about yourself relevant to your container offering or favorite fruit.' />
<br />

<label>Any community support needs?</label>
<textarea className='long_form' 
name='Accomodations' 
placeholder="Accommodations? Dietary restrictions? Allergies? Medical and Access support?"
 />
<br />
<label>What are some aspects of group gatherings that sparked inspiration and excitement for you that you would like to see integrated?</label>
<textarea  className='long_form' name="things liked from other gatherings" 

placeholder="Bulletin board for spontaneous activities, collective cooking and meal sharing, evening programming, community radio, secret message mailboxes etc."
 />

 <br />











<label>Any thing else you'd like to share?</label>
<textarea className='long_form' 
name="ect" />



<br />

<label>Send us a link or meme thats funny</label>
<input placeholder=":)"name="website"
  />
<br />


</div>
    <button type='submit'>send it</button>
  </form>

</div>
</div>

}
  </div>

 );
}