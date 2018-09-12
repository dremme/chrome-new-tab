const days   = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec']
const time   = document.getElementById('time')
const date   = document.getElementById('date')

const pad = n => n < 10 ? '0' + n : n

const update = () => {
    const now = new Date()
    time.innerHTML = `${pad(now.getHours())}:${pad(now.getMinutes())}`
    date.innerHTML = `${days[now.getDay()]}, ${pad(now.getDate())}. ${months[now.getMonth() - 1]} ${now.getFullYear()}`
}

update()
setInterval(update, 1000)
