//This arrow function create a user on Authentication panel
//Then, store in firestore the user detail and roles
const createUser = () => {
    //new entity instance
    const newUser = new NewUser(
        document.getElementById('email').value,
        document.getElementById('password').value,
        document.getElementById('selectFunction').value,
        document.getElementById('selectRole').value,
        (document.getElementById('selectRank').value + ' ' + document.getElementById('name').value)
    )

    if (newUser.selectFunction == 'Gestor') {
        newUser.selectRole = 'admin'
    } else {
        newUser.selectRole = 'user'
    }

    auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res) => {
            console.log(res.user)

            db.collection('users')
                .add({
                    tokenid: res.user.uid,
                    role: newUser.selectRole,
                    name: newUser.selectName,
                    email: newUser.email,
                    function: newUser.selectFunction
                })

            alert('Usuário criado com sucesso!')
        })
        .catch((err) => {
            if (err.code == 'auth/email-already-in-use') {
                console.log(err.message)
                renderError('Este E-mail já está em uso.')
            }
            if (err.code == 'auth/invalid-email') {
                console.log(err.message)
                renderError('Endereço de E-mail inválido.')
            }
            if (err.code == 'auth/operation-not-allowed.') {
                console.log(err.message)
                renderError('Cadastro desabilitado.')
            }
            if (err.code == 'auth/wrong-password') {
                console.log(err.message)
                renderError('Usuário ou senha inválidos.')
            }
            if (err.code == 'auth/weak-password') {
                console.log(err.message)
                renderError('A senha é muito fraca.')
            }
        })
}


const readAllUsers = () => {
    var dataFromFirestore = []

    db.collection('users')
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().tokenid,
                    doc.data().email,
                    doc.data().name,
                    doc.data().function,
                    doc.data().role
                ])
            })
            //return the dataFromFirestore to view
            return displayDataInTable_Users(dataFromFirestore)

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })
}





//Disable on firestore 
//To complete delete, need to log in firebase panel>Authentication
//parameter comes from onclick="unLockUser('` + id + `')" in opções, rendered by the view
const checkUsrFrst = (id) => {
    db.collection('users').doc(id)
        .get().then((doc) => {
            if (doc.data().tokenid == myId) {
                alert('Este é você! Não é permitido se bloquear')
                refreshPage('CANCELADO')
            } else {
                lockUser(id)
            }
        }).catch((err) => {
            console.log(err)
        })
}

const lockUser = (id) => {
    db.collection('users').doc(id)
        .update({
            role: 'locked'
        }).then(() => {
            alert('USUÁRIO BLOQUEADO. Exclusão permanente apenas no firebase->Authentication')
            location.reload()
        }).catch((err) => {
            console.log(err)
        })

}

const unLockUser = (id) => {
    db.collection('users').doc(id)
        .get().then((doc) => {

            if (doc.data().function != 'Gestor') {
                db.collection('users').doc(id)
                    .update({
                        role: 'user'
                    }).then(() => {
                        refreshPage(id)

                    }).catch((err) => {
                        console.log(err)

                    })
            } else {
                db.collection('users').doc(id)
                    .update({
                        role: 'admin'
                    }).then(() => {
                        refreshPage(id)

                    }).catch((err) => {
                        console.log(err)
                    })
            }
        })
}

const editUser = () => {
    alert('NÃO IMPLEMENTADO')
}