//-------------存取器getter/setter-------------
//首先，存取器要求你将编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3
//其次，只带有 get 不带有 set 的存取器自动被推断为 readonly
let passcode = 'secret passcode'

class Employee {
  constructor(private _fullName: string){}

  get fullName(): string { //2 接下去执行get操作 返回结果
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') { 
      this._fullName = newName
    }
    else { //1如果密码错误 会走这  
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee('AAAA')
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}