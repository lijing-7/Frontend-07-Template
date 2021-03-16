import {Component} from "./framework";

export class Carousel extends Component{
    constructor() {
        super();
        this.attributes = Object.create(null);
    }
    setAttribute(name, value) {
        this.attributes[name] = value;
    }
    render() {
        // console.log(this.attributes.src);
        // return document.createElement("div");
        this.root = document.createElement('div');
        this.root.classList.add('carousel');
        for (let record of this.attributes.src){
            let child = document.createElement("div");
            child.style.backgroundImage = `url(${record})`;
            this.root.appendChild(child);
        }

        let position = 0;
        this.root.addEventListener('mousedown ',event=>{
            console.log('mousedown');
            let children = this.root.children;
            let startX = event.clientX;

            let move = event =>{
                console.log('move');
                let x = event.clientX - startX;

                let current = position - ((x-x % 500) / 500);

                for (let offset of [-1,0,1]){
                    let ops = current + offset;
                    ops = (ops + children.length) % children.length;

                    children[ops].style.transition = "none";
                    children[ops].style.transform = `translateX(${- ops * 500 + offset * 500 + x * 500}px)`;
                }

                for (let child of children){
                    child.style.transition = "none";
                    child.style.transform =`translateX(${ position * 500 +  x}px)`;
                }
            }

            let up = event => {
                console.log('up');
                let x = event.clientX - startX;
                position = position - Math.round(x / 500);

                for (let offset of [0,- Math.sign(Math.round(x/500)-x +250 + Math.sign(x))]){
                    let ops = position + offset;
                    ops = (ops + children.length) % children.length;

                    children[ops].style.transition = "";
                    children[ops].style.transform = `translateX(${- ops * 500 + offset * 500 }px)`;
                }

                for (let child of children){
                    child.style.transition = "";
                    child.style.transform =`translateX(${- position * 500 }px)`;
                }
                document.removeEventListener('mousemove',move);
                document.removeEventListener('mouseup',up);
            }

            document.addEventListener('mousemove',move);
            document.addEventListener('mouseup',up);
        })

        /*  let currentIndex = 0;
          setInterval(()=>{
              let children = this.root.children;
              let nextIndex = (currentIndex+1) % children.length;

              let current = children[currentIndex];
              let next = children[nextIndex];

              next.style.transition = "none";
              next.style.transform = `translateX(${100 - nextIndex * 100}%)`;

              setTimeout(()=>{
                  next.style.transition = '';
                  current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
                  next.style.transform = `translateX(${ - nextIndex * 100}%)`;

                  currentIndex = nextIndex;
              },16)

          },3000)*/

        return this.root;

    }
    mountTo(parent) {
        parent.appendChild(this.render());
    }
}