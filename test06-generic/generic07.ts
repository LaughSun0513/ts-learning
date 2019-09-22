//---------------在泛型约束中使用类型参数------------------
//可以声明一个类型参数，且它被另一个类型参数所约束
//比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj 上，因此我们需要在这两个类型之间使用约束
//<K extends keyof T> K必须是T中的key
function getProperty<T,K extends keyof T>(obj:T,key:K){
    return obj[key]
}
let obj = {
    a:1,
    b:2
}
getProperty(obj,'a');
//getProperty(obj,'c'); //error