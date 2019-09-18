"use strict";
//-----------高级技巧2 把类当做接口使用---------------
//类定义会创建两个东西：类的实例类型和一个构造函数
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
