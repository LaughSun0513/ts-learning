//-----------交叉类型-------------
//交叉类型是将多个类型合并为一个类型
//可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性
function extend<T, U>(first: T, second: U): T & U { //T & U
    let newObj = {} as T & U;
    for (let id in first) {
        newObj[id] = first[id] as any
    }
    for (let id in second){
        if (!newObj.hasOwnProperty(id)) {
            newObj[id] = second[id] as any
        }
    }
    return newObj;
}
class Person {
    constructor(public name: string) { }
}
interface Logger {
    log(): void
}
class ConsoleLog implements Logger {
    log() { }
}
let a = new Person('xiaoming');
let b = new ConsoleLog();
let c = extend(a, b); // 让c同时拥有name和log
c.name;
c.log();