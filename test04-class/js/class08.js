"use strict";
//--------高级技巧1---------------
// 巧用 构造函数 
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = 'Hello, there';
    return Greeter2;
}());
var greeter2;
greeter2 = new Greeter2('aaaaa');
console.log(greeter2.greet());
var greeterMaker = Greeter2; //!!! 告诉我 Greeter 标识符的类型 也就是构造函数的类型 这个类型包含了类的所有静态成员和构造函数
greeterMaker.standardGreeting = 'Hey there'; //可以修改静态方法
var greeter3 = new greeterMaker('bbbbbbb');
console.log(greeter2.greet());
