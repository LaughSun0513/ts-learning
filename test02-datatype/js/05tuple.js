"use strict";
var tuple;
tuple = ["hello", 123];
console.log(tuple[0].substring(1));
//console.log(tuple[1].substring(1)); 报错，数字没有substring方法
//tuple[3] ="world"; //Error 访问越界元素会报错
//console.log(tuple[3].toString());//Error 获取不存在的方法
//tuple[6] = true;//Error 
