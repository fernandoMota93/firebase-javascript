
//Verify user session Firebase DOCS
auth.onAuthStateChanged(function(user) {
    if (user) {
     console.log('Usuario logado')
    } else {
     window.location = '../login/login.html'
    }
  })


//Create Admin User
const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        if (err.code == 'auth/email-already-in-use') {
            console.log(err.message)
            throw new Error('Este E-mail já está em uso.')
        }
        if (err.code == 'auth/invalid-email') {
            console.log(err.message)
            throw new Error('Endereço de E-mail inválido.')
        }
        if (err.code == 'auth/operation-not-allowed.') {
            console.log(err.message)
            throw new Error('Cadastro desabilitado.')
        }
        if (err.code == 'auth/wrong-password') {
            console.log(err.message)
            throw new Error('Usuário ou senha inválidos.')
        }
        if (err.code == 'auth/weak-password') {
            console.log(err.message)
            throw new Error('A senha é muito fraca.')
        }
    })
}

//Create Local Anon User
const registerUser = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    db.collection('users')
    .add({
        user: email,
        password: password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}



//Manage session timeout and logout
function logout() {
    auth.signOut().then(() => {

        console.log("User SIGNED OUT");
        window.location = '../login/login.html'
 
     }).catch((error) => {
         console.log(error)
     })
}

//timeout
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time')
    autoLogout(fiveMinutes, display);
}


function autoLogout( duration, display) {
    var timer = duration, minutes, seconds

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds

        if (--timer < 0){

            auth.signOut().then(() => {

                console.log("User SIGNED OUT");
                window.location = '../login/login.html'
         
             }).catch((error) => {
                 console.log(error)
             })
        }
    }, 1000)
}


















const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
}

const updateData = () => {
    db.collection('users').doc('6caYOiNxwviOJFIQ4Uag')
    .update({
        email: 'ashishisagoodboy1234@gmail.com',
        password: '123456'
    })
    .then(() => {
        alert('Data Updated')
    })
}

const deleteData = () => {
    db.collection('users').doc('6caYOiNxwviOJFIQ4Uag').delete()
    .then(() => {
        alert('Data Deleted')
    })
    .catch((err) =>{
        console.log(err)
    })
}

