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
/*********** firebase instance ***********/


/*********** TIME FOR COLLECTION ***********/
//System time most be updated
function getTimeStampForCollection() {
  var date = new Date(Math.floor(Date.now() / 1000) * 1000)
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  var hourMin = (date.getHours() < 10 ? '0'+ date.getHours() : ''+ date.getHours())  + ':' + (date.getMinutes() < 10 ? '0'+ date.getMinutes() : ''+ date.getMinutes()) 
  var formattedTime = day + '.' + month + '.' + year

  return { formattedTime, hourMin }
}
/*********** TIME FOR COLLECTION ***********/

var docRef = db.collection(getTimeStampForCollection().formattedTime)


function refreshPage(id) {
  alert('FIREBASE => Identificador: ' + id + ' atualizado.')
  location.reload()
}


//Logout SESSION
function logout() {
    auth.signOut().then(() => {
  
      console.log("User SIGNED OUT");
      window.location = '../login/login.html'
  
    }).catch((error) => {
      console.log(error)
    })
  }