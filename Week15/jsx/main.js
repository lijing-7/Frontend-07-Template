import {Component,createElem} from "./framework";
import {Carousel} from './carousel';
import {TimeLine,Animation} from "./animation";


let d = [
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",

];

let a = <Carousel src={d}/>
// document.body.appendChild(a);

a.mountTo(document.body);
console.log("123465");


let ly = new TimeLine();
 // ly.add(new Animation({set b(v){console.log(v)}},'b',0,100,1000,null));

/*window.ly = ly;
window.animation = new Animation({set b(v){console.log(v)}},'b',0,100,1000,null);

ly.start();*/



