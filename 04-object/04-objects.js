const person = {
    name: 'Robi',
    age: 25,
    isYoutube: true,
    language: ['ru', 'en'],
    adress: {
        city : 'Tbilisi',
        street: 'Sanzona'
    },
    'complex key': 'complex',
    [1 + 2]: 'computed value',
    greet() {
        console.log('greet from person', this)
    },
    arrow: () => {
        console.log('person arrow', this)
    },
    info() {
        console.log('persno name', this.name)
    },
}

// console.log(person)
// person.greet()
// person.arrow()
// console.log(person.adress)


// person.age++
// person.language.push('de')     //damateba 

// console.log(person.language)

// person.adress = undefined
// delete person.adress

// console.log(person)

// ==Destructoring

// const age = person.age
// const name = person.name
// const language = person.language

// const name = 'JDdd'

// const {age, name: firstName = 'Test', language} = person    //im shemtxvevashi roca name gvaq eg firstname daignordeba

// console.log(language, age, name)

// for (let key in person) {
//     if(person.hasOwnProperty(key)) {
//     console.log(person[key])

// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// })

const logger = {
    keys(whithText = true) {
        if (whithText) {
            console.log('Object keys', Object.keys(this)) 
        } else {
            console.log(Object.keys(this))
        }
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
                console.log('Key:',  key)
                console.log('Value:', this[key])
            })
    }
    }

    // const bound = logger.keys.bind(person)
    // bound()

    // logger.keys.call(person, false)
    // logger.keys.apply(person, [false])


    class Human {
        static isHuman = true

        humanGreet() {
            console.log('greet from humam')
        }

        toString() {
            console.log('to string')
        }
    }

    class Person extends Human {
        constructor(name, age) {
            super()
            this.name = name ?? 'Underfined name'
            this.age = age ?? 'Underfined age'
        }

        sayHello() {
            console.log('Hello from', this.name)
        }
    }

    const person1 = new Person('Robi', 25)
    const person2 = new Person('Elena', 21)

    // person1.sayHello()
    // person2.sayHello()
    
    // console.log(Person. isHuman)