//----------instanceof 类型保护------------------
class Bird {
    fly() {
        console.log('bird fly')
    }

    layEggs() {
        console.log('bird lay eggs')
    }
}

class Fish {
    swim() {
        console.log('fish swim')
    }

    layEggs() {
        console.log('fish lay eggs')
    }
}

function getRandomPet() {
    return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet2 = getRandomPet()
//instanceof 类型保护是通过构造函数来细化类型的一种方式
if (pet2 instanceof Bird) {
    pet2.fly()
}
if (pet2 instanceof Fish) {
    pet2.swim()
}