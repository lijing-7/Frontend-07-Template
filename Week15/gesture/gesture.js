
let handler;
let startX, startY;
let isPan = false, isTab = true, isPress = false;

export class Dispatcher{
    constructor(element) {
        this.element = element;
    }
    dispatch(type,properties){
        let event = new Event(type);
        for (let name in properties){
            event[name] = properties[name];
        }
        this.element.dispatchEvent(event);
    }
}

export class Listener{
    constructor(element,recognizer) {
        let isListeningMouse = false;
        let contexts = new Map();

        element.addEventListener("mousedown", event => {
            let context = Object.create(null);
            contexts.set("mouse"+(1 << event.button),context);

            recognizer.start(event,context);

            let mousemove = event => {
                let button = 1;
                while(button <= event.buttons){
                    if (button & event.buttons){
                        // order of buttons && button property is not same
                        let key ;
                        if (button === 2)
                            key = 4;
                        else if (button === 4)
                            key = 2 ;
                        else
                            key = button;
                        let context = contexts.get("mouse"+ key);
                        recognizer.move(event,context);
                    }
                    button = button << 1 ;
                }
            }

            let mouseup = event => {
                console.log('end',event.buttons);
                let context = contexts.get("mouse"+ ( 1 << event.button));
                recognizer.end(event,context);
                contexts.delete("mouse"+(1<<event.button));
                if (event.buttons === 0){
                    document.removeEventListener("mousemove", mousemove);
                    document.removeEventListener("mouseup", mouseup);
                    isListeningMouse = false;
                }
            }

            if (!isListeningMouse){
                document.addEventListener("mousemove", mousemove);
                document.addEventListener("mouseup", mouseup);
                isListeningMouse = true;
            }
        })

        element.addEventListener("touchstart", event => {
            for (let touch of event.changedTouches) {
                let context = Object.create(null);
                contexts.set(touch.identifier,context);
                recognizer.start(touch,context);
            }
        })

        element.addEventListener("touchmove", event => {
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                recognizer.move(touch,context);
            }
        })

        element.addEventListener("touchend", event => {
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                end(touch,context);
                contexts.delete(touch.identifier);
            }
        })

        element.addEventListener("touchcancel", event => {
            for (let touch of event.changedTouches) {
                let context = contexts.get(touch.identifier);
                recognizer.cancel(touch,context);
                contexts.delete(touch.identifier);
            }
        })
    }
}

export class Recognize{
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }
    start(point , context){
        console.log("start", point.clientX, point.clientY)
        context.startX = point.clientX, context.startY = point.clientY;
        context.points = [{
            t:Date.now(),
            x:point.clientX,
            y:point.clientY,
        }]

        context.isTab = true;
        context.isPan = false;
        context.isPress = false;
        context.handler = setTimeout(() => {
            console.log("press");
            context.isTab = false;
            context.isPan = false;
            context.isPress = true;
            context.handler = null;
            this.dispatcher.dispatch("press",{});
        }, 500)
    }
    move(point , context){
        let dx = point.clientX - startX, dy = point.clientY - startY;
        if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
            context.isPan = true;
            context.isTab = false;
            context.isPress = false;
            context.isVertical = Math.abs(dx) < Math.abs(dy);
            this.dispatcher.dispatch("panStart",{
                startX:point.startX,
                startY:point.startY,
                clientY:point.clientY,
                clientX:point.clientX,
                isVertical: context.isVertical,
            });
            clearTimeout(context.handler);
        }

        if (context.isPan) {
           /* console.log(dx, dy);
            console.log("pan");*/
            this.dispatcher.dispatch("pan",{
                startX:point.startX,
                startY:point.startY,
                clientY:point.clientY,
                clientX:point.clientX,
                isVertical: context.isVertical,
            });

        }
        // console.log("move", point.clientX)

        context.points = context.points.filter((point)=>Date.now() - point.t < 500);

        context.points.push({
            t:Date.now(),
            x:point.clientX,
            y:point.clientY,
        })
    }
    end(point , context){
        if (context.isTab) {
            // console.log("tap");
            this.dispatcher.dispatch("tap",{})
            clearTimeout(context.handler)
        }
        if (context.isPress) {
            console.log("pressend")
        }
        // console.log("end", point.clientX)

        let v,d;
        if (!context.points.length){
            v = 0;
        }else{
            d = Math.sqrt((point.clientX - context.points[0].x) ** 2 + (point.clientY - context.points[0].y) ** 2);
            v = d /( Date.now() - context.points[0].t);
        }

        if (v<1.5){
            context.isFilck = true;
            // console.log("flick");
            this.dispatcher.dispatch("flick",{
                startX:point.startX,
                startY:point.startY,
                clientY:point.clientY,
                clientX:point.clientX,
                isVertical: context.isVertical,
                isFilck:context.isFilck,
            });
        }else {
            context.isFilck = false;
        }

        if (context.isPan) {
            this.dispatcher.dispatch("panEnd",{
                startX:point.startX,
                startY:point.startY,
                clientY:point.clientY,
                clientX:point.clientX,
                isVertical: context.isVertical,
                isFilck:context.isFilck,
            });
        }

        console.log(v)

    }
    cancel(point , context){
        this.dispatcher.dispatch("cancel",{});
        clearTimeout(context.handler)
        // console.log("cancel", point.clientX)
    }
}

export function enableGesture(element){
    new Listener(element,new Recognize(new Dispatcher(element)));
}
