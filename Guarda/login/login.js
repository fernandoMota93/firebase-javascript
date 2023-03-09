const signInForm = document.getElementById('signin-form')
const showError = document.getElementById('showError')

const manageLogins = () => {
    const username = document.getElementById('username').value
    username.includes('@') ? adminlogin() : userLogin()

}

const adminlogin = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(username, password)
        .then((res) => {
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //persistência em tempo de
            console.log(res.user)
            window.location = '../admin/'

            //handlers da documentação
            //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword    
        })
        .catch((err) => {
            if (err.code == 'auth/user-disabled') {
                console.log(err.message)
                throw new Error('Usuário desabilitado')
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
        })
}


const userLogin = () => {
    const usernameInput = document.getElementById('username').value
    const passwordInput = document.getElementById('password').value

    db.collection('users').where('user', 'in', [usernameInput])
        .get()
        .then((usrLog) => {
            if (usrLog.docs.length != 1) {
                throw new Error(showError.innerHTML = 'Usuário não existe')
            }
            usrLog.forEach((doc) => {
                if (passwordInput == doc.data().password) {
                    auth.signInAnonymously()
                        .then(() => {
                            window.location = '../dashboard/'
                        })
                        .catch((error) => {
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            console.error(errorCode, ': ',errorMessage)
                        });
                } else {
                    throw new Error(showError.innerHTML = 'Senha inválida')
                }
            })
        })
        .catch((error) => {
            console.log('Erro ao retornar usuário: ', error)
        })
}



//deixa aqui caso nao consiga por usr/pss simples
const userLogin1 = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(username, password)
        .then((res) => {
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
            console.log(res.user)
            window.location = '../dashboard/'

            //handlers da documentação
            //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword    
        })
        .catch((err) => {
            if (err.code == 'auth/user-disabled') {
                console.log(err.message)
                throw new Error('Usuário desabilitado.')
            }
            if (err.code == 'auth/invalid-email') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Endereço de e-mail inválido.')
            }
            if (err.code == 'auth/user-not-found') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'E-mail encontrado.')
            }
            if (err.code == 'auth/wrong-password') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Usuário ou senha inválidos.')
            }
            if (err.code == 'auth/too-many-requests') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Muita tentativa de login para este E-mail. Aguarde um momento antes de tentar novamente!')
            }
        })
}

signInForm.addEventListener('submit', (e) => {
    e.preventDefault()
    signInForm.reset()
})
