import React from 'react';
import './header.css'; 

function header(){
  return(
    <header> 
      <ul>
        <li><a href="#container_1">Home</a></li>
        <li><a href="#container_2">About</a></li>
        <li><a href="/">Skills</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </header>
  )
}

export default header;
