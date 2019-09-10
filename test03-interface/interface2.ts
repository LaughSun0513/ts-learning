interface Square {
  color:string,
  area:number
}
//-------可选属性---------
//好处之一:可以对可能存在的属性进行预定义
interface SquareConfig {
  color?:string,
  width?:number
}
function createSquare(config:SquareConfig):Square {
    let newSquare = {
       color:"red",
       area:100
    };
    if(config.color){
      //好处之二:可以捕获引用了不存在的属性时的错误
      newSquare.color = config.clor;
    }
    if(config.width){
      newSquare.area = config.width * config.width
    }
    return newSquare;
}
let mySquare = createSquare({color:"black"});