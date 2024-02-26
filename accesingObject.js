const person = {
    name: 'joy',
    age: 23,
    contact: {
        phone: '01628617139',
        email: 'sharier15-14705@diu.edu.bd',
    },
    education: {
        universityName: 'DIU',
        subjects: [
            {name: 'Data Communication', marks: 70},
            {name: 'Statistics', marks: 80},
            {name: 'Artificial Intelligence', marks: 70},
        ],
    },
}
console.log(person.education.subjects[1].name);