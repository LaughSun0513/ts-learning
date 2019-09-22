//----------联合类型2--------------
//如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {
    return
}

let pet = getSmallPet()
pet.layEggs() // okay
//pet.swim()    // error


//-------------类型保护----------------------
//方式1:为了让其运行，可以使用类型断言(type assertion)
if ((pet as Fish).swim) {
    (pet as Fish).swim()
} else {
    (pet as Bird).fly()
}

//方式2:用户自定义的类型保护(User-Defined Type Guards) 写一个函数判断类型 
// 使用到类型谓词 谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名
function isFish(pet: Fish | Bird): pet is Fish { //使用到类型谓词pet is Fish 
    return (pet as Fish).swim !== undefined;
}
if (isFish(pet)) {
    pet.swim()
} else {
    pet.fly()
}

//方式3:使用in
function move(){
    if("swim" in pet){
       return pet.swim();
    }
    return pet.fly();
}
move()