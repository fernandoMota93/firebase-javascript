let usrCredentials = new User()
const signInForm = document.getElementById('signin-form')


signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    usrCredentials.userLogin()
    signInForm.reset()
})

const controllerTimeOut = () => {
    var seconds = 10
    var now = Date.now()
    const then = now + seconds * 1000
    var count = 0

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (count > 0) {
            return
        }
        if (secondsLeft <= 0) {
            count++
            hideSpinner()
            renderError('500 - Servidor não responde. Internet?')
        }
    }, 1000)
}
