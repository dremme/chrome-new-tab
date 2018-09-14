const days   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec']
const time   = document.getElementById('time')
const date   = document.getElementById('date')
const clock  = document.getElementById('clock')
const second = document.getElementById('second')
const minute = document.getElementById('minute')
const hour   = document.getElementById('hour')

for (let d = 0; d < 360; d += 6) {
    const markContainer = document.createElement('div')
    const mark          = document.createElement('div')

    markContainer.classList.add('mark-container')
    markContainer.style.transform = `rotate(${d}deg)`
    markContainer.appendChild(mark)

    if (d % 90 === 0)      mark.classList.add('mark-big')
    else if (d % 30 === 0) mark.classList.add('mark-small')
    else                   mark.classList.add('mark-mini')

    clock.appendChild(markContainer)
}

const pad = n => n < 10 ? '0' + n : n
const update = () => {
    const now = new Date()
    time.innerHTML = `${pad(now.getHours())}:${pad(now.getMinutes())}`
    date.innerHTML = `${days[now.getDay()]}, ${pad(now.getDate())}. ${months[now.getMonth() - 1]} ${now.getFullYear()}`

    const rotS =          now.getSeconds()      / 60       * 360
               + Math.sin(now.getMilliseconds() * 0.00157) *   6
    
    const rotM = now.getMinutes() / 60 * 360
               + now.getSeconds() / 60 *   6

    const rotH = now.getHours() % 12 / 12 * 360
               + now.getMinutes()    / 60 *  30

    second.style.transform = `rotate(${rotS}deg)`
    minute.style.transform = `rotate(${rotM}deg)`
    hour.style.transform   = `rotate(${rotH}deg)`
}

update()
setInterval(update, 1)