const names = ['Robi', 'Gio', 'Ksenia', 'Igoru']

// names.push('Alena')
// names.unshift('Alena')

// const firstName = names.shift()
// const name = names.pop()

// console.log('Names: ', names, name)


// console.log(names.reverse())
// const reversed = names.toReversed()

// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.splice(0, 2))
// console.log(names.toSpliced(0, 2))
// console.log(names)

// const greatWoman = 'Ksenia'
// const index = names.indexOf(greatWoman)
// console.log(index) 
// const newNames = names.with(index, 'Ksenia big')                          //rogor shegvidzlia shevcvalot satitaod elementi da vipovot
// names[index] = 'Ksenia Big'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function
//     (name, index) {
//        if (index === 1) {
//         return 'Ksenia Big'
//        }
//        return name
// })                               //map kooveltvis abrunebs ukan sawkis masivs 

// console.log(capitalNames)

// console.log(names.includes('Igoru'))
// console.log(names.indexOf('Igoru') !== -1)

const people = [
    {name: 'Robi', budget: 4200},
    {name: 'Gio', budget: 15100},
    {name: 'Ksenia', budget: 300},
    {name: 'Igoru', budget: 7520},
]

// let findedPerson

// for (let person of people) {
//   if (person.budget === 7520) {
//     findedPerson = person
//   }
// }

// const finded = people.find(function
//     (person) {
//         return person.budget === 7520
// }) 
// const finded = people.find((p) => p.budget === 7520)          //shemoklebuli varianti zeda kodis

// const finded = people.findIndex(function
//     (person) {
//         return person.budget === 7520
// }) 


// console.log(people.with(finded, 42))        

// let sumBudget = 0 
// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })                                                  // visac 5000 ze metiaqvs magat gamokofs
// console.log(filtered)
// filtered.forEach(function(p) {
//   sumBudget = sumBudget + p.budget
// })


const sumBudget = people

console.log(sumBudget)

