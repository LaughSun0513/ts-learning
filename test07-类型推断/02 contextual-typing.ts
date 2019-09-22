//----------上下文类型-------------
window.onmousedown = function(mouseEvent) {
    //TypeScript 类型检查器使用 window.onmousedown 函数的类型来推断右边函数表达式的类型。 
    //因此，就能推断出 mouseEvent 参数的类型了，所以 mouseEvent 访问了一个不存在的属性，就报错了
    //console.log(mouseEvent.clickTime)  // Error
}

//如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。重写上面的例子
//这个函数表达式有明确的参数类型注解，上下文类型被忽略
//上下文类型会在很多情况下使用到。通常包含函数的参数，赋值表达式的右边，类型断言，对象成员，数组字面量和返回值语句
window.onmousedown = function(mouseEvent:any) { //使用any忽略上下文类型
    console.log(mouseEvent.clickTime)  // OK
}

//3 上下文类型也会做为最佳通用类型的候选类型
class Animal {
    numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}
function createZoo(): Animal[] {
    return [new Bee(), new Lion()]
}
  
let zoo3 = createZoo()