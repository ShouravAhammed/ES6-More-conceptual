// simple 
function a(){
    console.log('hello');
}
function b(callback){
    callback()
}
b(a);



function show(name, age){
    console.log('Name:', name, 'age:', age);
}
function fun1(name, age, callback){
    console.log('first function');
    // set timeout function
    setTimeout(()=>{
        callback(name, age)
    }, 2000)
}
fun1('khalid Hasan', 25, show);