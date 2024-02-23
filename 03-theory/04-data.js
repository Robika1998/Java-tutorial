// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)

// const date = new Date(2011, 0, 4)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

// now.setFullYear(2055)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())


//==================-------=========

let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


function bindMode(name) {
    return function() {
        mode = name
        update()               ///es funqcia amoklebs qveda kodebs da aertianebs
    }
}

fullBtn.onclick = bindMode('full')
                                           ////es ori shemoklebuli varianti
dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

// timeBtn.onclick = function() {
//     mode = 'time'
//     update()
// }

setInterval(update, 1000)
update()

function update() {
    output.textContent = format(mode)
}


// ==pure function
function format(formatMode) {
    const now = new Date()

   switch (formatMode) {
    case'time': 
        return now.toLocaleTimeString()
    case 'date':
        return now.toLocaleDateString()
    case 'full':
        return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()  
    default:
            return now.toLocaleTimeString()
    }
}