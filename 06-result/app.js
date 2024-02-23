// const car = {
//     model: 'Tesla',
//     year: 2023,
// }

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

const list = document.querySelector('#list')

async function start() {
    try {
       const resp = await fetch('http://localhost:3000/users')
       const data = await resp.json()
       render(data)   
    } catch (err) {

    }
}


function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>
    `
}


start()


