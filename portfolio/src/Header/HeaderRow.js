import React from 'react'
import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';


function HeaderRow() {
  return (
    <div>
     <section class="home">
    <div class="home-content">
        <h3>Hello , I am</h3>
        <h1> Jyoti Vyas</h1>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia corporis et quos, maiores nisi ab suscipit inventore temporibus quam explicabo iste eveniet, veritatis in ad reiciendis tempora ex, quae labore.</p>

       <div class="home-icon">
       <Link to="https://www.linkedin.com/in/jyoti-vyas-901993244/"><LinkedInIcon/></Link>
       <Link to = ''><GitHubIcon/></Link>
      
       </div>
       <a href="" class="btn">More About Me</a>
    </div>
   </section> 
    </div>
  )
}

export default HeaderRow
