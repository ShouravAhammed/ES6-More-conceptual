// global scope
// block scope
// local scope or functional scope


// Global scope

// const y = 10;
// if(true){
//     console.log(y);
// }



// block scope (let or const) but (var) .

{
    const y = 20;
    console.log(y);
    var a = 30;
}
console.log(a);

// functional scope function outside the variable declare are not working but function inside the variable is working

function age(){
    const i = 2;
    console.log(i);
}
age();
