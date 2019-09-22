//---------最佳通用类型-------------
class Animal {
    numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}

let zoo = [new Bee(), new Lion()];//这里默认类型推断的结果为联合数组类型，(Bee | Lion)[]

//这里，我们想让 zoo 被推断为 Animal[] 类型，但是这个数组里没有对象是 Animal 类型的，因此不能推断出这个结果。 
//为了更正，我们可以明确的声明我们期望的类型
let zoo2:Animal[] = [new Bee(), new Lion()];
