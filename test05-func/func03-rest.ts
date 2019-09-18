//------------剩余参数---------------------
//可以把所有参数收集到一个变量
//剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个
function buildName(firstName: string, ...restOfName: string[]): string { //...restOfName: string[]
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')


//---------------会在带有剩余参数的函数类型定义上使用到-----------------------
function buildName2(firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2