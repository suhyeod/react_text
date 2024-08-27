import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Container_1 from './container_1';
import Container_2 from './container_2';

// const content = "Hi. I'm Somi, \n front-end developer.";
// const text = document.querySelector(".text");
// let i = 0;

// function typing(){
//     let txt = content[i++];
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     if (i > content.length) {
//         text.textContent = "";
//         i = 0;
//     }
// }
// setInterval(typing, 200)
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Container_1 />
    <Container_2 />
  </React.StrictMode>
);
