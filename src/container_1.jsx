import React from 'react';
import './container_1.css'; 
import photo from "./image/img.png";

function container_1(){
  return(
    <div id="container_1">
      <img src={photo} className="img" alt="사진" />
      <div className="introduce">
        <p>
          <span>
            저는
          </span>
        </p>
        <p>
          UX/UX 디자인 툴을
        </p>
        <p>
          다룰 수 있는
        </p>
        <p>
          <span>
          Front-End입니다
          </span>
        </p>
      </div>
    </div>
  )
}

export default container_1;
