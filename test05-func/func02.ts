//---------可选参数和默认参数--------------
//---------------1 参数过少或过多情况-----------------------------------
function buildName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

//let result1 = buildName('Bob')                  // Error, 参数过少
//let result2 = buildName('Bob', 'Adams', 'Sr.');  // Error, 参数过多
let result3 = buildName('Bob', 'Adams');         // OK

//-----------------2 使用 ? 实现可选参数的功能-----------------------------
function buildName2(firstName: string, lastName?: string): string {
  if (lastName)
    return firstName + ' ' + lastName
  else
    return firstName
}

let result4 = buildName2('Bob');  // 现在正常了
//let result5 = buildName2('Bob', 'Adams', 'Sr.')  // Error, 参数过多
let result6 = buildName2('Bob', 'Adams')  // OK


//------------------3 有默认初始化值的参数----------------------------

function buildName3(firstName: string, lastName = 'Smith'): string {
  return firstName + ' ' + lastName
}

let result7 = buildName3('Bob')                  // 返回 "Bob Smith"
let result8 = buildName3('Bob', undefined)     // 正常, 同样 "Bob Smith"
//let result9 = buildName3('Bob', 'Adams', 'Sr.')  // 错误, 参数过多
let result10 = buildName3('Bob', 'Adams')        // OK


//------------------4 带默认值的参数不需要放在必须参数的后面----------------------------
function buildName4(firstName = 'Will', lastName: string): string {
  return firstName + ' ' + lastName
}

//let result11 = buildName4('Bob')                  // Error, 参数过少
//let result12 = buildName4('Bob', 'Adams', "Sr.")  // Error, 参数过多
let result13 = buildName4('Bob', 'Adams')         // OK， 返回 "Bob Adams"
let result14 = buildName4(undefined, 'Adams')     // OK，  返回 "Will Adams"