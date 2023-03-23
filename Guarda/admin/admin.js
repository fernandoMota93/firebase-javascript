
const showError = document.getElementById('showError')
//Verify user validation and session Firebase DOCS
let myId = ''
auth.onAuthStateChanged(function (user) {
    myId = user.uid
    try {
        db.collection('users')
            .where('email', '==', user.email)
            .get()
            .then(function (query) {
                query.forEach(function (doc) {
                    if (!doc.exists) {
                        throw new Error(showError.innerHTML = 'Usuário não está no conjunto de regras. ')
                    }
                    if (doc.data().role == 'admin') {
                        console.log('admin logado')

                    } else { window.location = '../login/login.html' }
                })
            })
    } catch (error) {
        window.location = '../login/login.html'
        throw new Error(alert('401 - Desconectado.', error))
    }
})


/***********   CREATE USER PART START   ***************/
const registerUser = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const selectFunction = document.getElementById('selectFunction').value
    var selectRole = document.getElementById('selectRole').value
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
/***********   CREATE USER PART END   ***************/


/***********   READ PART START   ***************/
const readAllUsers = () => {
    var dataFire = []

    db.collection('users')
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFire.push([
                    doc.id,
                    doc.data().tokenid,
                    doc.data().email,
                    doc.data().name,
                    doc.data().function,
                    doc.data().role
                ])
            })

            return displayDataInTable_Users(dataFire)

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })
}

//function displayDataInTable transform each pair into html text
function displayDataInTable_Users(dataFire) {
    let table = document.getElementById('userTable')

    dataFire.forEach((doc) => {
        let row = table.insertRow()
        row.setAttribute('id', 'row')

        Object.keys(doc).forEach((key) => {
            let cell = row.insertCell()
            cell.innerHTML = doc[key]
        })
        //document id for UPDATE BUTTON
        let id = row.children[0].innerHTML

        //this remove the "document id" from html component, user don´t need to know.
        row.deleteCell(0)
        row.deleteCell(0)


        //After get the data row from firestore, create option panel for the last coll
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        let td = document.createElement('td')

        if (row.lastElementChild.innerText == 'locked') {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" onclick="unLockUser('` + id + `')" class="btn btn-warning mb-1"><i class="fa fa-unlock"></i></button>
                <button type="button" id="`+ id + `" onclick="editUser('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-pencil"></i></button>
                `
        } else {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" onclick="checkUsrFrst('` + id + `')" class="btn btn-danger mb-1"><i class="fa fa-lock"></i></button>
                <button type="button" id="`+ id + `" onclick="editUser('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-pencil"></i></button>
                `
        }

        insertAfter(td, row.lastElementChild)
    })
}
//Load all the data in table after get and format from firestore
document.body.onload = readAllUsers()
/***********   READ PART END   ***************/


/***********   DISABLE PART START   ***************/
//Delete from oauth online in firebase console

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
            alert('USUÁRIO BLOQUEADO. EXCLUSÃO PERMANENTE APENAS GESTOR DO BANCO')
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
/***********   UPDATE PART END   ***************/

const editUser = () =>{
    alert('NÃO IMPLEMENTADO')
}

/***********   UPDATE PART END   ***************/



//timeout
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time')
    autoLogout(fiveMinutes, display);
}


function autoLogout(duration, display) {
    var timer = duration, minutes, seconds

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds

        if (--timer < 0) {

            auth.signOut().then(() => {

                window.location = '../login/login.html'

            }).catch((error) => {
                console.log(error)
            })
        }
    }, 1000)
}