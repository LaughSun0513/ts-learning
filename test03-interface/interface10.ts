//------------4.继承接口-----------------
interface Shape {
  color:string
}
interface Square2 extends Shape { //接口继承
  sLength:number
}
let mySquare2 = {} as Square2;
//同时拥有color sideLength俩属性
mySquare2.color = "blue";
mySquare2.sLength = 10;

//--------------4.2 继承多个接口----------------------
interface Person {
  age:number
}
interface Sex {
  sex:string
}
interface Man extends Person,Sex { //继承多个接口 --> 合成接口
  strength:string
}
let createMan = {} as Man //使用合成接口
createMan.age = 25;
createMan.sex = 'boy';
createMan.strength = "big";



