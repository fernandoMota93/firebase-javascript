//Check Session state
auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log('Usuario logado: ', user.uid)
    } else {
      window.location = '../../login/login.html'
    }
  })


//CRUD OPTIONS FOR "ANEXO I"
var createDataForm = document.getElementById('createData')
var updateDataForm = document.getElementById('editForm')

/***********   CREATE PART START   ***************/
//CREATE Data for register, if collection doesn't exist 
//then the collection will be created into firestore 
createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createData_I()
  })
  
  const createData_I = () => {
  
    let exitTime = document.getElementById('exitTime').value
    let exitOdometer = document.getElementById('exitOdometer').value
    let destiny = document.getElementById('destiny').value
    let driver = document.getElementById('driver').value
    let escort = document.getElementById('escort').value
  
    docRef
      .add({
        horarioSaida: exitTime,
        horarioEntrada:'',
        odometroSaida: exitOdometer,
        odometroEntrada: '',
        destino: destiny,
        motorista: driver,
        acompanhante: escort,
        kmTotal:'',
        anexo: 'I'
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
const readCurrentDay_I = () => {
  let dataFire = []

  docRef.where("anexo", "==", "I")
    .get()
    .then((query) => {
      query.forEach((doc) => {
        dataFire.push([
          doc.id,
          doc.data().horarioSaida,
          doc.data().horarioEntrada,
          doc.data().odometroSaida,
          doc.data().odometroEntrada,
          doc.data().destino,
          doc.data().motorista,
          doc.data().acompanhante,
          doc.data().kmTotal,
        ])
      })

      return displayDataInTable_I(dataFire)

    }).catch((err) => {
      console.log('Erro ao consultar: ', err)
    })
}

//function displayDataInTable transform each pair into html text
function displayDataInTable_I(dataFire) {
  let table = document.getElementById('dataTable')

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

    //After get the data row from firestore, create option panel for the last coll
    function insertAfter(newNode, existingNode) {
      existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    let td = document.createElement('td')
    td.innerHTML =
      `
       <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="getDataForEditModal_I('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
      `
    insertAfter(td, row.lastElementChild)

  })
}
//Load all the data in table after get and format from firestore
document.body.onload = readCurrentDay_I(), document.getElementById('exitTime').value = getTimeStampForCollection().hourMin
/***********   READ PART END   ***************/

/***********   UPDATE PART START   ***************/
//This function get one element for edition
const getDataForEditModal_I = (id) => {
  let btnUpdate = document.getElementById('btnUpdate')
  document.getElementById('returnTime').value = getTimeStampForCollection().hourMin

  docRef
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        document.getElementById('showExitOdometer').innerHTML = doc.data().odometroSaida
        document.getElementById('showExitTime').innerHTML = ' '+doc.data().horarioSaida

       
      }
    }).catch((err) => {
      console.log("Erro ao retornar documento:", err)
    })

  //Parse dinamically the values to "updateData" refering the id from btnUpdate
  btnUpdate.addEventListener("click", (e) => {
    e.preventDefault()
    updateData_I(id)
  })

}

const updateData_I = (id) => {

  docRef
    .doc(id)
    .update({
      horarioEntrada: document.getElementById('returnTime').value,
      odometroEntrada: document.getElementById('returnOdometer').value,
      observacoes: document.getElementById('observations').value,
      kmTotal:document.getElementById('returnOdometer').value - document.getElementById('showExitOdometer').innerHTML,
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
  location.reload()
}
/***********   UPDATE PART END   ***************/