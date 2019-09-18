"use strict";
//------------3.类  静态部分与实例部分的区别---------------
// constructor 存在于类的静态部分，所以不在检查的范围内
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
        console.log('yoyoyo');
    };
    return AnalogClock;
}());
//第一个参数会去检查整个类的静态部分
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var digital = createClock(DigitalClock, 12, 17);
//会检查 AnalogClock 是否符合构造函数签名
var analog = createClock(AnalogClock, 7, 32);
