import {TimeLine,Animation} from "./animation.js";

let ly = new TimeLine();
ly.start();
ly.add(new Animation(document.querySelector("#el").style,"transform",0,
    500,3000,null,0,v=>`translateX(${v}px)`));
document.querySelector("#el2").style.transition = 'transform ease  2s';
document.querySelector("#el2").style.transform = 'translateX(500px)';
document.querySelector("#puase-btn").addEventListener("click",()=>ly.pause());
document.querySelector("#resume-btn").addEventListener("click",()=>ly.resume());