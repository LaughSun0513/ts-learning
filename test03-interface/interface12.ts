//-------------------6. 接口继承类---------------------------------
class Control {
  private state:any
}
//当接口继承了一个类类型时，它会继承类的成员但不包括其实现
//接口声明了所有类中存在的成员，但并没有提供具体实现一样
//接口同样会继承到类的 private 和 protected 成员
//这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
interface SelectableControl extends Control { //SelectableControl 包含了 Control 的所有成员，包括私有成员 state
  select():void
}

//子类，可实现接口实现
class Button extends Control implements SelectableControl { //Button是Control的子类，可以实现
    select(){}
}
//子类，可实现接口实现
class Textbox extends Control {
    select(){}
}

//并非Control子类，没法实现接口
/*
class ImgaeC implements SelectableControl {
    select(){}
}
*/

