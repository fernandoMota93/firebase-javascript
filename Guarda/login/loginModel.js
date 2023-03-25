const userLogin = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    //call view to render login spinner
    renderSpinner()
    //call control to count the timeout
    controllerTimeOut()

    auth.signInWithEmailAndPassword(username, password)
        .then((res) => {
            loadSpinner.style.display = 'none'
            db.collection('users').where('email', '==', res.user.email)
                .get()
                .then((query) => {
                    if (query.docs.length == 0) {
                        renderError('Usuário não está no conjunto de regras. ')
                    }
                    query.forEach(function (doc) {
                        if (doc.data().role == 'admin') {
                            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //persist SESSION while tab is open
                            window.location = '../admin/'
                        }
                        if (doc.data().role == 'user') {
                            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION) //persist SESSION while tab is open
                            window.location = '../dashboard/'
                        }
                        else {
                            renderError('Acesso negado! É provavel que seu acesso foi revogado por um administrador. Papel funcional: ' + doc.data().role.toUpperCase())
                        }
                    })
                }).catch(() => {
                    throw new Error()
                })
            //handlers from documentation
            //https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#signinwithemailandpassword    
        })
        .catch((err) => {
            if (err.code == 'auth/user-disabled') {
                console.log(err.message)
                hideSpinner()
                renderError('Usuário desabilitado')
            }
            if (err.code == 'auth/invalid-email') {
                console.log(err.message)
                renderError('Endereço de e-mail inválido.')
            }
            if (err.code == 'auth/user-not-found') {
                console.log(err.message)
                hideSpinner()
                renderError('E-mail do usuário não encontrado.')
            }
            if (err.code == 'auth/wrong-password') {
                console.log(err.message)
                hideSpinner()
                renderError('Usuário ou senha errado. Tente novamente.')
            }
            if (err.code == 'auth/too-many-requests') {
                console.log(err.message)
                hideSpinner()
                renderError('Muita tentativa de login para este E-mail. Aguarde um momento antes de tentar novamente!')
            }
            if (err.code == 'net::ERR_NAME_NOT_RESOLVED') {
                console.log(err.message)
                hideSpinner()
                renderError('Servidor não responde. Internet?')
            }
        })
}