//------额外属性检查如何跳过----------
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any //2 可以跳过检查的方式之二，修改索引签名，表示可以有任意数量的属性，并且只要它们不是 color 和 width，那么就无所谓它们的类型是什么
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

//let mySquare2 = createSquare2({ colour: 'red', width: 100 } );//colour拼写错误
//---------1 可以跳过检查的方式之一  as法----------
//let mySquare3 = createSquare2({ colour: 'red', width: 100 } as SquareConfig); 

//---------3 跳过方式三：将这个对象赋值给一个变量： 因为 squareOptions 不会经过额外属性检查，所以编译器不会报错--------
let squareOptions = { colour: 'red', width: 200 }
let mySquare4 = createSquare2(squareOptions);