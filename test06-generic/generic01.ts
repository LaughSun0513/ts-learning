//-----------泛型--------------
//缺点：限制了类型只能是数字
function echo(arg: number): number {
    return arg
}
//缺点：传入的类型与返回的类型应该本来应该是相同，但由于是any，导致可以传数字，可以返回字符串
function echo2(arg: any): any {
    return arg
}

//需要泛型----返回值的类型与传入参数的类型是相同的
//缺点：必须把这些参数当做是任意或所有类型
function genericEcho<T>(args:T) : T {
        return args;
}
//使用泛型函数
genericEcho<string>('String');
genericEcho('String'); //利用了类型推断，无需加<string>