//----------联合类型--------------
function padLeft(value: string, padding: any) { //这里的padding为any
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('Hello world', 4) // returns "    Hello world"
let indentedString = padLeft('Hello world', true); //编译阶段通过，运行时报错

//为了解决该问题--------引出联合类型
//联合类型表示一个值可以是几种类型之一。我们用竖线（|）分隔每个类型
function padLeft2(value: string, padding: string | number) { //这里的padding为string|number 联合类型
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}
//let indentedString2 = padLeft2('Hello world', true);  会检测出这里true的问题