import React, { useEffect } from 'react'
import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from 'typewriter-effect'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function HeaderRow() {


  useEffect(()=>{
    AOS.init();
  },[])



  return (
    <div>
     <section class="home"   >
    <div class="home-content"     data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="100"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
        <h3>Hello , I am</h3>
        <h1> Jyoti Vyas</h1>
       <p> And I am  </p>
       <h2>
        <Typewriter options={{
          autoStart :true,
          loop:true,
          delay:50
        }}
        
        onInit = {(content)=>{
          content
          .typeString("Full Stack Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Quick Learner")
          .pauseFor(1000)
          .deleteAll()
          .start()
        }}
        
        />
        
       </h2>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia corporis et quos, maiores nisi ab suscipit inventore temporibus quam explicabo iste eveniet, veritatis in ad reiciendis tempora ex, quae labore.</p>

       <div class="home-icon">
       <Link to="https://www.linkedin.com/in/jyoti-vyas-901993244/"><LinkedInIcon/></Link>
       <Link to = 'https://github.com/jyot4'><GitHubIcon/></Link>
       <Link to = ''><InstagramIcon/></Link>
      
       </div>
       <a href="" class="btn">More About Me</a>
    </div>
   </section> 
    </div>
  )
}

export default HeaderRow
