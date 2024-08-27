import React from 'react';
import './header.css'; 

function header(){
  return(
    <header> 
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </header>
  )
}

export default header;
