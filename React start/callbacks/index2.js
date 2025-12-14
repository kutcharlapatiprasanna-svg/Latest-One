function hello(n,fun1){
    console.log("start of function",fun1)
    console.log(n);;
    fun1();
    console.log("end of function")
}

let a = 1;

let sum = (x,y) =>{
    // console.log(x+y);
}

hello(a,()=>sum(8,2));