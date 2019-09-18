"use strict";
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
