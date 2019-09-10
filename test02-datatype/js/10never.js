"use strict";
function error(str) {
    throw new Error(str);
}
function fail() {
    return error('404');
}
//无限循环
function inifiniteLoop() {
    while (true) {
    }
}
