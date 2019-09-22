//---------------泛型约束------------------
//相比于操作 any 所有类型，我们想要限制函数去处理任意带有 .length 属性的所有类型。 
//只要传入的类型有这个属性，我们就允许，就是说至少包含这一属性。为此，我们需要列出对于 T 的约束要求。

//我们定义一个接口来描述约束条件，创建一个包含 .length 属性的接口，使用这个接口和 extends 关键字来实现约束
interface Lengthwise {
    length: number
}
 //<T extends Lengthwise> 
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // OK
    return arg
}
//loggingIdentity(3);  // Error
loggingIdentity({
    length: 10, 
    value: 3
})