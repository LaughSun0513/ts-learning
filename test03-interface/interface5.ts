//------函数类型接口--------
//它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型
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