"use strict";
//----------4 公共修饰符public / 私有修饰符 private / 受保护的修饰符protected / readonly ----------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//----  公共修饰符public ----
//成员都默认为 public
//也可以显示定义
var Animal4 = /** @class */ (function () {
    function Animal4(name) {
        this.name = name;
    }
    Animal4.prototype.move = function (distance) {
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal4;
}());
//---- 私有修饰符 private ----
// 1 私有属性无法被外部访问
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    return Animal5;
}());
// new Animal5('Cat').name; //name是私有的，无法在外部访问
//2 私有属性只有继承的派生类可以使用 非派生类无法使用
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        var _this = _super.call(this, name) || this;
        console.log('wangwang');
        return _this;
    }
    return Dogs;
}(Animal5));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var animal = new Animal5('xiaohuang'); // Dogs继承Animal5，可以共有name属性
var oneDog = new Dogs();
var onePerson = new Person('xiaoming');
animal = oneDog; //派生类Dogs 可以和 Animal5 互相兼容
// animal = onePerson; // Error: Person有自己的私有属性，和Animal5相互冲突，互相不兼容
//---- 受保护的修饰符protected ----
// 1 受保护的属性只能在派生类中使用，但是不能在外部访问
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Teacher.prototype.getJob = function () {
        return "My name is " + this.name + " and I work in " + this.department; //这里可以访问name
    };
    return Teacher;
}(Person2));
var oneTeach = new Teacher('Ms Li', 'middle school');
console.log(oneTeach.getJob());
// console.log(oneTeach.name); Error name属性可以在派生类Teacher中使用，但是不能在外部访问
// ---- 构造函数也可以被标记成 protected -------
// 2 受保护的构造函数只能在派生类中使用，但是不能在外部实例化new
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    return Person3;
}());
var Teacher2 = /** @class */ (function (_super) {
    __extends(Teacher2, _super);
    function Teacher2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Teacher2.prototype.getJob = function () {
        return "My name is " + this.name + " and I work in " + this.department;
    };
    return Teacher2;
}(Person2));
var twoTeach = new Teacher('Ms Zhang', 'middle school');
// let john = new Person3('John'); //Error : 'Person' 的构造函数是被保护的,只能继承，没法实例化
// ---- readonly -------
var Person4 = /** @class */ (function () {
    function Person4(name) {
        this.name = name;
    }
    return Person4;
}());
var john = new Person4('John');
//john.name = 'peter' //name 只读
var Person5 = /** @class */ (function () {
    function Person5(name) {
        this.name = name;
    }
    return Person5;
}());
