//---------this在回调函数中---------------
//当你将一个函数传递到某个库函数里稍后会被调用时。 因为当回调被调用的时候，它们会被当成一个普通函数调用，this 将为 undefined
//模拟场景:某个库需要调用某个实例的回调
interface UIElement {
    //this: void 意味着 addClickListener 期望传入的 onclick 方法不需要 this
    addClickListener(onclick: (this: void, e: Event) => void): void
}
class Handler {
    type: string
    /*
    onClickBad(this:Handler,e:Event){ //这里的this指向了Handler，导致UIElement的this出现问题
        this.type = e.type
    }
    */
    /*
    onClickBad(this:void,e:Event){ //这里的this指向了void，解决了UIElement的this问题，但是无法调用Handler自己的type属性
        this.type = e.type
    }
    */
    onClickBad = (e: Event) => { //使用箭头函数解决
        this.type = e.type
    }
}

let h = new Handler();
let uiEle: UIElement = {
    addClickListener() { }
}
uiEle.addClickListener(h.onClickBad);

