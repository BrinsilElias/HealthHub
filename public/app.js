const rows = document.querySelectorAll('.row')
const toggle = document.querySelector('#switch')
const body = document.querySelector('body')

window.localStorage.setItem('theme', 'light')

// if(theme === 'dark'){
//     body.classList.add('dark')
// }
// else {
//     body.classList.remove('dark')
// }

rows.forEach(row => {
    row.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('expand')
    })
});

toggle.addEventListener('click', () => {
    body.classList.toggle('dark')
    if(body.classList.contains('dark') === true) {
        window.localStorage.setItem('theme', 'dark')
    }
    else {
        window.localStorage.setItem('theme', 'light')
    }
})