"use strict";
//使用
var createFunc;
createFunc = function (string, subString) {
    var result = string.search(subString); //'abc'.search('d') -> -1
    return result > -1;
};
//---可以改参数名字-----
var createFunc2;
createFunc2 = function (str, sub) {
    var result = str.search(sub);
    return result > -1;
};
//----可以省略类型判断，自己会类型判断------
var createFunc3;
createFunc3 = function (str, sub) {
    var result = str.search(sub);
    return result > -1;
};
