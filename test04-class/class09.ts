//-----------高级技巧2 把类当做接口使用---------------
//类定义会创建两个东西：类的实例类型和一个构造函数
class Point {
  x?: number
  y?: number
}
//因为类可以创建出类型，能够在允许使用接口的地方使用类
interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}