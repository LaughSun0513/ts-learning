//------------字符串字面量类型-------------------
//字符串字面量类型允许你指定字符串必须具有的确切值
//在实际应用中，字符串字面量类型可以与联合类型，类型保护很好的配合。通过结合使用这些特性，你可以实现类似枚举类型的字符串

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIEle {
    animate(dx:number,dy:number,easing:Easing){
        if(easing==="ease-in"){

        }else if (easing==="ease-out") {
            
        }else if(easing==="ease-in-out"){

        }else{

        }
    }
}
let newEle = new UIEle();
newEle.animate(0,0,'ease-in');
//newEle.animate(0,0,'unease');
