//-----------------5. 混合类型-------------------------
interface Counter {
    (start:number):string
    interval:number
    reset():void
}
function getCounter():Counter {
  //一个对象可以同时做为函数和对象使用，并带有额外的属性
  let counter = function(start:number){} as Counter; //既是函数也是对象
  counter.interval = 200;
  counter.reset = function(){}
  return counter;
};
let myCounter = getCounter();
myCounter(10);
myCounter.reset();
myCounter.interval = 300;



