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
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
var Clock2 = /** @class */ (function () {
    function Clock2(h, m) {
    }
    Clock2.prototype.setTime = function (d) {
        this.currentTime2 = d;
    };
    return Clock2;
}());
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('beep');
    };
    return AnalogClock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
//会检查 AnalogClock 是否符合构造函数签名
var analog = createClock(AnalogClock, 7, 32);
var mySquare2 = {};
//同时拥有color sideLength俩属性
mySquare2.color = "blue";
mySquare2.sLength = 10;
var createMan = {};
createMan.age = 25;
createMan.sex = 'boy';
createMan.strength = "big";
function getCounter() {
    //一个对象可以同时做为函数和对象使用，并带有额外的属性
    var counter = function (start) { };
    counter.interval = 200;
    counter.reset = function () { };
    return counter;
}
;
var myCounter = getCounter();
myCounter(10);
myCounter.reset();
myCounter.interval = 300;
//-------------------6. 接口继承类---------------------------------
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
//子类，可实现接口实现
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
//子类，可实现接口实现
var Textbox = /** @class */ (function (_super) {
    __extends(Textbox, _super);
    function Textbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textbox.prototype.select = function () { };
    return Textbox;
}(Control));
//并非Control子类，没法实现接口
/*
class ImgaeC implements SelectableControl {
    select(){}
}
*/
