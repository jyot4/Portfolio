import React from 'react'
import './Header.css'
import HeaderRow from './HeaderRow'



function Header() {
  return (
    <div>
      <header className="header">
<a href="index.html" className="Portfolio"><span>P</span>ortfolio</a>

<nav className="navbar">

    <a href="">Home</a>
  <a href="">About</a>
  <a href="">Portfolio</a>
  <a href="">Contact</a>
</nav>
   </header>
   <HeaderRow/>
   </div>
  
  )
}

export default Header
