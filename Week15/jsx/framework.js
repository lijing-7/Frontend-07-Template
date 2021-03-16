export function createElem(type,attributes,...children){
    let element ;
    if(typeof type === 'string')
        element =new ElementWrapper(type);
    else
        element = new type;
    for (let att in attributes){
        element.setAttribute(att,attributes[att]);//属性为对象
    }
    for (let child of children){
        if (typeof child === "string"){//文本属性为字符串，修改其为文本节点
            child = new TextWrapper(child);
        }
        element.appendChild(child);
    }
    return element;
}

export class Component{
    constructor() {
        // this.root = this.render();
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value);
    }
    appendChild(child){
        // this.root.appendChild(child);
        child.mountTo(this.root);
    }
    mountTo(parent){
        parent.appendChild(this.root);
    }
}

class ElementWrapper extends Component{
    constructor(type) {
        super();
        this.root = document.createElement(type);
    }

}

class TextWrapper extends Component{
    constructor(contant) {
        super();
        this.root = document.createTextNode(contant);
    }
}
