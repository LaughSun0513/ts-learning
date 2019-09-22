//类型断言的方式 不好
function isNumber(x: any): x is string {
    return typeof x === 'number'
}

function isString(x: any): x is string {
    return typeof x === 'string'
}

function padLeft(value: string, padding: string | number) {
    if (isNumber(padding)) {
        return Array(padding + 1).join(' ') + value
    }
    if (isString(padding)) {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

//----------typeof 类型保护------------------
//typeof 类型保护只有两种形式能被识别：typeof v === "typename" 和 typeof v !== "typename"， 
//"typename"必须是 "number"， "string"，"boolean" 或 "symbol"
function padLeft2(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}