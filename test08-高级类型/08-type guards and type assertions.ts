//-------------类型保护和类型断言--------------
//由于可以为 null 的类型能和其它类型定义为联合类型，那么你需要使用类型保护来去除 null
function f(sn: string | null): string {
    if (sn === null) {
        return 'default'
    } else {
        return sn
    }
}
//使用短路运算符
function f2(sn: string | null): string {
    return sn || 'default'
}

//-----------类型断言去除null---------------
function broken(name: string | null): string {
    function postfix(epithet: string) {
        //编译器无法去除嵌套函数的 null（除非是立即调用的函数表达式）
        //因为它无法跟踪所有对嵌套函数的调用，尤其是你将内层函数做为外层函数的返回值。
        //如果无法知道函数在哪里被调用，就无法知道调用时 name 的类型
        return name.charAt(0) + '.  the ' + epithet // error, 'name' 可能为 null
    }
    name = name || 'Bob'
    return postfix('great')
}

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet // ok 这里使用了! 后缀
    }
    name = name || 'Bob'
    return postfix('great')
}

broken(null)