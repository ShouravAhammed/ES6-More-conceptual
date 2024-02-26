const petOwner = {
    name: 'khalid Hasan',
    contact: {
        phone: '01787599450',
        email: 'khalid.sr@gmail.com'
    },
    pet:{
        petName: 'Lofie',
        info:{
            color: 'Black',
            weight: '1.4kg',
            item: 'Indonesia'
        },
        food: 10,
    },
}
console.log(petOwner.name?.pet?.food);