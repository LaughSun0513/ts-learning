function printLabel(labelObj:{label:string}):void{
  console.log(labelObj.label)
}
let myObj = {
    size:10,
    label:'Size 10 Object'
}
printLabel(myObj);

//--------接口interface---------
//LabelledValue 接口就好比一个名字，用来描述上面例子里的结构
//类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
interface LabelledValue {
  label:string
}
function printLabel2(labelObj:LabelledValue):void{
  console.log(labelObj.label)
}
let myObj2 = {
  size:11,
  label:'Size 11 Object'
}
printLabel2(myObj2);