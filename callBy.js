const x = 5;
const y = [10, 20, 40];

// call by value and primitive
const modify = (a)=>{
    a = a+2;
    console.log(a);
}
modify(x);

// call by reference and non primitive
const modify2 = (a)=>{
    a.push(25)
    console.log(a);
}
modify2(y);
