const body = document.querySelector('body')
let theme = window.localStorage.getItem('theme')

if(theme === 'dark'){
    body.classList.add('dark')
}
else {
    body.classList.remove('dark')
}