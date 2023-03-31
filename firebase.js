//API CONFIG FIREBASE
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBG7_SQwkZUQthlWmDKvfOv1qS-wEwncsI",
  authDomain: "teste-bb8c0.firebaseapp.com",
  projectId: "teste-bb8c0",
  storageBucket: "teste-bb8c0.appspot.com",
  messagingSenderId: "435693359989",
  appId: "1:435693359989:web:06e6157a600f55a8c5b93c"
})

/*********** firebase instance ***********/
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const docRef = db.collection(getTimeStampForCollection().formattedTime)
/*********** firebase instance ***********/


/*********** TIME FOR COLLECTION ***********/
//System time most be updated
function getTimeStampForCollection() {
  var date = new Date(Math.floor(Date.now() / 1000) * 1000)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  var hourMin = (date.getHours() < 10 ? '0' + date.getHours() : '' + date.getHours()) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : '' + date.getMinutes())
  var formattedTime = day + '.' + month + '.' + year

  return { formattedTime, hourMin }
}
/*********** TIME FOR COLLECTION ***********/



function checkLogin() {
  auth.onAuthStateChanged(function (user) {
    if (user == null) {
      window.location = '/Guarda/src/components/error.html?err=401'
    }
    let loginName = document.getElementById('loginName')
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
              console.log('ADMIN LOGADO')
            }
            if (doc.data().role == 'user' && window.location.pathname == '/Guarda/dashboard/menu/') {
              console.log('USUARIO LOGADO')
              loginName.innerHTML = doc.data().name
              loginPapel.innerHTML = 'Nivel: ' + doc.data().role
              loginFuncao.innerHTML = 'Papel funcional: ' + doc.data().function
              loginDia.innerHTML = 'Dia: ' + getTimeStampForCollection().formattedTime
              loginHora.innerHTML = 'Hora do servidor: ' + getTimeStampForCollection().hourMin
            }
            if (doc.data().role == 'user' && window.location.pathname == '/Guarda/admin/') {
              alert('Modulo não acessivel para seu perfil')
              logout()
            }
          })
        })
    } catch (error) {
      window.location = '/Guarda/src/components/error.html'
      throw new Error(alert('401 - Desconectado.', error))
    }
  })
}


function refreshPage(id) {
  alert('FIREBASE => Identificador: ' + id + ' atualizado.')
  location.reload()
}


//Logout SESSION
function logout() {
  auth.signOut().then(() => {

    console.log("User SIGNED OUT");
    window.location = '/Guarda/login/login.html'

  }).catch((error) => {
    console.log(error)
  })
}