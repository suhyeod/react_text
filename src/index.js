import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Container_1 from './container_1';
import { useState , useEffect } from 'react';


const TypingTitle = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = 'Yuto Village';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);
        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <h1 className="main-title">{blogTitle}</h1>;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Container_1 />
  </React.StrictMode>
);
