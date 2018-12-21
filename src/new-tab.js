const suffix    = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th']
const days      = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months    = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec']
const greetings = ['Good early morning!', 'Good morning!', 'Good day!', 'Good afternoon!', 'Good evening!', 'What a wonderful night!']
const time      = document.getElementById('time')
const date      = document.getElementById('date')
const greeting  = document.getElementById('greeting')
const clock     = document.getElementById('clock')
const second    = document.getElementById('second')
const minute    = document.getElementById('minute')
const hour      = document.getElementById('hour')

for (let d = 0; d < 360; d += 6) {
    const markContainer = document.createElement('div')
    const mark          = document.createElement('div')

    markContainer.classList.add('mark-container')
    markContainer.style.transform = `rotate(${d}deg)`
    markContainer.appendChild(mark)

    if      (d % 90 === 0) mark.classList.add('mark-big')
    else if (d % 30 === 0) mark.classList.add('mark-small')
    else                   mark.classList.add('mark-mini')

    clock.appendChild(markContainer)
}

const pad = n => `${n < 10 ? '0' : ''}${n}`
const getSuffix = n => suffix[n >= 11 && n <= 13 ? 0 : n % 10]
const update = () => {
    const now = new Date()

    let g
    if      (now.getHours() >=  3 && now.getHours() <  6) g = greetings[0] // Good early morning
    else if (now.getHours() >=  6 && now.getHours() < 12) g = greetings[1] // Good morning
    else if (now.getHours() >= 12 && now.getHours() < 14) g = greetings[2] // Good day
    else if (now.getHours() >= 14 && now.getHours() < 18) g = greetings[3] // Good afternoon
    else if (now.getHours() >= 18 && now.getHours() < 22) g = greetings[4] // Good evening
    else if (now.getHours() >= 22 || now.getHours() <  3) g = greetings[5] // Good night
    greeting.innerHTML = g

    time.innerHTML = `${pad(now.getHours())}:${pad(now.getMinutes())}`
    date.innerHTML = `${days[now.getDay()]}, ${now.getDate()}<sup>${getSuffix(now.getDate())}</sup> ${months[now.getMonth() - 1]} ${now.getFullYear()}`

    const s =          now.getSeconds()      / 60       * 360
            + Math.sin(now.getMilliseconds() * 0.00157) *   6
    
    const m = now.getMinutes() / 60 * 360
            + now.getSeconds() / 60 *   6

    const h = now.getHours() % 12 / 12 * 360
            + now.getMinutes()    / 60 *  30

    second.style.transform = `rotate(${s}deg)`
    minute.style.transform = `rotate(${m}deg)`
    hour.style.transform   = `rotate(${h}deg)`
}

update()
setInterval(update, 1)
