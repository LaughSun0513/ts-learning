//-----------可选参数和可选属性-----------------
//-----------可选参数-------------------------
//使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function test(x: number, y?: number) {
    return x + (y || 0)
}
test(1,2);
test(1);
test(1,undefined);
test(1,null);// error, 'null' 不能赋值给 'number | undefined'


//-----------可选属性-------------------------
class C {
    a:number
    b?:number
}
let c1 = new C();
c1.a =12;
c1.a = undefined; //error, 'undefined' 不能赋值给 'number'

c1.b=13
c1.b=undefined;//ok
c1.b=null;// error, 'null' 不能赋值给 'number | undefined'

