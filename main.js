let count = 0
const h1 = document.querySelector('h1')
const btn = document.querySelector('button')
const counting = setTimeout(() => {
    h1.innerHTML = 'Het gio'
}, 5000)

btn.addEventListener('click', () => {
    clearTimeout(counting)
    h1.innerHTML = 'Finish'
})





