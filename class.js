// class definition: class is a blueprint for creating a object with shared properties

// class Animal {
//     name = 'ABC';
//     color = 'Black';
//     show(){
//         console.log('hello');
//     }
// }
// const cat = new Animal();
// console.log(cat.color);
// cat.show()

// using class, dynamic object create
class Animal{
    name;
    color;
    constructor(petName, petColor){
        this.name = petName;
        this.color = petColor;
    }
    showInfo(){
        console.log(`My dog name is ${this.name}, color is ${this.color}`);
    }
}
const cat = new Animal('travis', 'black');
console.log(cat.name);
console.log(cat.color);
console.log(cat);

const dog = new Animal('Tom', 'red');
console.log(dog);
dog.showInfo()