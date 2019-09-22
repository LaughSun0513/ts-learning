//---------可以为 null 的类型-----------
//默认情况下，类型检查器认为 null 与 undefined 可以赋值给任何类型
//null 与 undefined 是所有其它类型的一个有效值
//--strictNullChecks 标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null 或 undefined

//可以使用联合类型明确的包含它们
let s = 'foo'
s = null // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // 可以

sn = undefined // error, 'undefined'不能赋值给'string | null'
