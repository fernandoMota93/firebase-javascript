//CRUD OPTIONS FOR "ANEXO F"
var createDataForm = document.getElementById('createData')
var updateDataForm = document.getElementById('editForm')


//Check Session state
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log('Usuario logado: ', user.uid)
  } else {
    window.location = '../../login/login.html'
  }
})

/***********   CREATE PART START   ***************/
//CREATE Data for register, if collection doesn't exist 
//then the collection will be created into firestore 
createDataForm.addEventListener('submit', (e) => {
  e.preventDefault()
  createData_F()
})

const createData_F = () => {

  var nome = document.getElementById('nome').value
  var identificacao = document.getElementById('identificacao').value
  var veiculo = document.getElementById('veiculo').value
  var cor = document.getElementById('cor').value
  var placa = document.getElementById('placa').value
  var destino = document.getElementById('destino').value
  var anotador = document.getElementById('anotador').value

  docRef
    .add({
      nome: nome,
      identificacao: identificacao,
      veiculo: veiculo,
      cor: cor,
      placa: placa,
      horario: getTimeStampForCollection().hourMin,
      destino: destino,
      anotador: anotador,
      created_at: Date.now(),
      updated_at: '',
      anexo: 'F'
    })
    .then((docRef) => {
      console.log("Documento registrado: ", docRef.id);
      createDataForm.reset()
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
/***********   CREATE PART END   ***************/



/***********   READ PART START   ***************/
//READ ALL DOCS of Current day from collection
const readCurrentDay_F = () => {
  var dataFire = []

  docRef.where("anexo", "==", "F")
    .get()
    .then((query) => {
      query.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().nome, doc.data().identificacao)
        dataFire.push([
          doc.id,
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

      return displayDataInTable_F(dataFire)

    }).catch((err) => {
      console.log('Erro ao consultar: ', err)
    })
}

//function displayDataInTable transform each pair into html text
function displayDataInTable_F(dataFire) {
  var table = document.getElementById('dataTable')

  dataFire.forEach((doc) => {
    var row = table.insertRow()
    row.setAttribute('id', 'row')

    Object.keys(doc).forEach((key) => {
      var cell = row.insertCell()
      cell.innerHTML = doc[key]

    })
    //document id for UPDATE BUTTON
    var id = row.children[0].innerHTML

    //this remove the "document id" from html component, user don´t need to know.
    row.deleteCell(0)

    //After get the data row from firestore, create option panel for the last coll
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    let td = document.createElement('td')
    td.innerHTML =
      `
       <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="getDataForEditModal_F('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
      `
    insertAfter(td, row.lastElementChild)

  })
}
//Load all the data in table after get and format from firestore
document.body.onload = readCurrentDay_F()
/***********   READ PART END   ***************/



/***********   UPDATE PART START   ***************/
//This function get one element for edition
const getDataForEditModal_F = (id) => {
  let btnUpdate = document.getElementById('btnUpdate')

  docRef
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        document.getElementById('editNome').value = doc.data().nome
        document.getElementById('editIdentificacao').value = doc.data().identificacao
        document.getElementById('editVeiculo').value = doc.data().veiculo
        document.getElementById('editCor').value = doc.data().cor
        document.getElementById('editPlaca').value = doc.data().placa
        document.getElementById('editHorario').value = doc.data().horario
        document.getElementById('editDestino').value = doc.data().destino
        document.getElementById('editAnotador').value = doc.data().anotador
      } else {
        console.log("Objeto não encontrado")
      }
    }).catch((err) => {
      console.log("Erro ao retornar documento:", err)
    })

  //Parse dinamically the values to "updateData" refering the id from btnUpdate
  btnUpdate.addEventListener("click", (e) => {
    e.preventDefault()
    updateData_F(id)
  })

}

const updateData_F = (id) => {

  docRef
    .doc(id)
    .update({
      nome: document.getElementById('editNome').value,
      identificacao: document.getElementById('editIdentificacao').value,
      veiculo: document.getElementById('editVeiculo').value,
      cor: document.getElementById('editCor').value,
      placa: document.getElementById('editPlaca').value,
      horario: document.getElementById('editHorario').value,
      destino: document.getElementById('editDestino').value,
      anotador: document.getElementById('editAnotador').value,
      updated_at: Date.now()
    })
    .then(() => {
      refreshPage(id)
      updateDataForm.reset()
    }).catch((err) => {
      console.log(err)
    })
}

function refreshPage(id) {
  alert('Identificador: ' + id + ' atualizado.')
  location.reload();
}
/***********   UPDATE PART END   ***************/