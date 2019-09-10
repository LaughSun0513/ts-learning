"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = {
    size: 10,
    label: 'Size 10 Object'
};
printLabel(myObj);
function printLabel2(labelObj) {
    console.log(labelObj.label);
}
var myObj2 = {
    size: 11,
    label: 'Size 11 Object'
};
printLabel2(myObj2);
