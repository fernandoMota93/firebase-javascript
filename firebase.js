//Credenciais e constantes
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBG7_SQwkZUQthlWmDKvfOv1qS-wEwncsI",
    authDomain: "teste-bb8c0.firebaseapp.com",
    projectId: "teste-bb8c0",
    storageBucket: "teste-bb8c0.appspot.com",
    messagingSenderId: "435693359989",
    appId: "1:435693359989:web:06e6157a600f55a8c5b93c"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//VERIFICAR IMPLEMENTAÇÕES RBAC DO FIREBASE