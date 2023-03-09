const signInForm = document.getElementById('signin-form')

//Check Session state
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log('Usuario logado: ', user.uid)
  } else {
    window.location = '../login/login.html'
  }
})


//New instance of time for collection
function getTimeStampForCollection() {
  var date = new Date(Math.floor(Date.now() / 1000) * 1000)
  var day = date.getDay()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  var hourMin = date.getHours() + ':' + date.getMinutes()
  var formattedTime = day + '.' + month + '.' + year

  return { formattedTime, hourMin }
}


//CREATE Data for register, if collection doesn't exist then the collection will be created into firestore 
const saveData = () => {
  var nome = document.getElementById('nome').value
  var identificacao = document.getElementById('identificacao').value
  var veiculo = document.getElementById('veiculo').value
  var cor = document.getElementById('cor').value
  var placa = document.getElementById('placa').value
  var destino = document.getElementById('destino').value
  var anotador = document.getElementById('anotador').value

  db.collection(getTimeStampForCollection().formattedTime)
    .add({
      nome: nome,
      identificacao: identificacao,
      veiculo: veiculo,
      cor: cor,
      placa: placa,
      horario: getTimeStampForCollection().hourMin,
      destino: destino,
      anotador: anotador,
      created_at: Date.now()
    })
    .then((docRef) => {
      console.log("Documento registrado: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

//READ Data from collection
const readData = () => {
  var dataFire = []

  db.collection('4.3.2023').orderBy("created_at").get().then((query) => {
    query.forEach((doc) => {
      console.log(doc.id, " => ", doc.data().nome, doc.data().identificacao)
      dataFire.push([
        doc.data().nome,
        doc.data().identificacao,
        doc.data().veiculo,
        doc.data().cor,
        doc.data().placa,
        doc.data().horario,
        doc.data().destino,
        doc.data().anotador
      ])
    })
    displayDataInTable(dataFire)

  }).catch((err) => {
    console.log('Erro ao consultar: ', err)
  })
}


function displayDataInTable(dataFire) {
  var table = document.getElementById('dataTable')

  dataFire.forEach((doc) => {
    var row = table.insertRow()
    row.setAttribute('id', 'row')

    Object.keys(doc).forEach((key) => {
      var cell = row.insertCell()
      cell.innerHTML = doc[key]

    })
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    let td = document.createElement('td')
    td.innerHTML =
      `
       <button type="button" class="btn btn-primary mb-1"><i class="fa fa-print"></i></button>
       <button type="button" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
       <button type="button" class="btn btn-danger mb-1"><i class="fa fa-trash"></i></button>
      `
    insertAfter(td, row.lastElementChild);
  })
}

function logout() {
  auth.signOut().then(() => {

    console.log("User SIGNED OUT");
    window.location = '../login/login.html'

  }).catch((error) => {
    console.log(error)
  })
}
