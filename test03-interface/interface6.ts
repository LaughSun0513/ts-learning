//------可索引类型-------
//1. 字符串索引 
//2. 数字索引

interface StringArray {
   [index:number]:string
}
let myArray:StringArray
myArray = ['Bob','Jack']


let myStr:string = myArray[0];

//-------使用数值型的字符串索引，有时会得到完全不同的Animal--------
class Animal {
  name!:string  //这里用 ！修饰符 来规避 Property 'name' has no initializer and is not definitely assigned in the constructor错误
}
class Dog extends Animal {
  breed!:string  //这里用 ！修饰符 来规避错误
}
interface NotOkay {
  //[x:number]:Animal, //数字索引类型“Animal”不能赋给字符串索引类型“Dog”
  [x:string]:Dog
}

//------字符串索引-----------------
//字符串索引签名能够很好的描述 dictionary 模式，并且它们也会确保所有属性与其返回值类型相匹配。 
//因为字符串索引声明了 obj.property 和 obj['property'] 两种形式都可以
interface NumberDic {
  [index:string]:number;
  length:number;
 // name:string  //error name类型和索引返回类型number不匹配
}

//---------设置索引为只读-------------
interface ReadonlyStringArray {
  readonly [index:number]:string
}
let myArray2:ReadonlyStringArray = ["Bob2","Jsck2"];
//myArray2[2] = "Mack"; //Error
