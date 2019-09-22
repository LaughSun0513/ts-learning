//---------------泛型类型------------------
//-----------泛型接口------------------
interface gengericEchoFn {
    <T>(args: T): T //<T>
}
function gengericEcho<T>(args: T): T {
    return args;
}

let myGengericEcho:gengericEchoFn = gengericEcho;

//-----------2 把泛型参数当作整个接口的一个参数---------------
interface gengericEchoFn2<T> { //<T>
    (args: T): T
}
function gengericEcho2<T>(args: T): T {
    return args;
}
//不再描述泛型函数，而是把非泛型函数签名作为泛型类型一部分 
//传入类型参数来指定泛型类型<number>  锁定了之后代码里使用的类型
let myGengericEcho2:gengericEchoFn2<number> = gengericEcho2; 
