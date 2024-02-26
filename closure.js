const outerFunction = () => {
    let count = 0;
    const counter = () =>{
        count++;
        console.log('count:', count);
    }
    return counter;
}
const x = outerFunction();
x();
x();
x();
x();
