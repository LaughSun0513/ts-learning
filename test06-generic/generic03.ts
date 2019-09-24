//---------------泛型类型------------------
//---------函数本身的类型--------
function gengericEcho2<T>(args: T): T {
    return args;
}
//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
let myGenericEcho: <T>(args: T) => T = gengericEcho2;

//也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
let myGenericEcho2: <U>(args: U) => U = gengericEcho2;

//还可以使用带有调用签名的对象字面量来定义泛型函数
let myGenericEcho3: {<T>(args: T):T}  = gengericEcho2; //这里是:T 不是=>T

