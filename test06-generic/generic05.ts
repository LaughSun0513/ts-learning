//---------------泛型类------------------
//泛型类看上去与泛型接口差不多。 泛型类使用（<>）括起泛型类型，跟在类名后面
class GenericNum<T>{
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNum = new GenericNum<number>();
myGenericNum.zeroValue = 0;
myGenericNum.add = function (x, y) {
    return x + y
}
//GenericNum类没有什么去限制它只能使用 number 类型。 也可以使用字符串或其它更复杂的类型
//类有两部分：静态部分和实例部分 泛型类指的是实例部分的类型
let myGenericStr = new GenericNum<string>();
myGenericStr.zeroValue = '';
myGenericStr.add = function (x, y) {
    return x + y
}