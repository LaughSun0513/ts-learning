function error(str:string):never {
    throw new Error(str);
}
function fail(){
  return error('404');
}

//无限循环
function inifiniteLoop():never {
  while(true){

  }
}
