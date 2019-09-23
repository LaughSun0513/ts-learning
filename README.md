# TS的 安装 编译 vscode自动编译
```
npm i typescript -g
tsc index.ts

# vscode 
tsc --init       // 生成tsconfig.json
"outDir": "./js" // 修改outDir路径
vscode终端 --> 运行任务 ---> tsc:监视
```

# ts中的数据类型
- 布尔类型(Boolean)
- 数字类型(Number)
- 字符串(String)

- 数组类型(Array)
- 元组类型(Tuple)
- 枚举类型(Enum)
- 任意类型(Any)

- void类型
- null / undefined
- never类型
- object
- 类型断言

# ts中的接口 -- interface
## !! 1.可以指定数据结构
```Ts
interface LabelledValue {
  label:string
}
function printLabel2(labelObj:LabelledValue):void{
  console.log(labelObj.label)
}
```

## !! 2.可以对可能存在的属性进行预定义，捕获不存在的属性
```Ts
interface Square {
  color:string,
  area:number
}
let config:Square = {
  color:'red',
  area:1,
  clor:2 //error 捕获不存在的属性
}
```

## 3.只读属性 & 只读数组泛型
```Ts
//只读属性
interface Point {
  readonly x:number,
  readonly y:number
}

//只读数组泛型
let list:number[]=[1,2,3,4];
let listArray:ReadonlyArray<number> = list;
list = listArray as number[]; //可以通过类型断言改写
```

## 4.额外属性检查如何跳过
### 方法一 as
```Ts

interface SquareConfig {
  color: string;
  width: number;
}
let mySquare:SquareConfig = { colour: 'red', width: 100 } as SquareConfig; //colour拼写错误，可以通过as跳过
```
### 方法二 修改索引签名
```Ts
interface SquareConfig {
  color: string
  width: number
  [propName:string]:any //表示可以有任意数量的属性，并且只要它们不是 color 和 width
}
let mySquare:SquareConfig = { colour: 'red', width: 100 }; //colour拼写错误，修改了索引签名，可以理解为新增的属性
```
### 方法三 赋值给新对象 不会经过额外检查
```Ts
interface SquareConfig {
  color: string
  width: number
}
let newObj = {
  colour: 'red', 
  width: 200
}
let mySquare: SquareConfig = newObj
```

## !!5.函数类型的接口
```Ts
interface myFunc {
  (string:string,subString:string):boolean
}
//使用
let createFunc:myFunc
createFunc = function(string:string,subString:string):boolean{
    let result = string.search(subString); //'abc'.search('d') -> -1
    return result > -1
}

//---可以改参数名字-----
let createFunc2:myFunc
createFunc2 = function(str:string,sub:string):boolean{
    let result = str.search(sub);
    return result > -1
}

//----可以省略类型判断，自己会类型判断------
let createFunc3:myFunc
createFunc3 = function(str,sub){
  let result = str.search(sub);
  return result > -1
}
```

## 6.可索引类型
### 字符串索引 obj["key"]
### 数字索引 obj[0]





