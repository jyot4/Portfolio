import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <div className='contact'>
      <h3> Contact</h3>
      <div className='contactLeft'>
        <h2>Talk To me</h2>
        <ul>
          <li><span>Location</span>Vasaundhara Nager,Makrana,Rajasthan</li>
          <li> <span>Email</span> jyotivyass2000@gmail.com</li>
          <li><span>Call</span>91+ 8529423821</li>
        </ul>
      </div>

      <div className='contactRight'>
        <input type='text' placeholder='Enter Your Name'/>
        <input type='text' placeholder='Enter Your Email'/>

        <textarea placeholder='Message' rows= '4' cols= '50'></textarea>
        <button type='submit'>Send Now</button>
      </div>
    </div>
  )
}

export default Contact
