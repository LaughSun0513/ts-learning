"use strict";
var obj = {
    x: 10,
    y: 10
};
//obj.x=20; //Error
//----只读数组泛型------
var list = [1, 2, 3, 4];
var listArray = list;
// listArray[0]=5; //Error
// listArray.push(6);//Error
// listArray.length = 100;//Error
// list = listArray;//Error
//可以通过类型断言改写
list = listArray;
//--------readonly vs const------------
// readonly 做为属性
// const 做为变量
