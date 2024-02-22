/*========Theoryy

 const array = [1, 2, 3, 5, 20, 42,]
  const arrayStrings = ['a', 'b', 'c', null, 12]
  const array = new Array (1, 2, 3, 5, 20, 42)

  console.log(array.length) //masivis raodenoba
 console.log(array[0])   //amit gamoaqvs 1 iani
 console.log(array[array.length - 1])

 array[0] = 'salami'  //index 0 gaxda salami
 console.log(array)array[array.length] = 'becon'
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)  value meshveobit davamatebt inputshi 

// const notes = ['add masicvegvds', 'dsfsdgsgsdgs', 42]

// function render() {

//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i])) 
//     // }

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note))  ///es zeda kods amoklebs da msgavsadac sheidzleba
//     }

//     // listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[0])) 
//     // listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[1]))    //indexsi satitaod ro ar daiweros shesabamisad zeda kodit yveals eniweba
// }

// render()



// createBtn.onclick = function() {                                                            
//     // listElement.innerHTML = inputElement.value //gamoitana is rac davweret
//     if(inputElement.value.length === 0) {
//       return 
//     }

//      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
//      inputElement.value = ''                                                                         

// }            
                                                  //am kodis meshveobit vamatebt listshi , ar amatebs cariels lists,

// function getNoteTemplate(title) {
//     return `
//     <li class="list-group-item d-flex justify-content-between align-items-center">                    
//     <span class="text-dark" >${title}</span>
//     <span>
//         <span class="btn btn-small btn-success" >&check;</span>                                 
//         <span class="btn btn-small btn-danger">&times;</span>
//     </span>
// </li> 
// `
// }



//=====Object Theory

// const person = {
//     firstName: 'Robi',
//     lastName: 'Begi',
//     year: 1998,
//     hasGirlfriend: false,
//     languange: ['ru', 'en', 'de'],
//     getFullName: function() {
//         console.log(person.firstName + ' ' + person.lastName)
//     },
// }

// console.log(person.year)
// console.log(person['languange'])
// const key = 'hasGirlfriend'
// console.log(person[key])
// person.hasGirlfriend = true
// console.log(person[key])
// person.getFullName()



const notes = [
    {
    title: 'ergheiurhegi',
    completed: false,
}, 
  {
    title:'dsfsdgsgsdgs',
    completed: true,
 },
]


function render() {
    listElement.innerHTML = ''
    if (notes.length === 0) {
        listElement.innerHTML = '<p>No Element</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i], i)) 
    }



}

render()

createBtn.onclick = function() {                                                            
    if(inputElement.value.length === 0) {
      return 
    }
    const newNote = {
        title: inputElement.value ,
        completed: false,
    }

     notes.push(newNote)
     render()
     inputElement.value = ''                                                                         

} 

    listElement.onclick = function (event) {
      if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed   //tu marjvena gveqneba true gadaertveba falseze
        }else if (type === 'remove') {
            notes.splice(index, 1)         //amis meshveobit shegvidzlia wavshalot 
        }

        render()
    }
}

function getNoteTemplate(note, index) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-center">                    
    <span class="text-dark ${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
        <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>                                 
        <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
    </span>
</li> 
`
}

