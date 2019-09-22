//--------泛型变量----------

function genericEcho3<T>(args:T[]) : T[] { //这里使用了T[] 否则args是没有length属性
    console.log(args.length)
    return args;
}
//泛型函数genericEcho 接收类型参数 T 和参数 arg
//它是个元素类型是 T 的数组，并返回元素类型是T 的数组
//genericEcho3(1)
//genericEcho3('1')
genericEcho3([1,2,3,4])
genericEcho3(['1','2','3','4'])