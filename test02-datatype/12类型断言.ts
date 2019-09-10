let someValue:any = 'this is a string';
let strLen:number = (<string>someValue).length; //强制转换为字符，写法一，尖括号
let strLen2:number = (someValue as string).length;//写法二，as
