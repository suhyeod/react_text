import React from "react";
import "./container_2.css";
import container_image_1 from "./image/딥디크_포트폴리오.png";
import container_image_2 from "./image/tom_포트폴리오.png";
import container_image_3 from "./image/dior_.png";

function container_2() {
    return (
        <div id="container_2">
            <p>
                only html , css , javaScript
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://suhyeod.github.io/diptyque/" alt="딥디크 포트폴리오"><img src={container_image_1}/></a>
                </li>
                <li>
                    <a target="_blank" href="https://suhyeod.github.io/TOM_N_TOMS_COFFEE/" alt="tom 포트폴리오"><img src={container_image_2}/></a>
                </li>
                <li>
                    <a target="_blank" href="https://suhyeod.github.io/DIOR/" alt="dior 포트폴리오"><img src={container_image_3}/></a>
                </li>
            </ul>
        </div>
    )
}

export default container_2;