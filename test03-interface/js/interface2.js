"use strict";
function createSquare(config) {
    var newSquare = {
        color: "red",
        area: 100
    };
    if (config.color) {
        //好处之二:可以捕获引用了不存在的属性时的错误
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
