"use strict";
function createSquare2(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//let mySquare2 = createSquare2({ colour: 'red', width: 100 } );//colour拼写错误
//---------1 可以跳过检查的方式之一 ----------
//let mySquare3 = createSquare2({ colour: 'red', width: 100 } as SquareConfig); 
//---------3 跳过方式三：将这个对象赋值给一个变量： 因为 squareOptions 不会经过额外属性检查，所以编译器不会报错--------
var squareOptions = { colour: 'red', width: 200 };
var mySquare4 = createSquare2(squareOptions);
