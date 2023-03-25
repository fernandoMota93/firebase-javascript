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


//This arrow function create a user on Authentication panel
//Then, store in firestore the user detail and roles
const createUser = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const selectFunction = document.getElementById('selectFunction').value
    const selectRole = document.getElementById('selectRole').value
    const selectName = document.getElementById('selectRank').value + ' ' + document.getElementById('name').value

    if (selectFunction == 'Gestor') {
        selectRole = 'admin'
    } else {
        selectRole = 'user'
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user)

            db.collection('users')
                .add({
                    tokenid: res.user.uid,
                    role: selectRole,
                    name: selectName,
                    email: email,
                    function: selectFunction
                })

            alert('Usuário criado com sucesso!')
        })
        .catch((err) => {
            if (err.code == 'auth/email-already-in-use') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Este E-mail já está em uso.')
            }
            if (err.code == 'auth/invalid-email') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Endereço de E-mail inválido.')
            }
            if (err.code == 'auth/operation-not-allowed.') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Cadastro desabilitado.')
            }
            if (err.code == 'auth/wrong-password') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'Usuário ou senha inválidos.')
            }
            if (err.code == 'auth/weak-password') {
                console.log(err.message)
                throw new Error(showError.innerHTML = 'A senha é muito fraca.')
            }
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