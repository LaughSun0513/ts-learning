enum Color {
  Red,
  Green,
  Blue
}
let a:Color = Color.Green;

//默认情况下，从 0 开始为元素编号
enum Color2 {
  Red = 1,//修改起始编号
  Green,
  Blue
}
let b:string = Color2[2] //通过编号进行反查，Green




