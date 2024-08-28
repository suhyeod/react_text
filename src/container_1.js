import React, {useState, useEffect} from 'react';
import './container_1.css';
import photo from "./image/img.png";

function TypingTitle() {
    const [Title, setTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '저는 프론트엔드 개발자입니다.';

    useEffect(() => {
        if (count < completionWord.length) {
            const typingInterval = setInterval(() => {
                setTitle((prevTitleValue) => prevTitleValue + completionWord[count]);
                setCount(count + 1);
            }, 300);

            return() => clearInterval(typingInterval);
        }
    }, [count, completionWord]);

    return <h1 className="main-title">{Title}</h1>;
};

function Container_1() {
    return (
        <div id="container_1">
            <ul>
                <li>
                    <img src={photo} className="img" alt="사진"/>
                </li>
                <li>
                    <div className="introduce">
                        <p>
                            <TypingTitle/>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Container_1;
