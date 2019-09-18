"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-----------抽象类------------------------
//abstract 关键字 定义抽象类 定义抽象类内部抽象方法
var Mobile = /** @class */ (function () {
    function Mobile(name) {
        this.name = name;
    }
    Mobile.prototype.printName = function () {
        console.log('name is' + this.name);
    };
    return Mobile;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super.call(this, 'iphone 11') || this;
    }
    Apple.prototype.printSize = function () {
        console.log('64G');
    };
    Apple.prototype.printMoney = function () {
        console.log('5488');
    };
    return Apple;
}(Mobile));
var redIphone11; //允许创建一个对抽象类型的引用
// redIphone11 = new Mobile(); //错误: 不能创建一个抽象类的实例
redIphone11 = new Apple(); //允许对一个抽象子类进行实例化和赋值
redIphone11.printName();
redIphone11.printSize();
//redIphone11.printMoney();// 错误: 方法在声明的抽象类中不存在
