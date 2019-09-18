//-------为函数定义类型-----------
//函数类型包含两部分：参数类型和返回值类型
function add(x: number, y: number): number {
  return x + y
}

let myAdd = function(x: number, y: number): number { 
  return x + y
}
//书写完整函数类型
//对于返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了
//如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空

let myAdd2 : (x: number, y: number) => number = 
function(x: number, y: number): number{
  return x+y
}

//推断类型
let myAdd3: (baseValue: number, increment: number) => number = 
function(x, y) { //x,y 按上下文归类 是类型推论的一种
  return x + y
}