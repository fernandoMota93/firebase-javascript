const signInForm = document.getElementById('signin-form')
const showError = document.getElementById('showError')

const userLogin = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    let loadSpinner = document.getElementById('loadSpinner')

    loadSpinner.style.display = 'block'
    timeOut()

    auth.signInWithEmailAndPassword(username, password)
        .then((res) => {
            loadSpinner.style.display = 'none'
            db.collection('users').where('email', '==', res.user.email)
                .get()
                .then((query) => {
                    if (query.docs.length == 0) {
                        throw new Error(showError.innerHTML = 'Usuário não está no conjunto de regras. ')
                    }
                    query.forEach(function (doc) {
                        if (doc.data().role == 'admin') {
                            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //persist SESSION while tab is open
                            window.location = '../admin/'
                        } else {
                            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //persist SESSION while tab is open
                            window.location = '../dashboard/'
                        }
                    })
                }).catch(() => {
                    throw new Error()
                })
            //handlers da documentação
            //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword    
        })
        .catch((err) => {
            if (err.code == 'auth/user-disabled') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Usuário desabilitado')
            }
            if (err.code == 'auth/invalid-email') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Endereço de e-mail inválido.')
            }
            if (err.code == 'auth/user-not-found') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'E-mail do usuário não encontrado.')
            }
            if (err.code == 'auth/wrong-password') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Usuário ou senha errado. Tente novamente.')
            }
            if (err.code == 'auth/too-many-requests') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Muita tentativa de login para este E-mail. Aguarde um momento antes de tentar novamente!')
            }
            if (err.code == 'net::ERR_NAME_NOT_RESOLVED') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Servidor não responde. Internet?')
            }
        })
}

function timeOut() {
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
            loadSpinner.style.display = 'none'
            count++
            throw new Error(showError.innerHTML = '500 - Servidor não responde. Internet?')  
        }
    }, 1000)
}

signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    signInForm.reset()
})
