//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_F = () => {
    const newData = new AnexoF(
        nome = document.getElementById('nome').value,
        identificacao = document.getElementById('identificacao').value,
        veiculo = document.getElementById('veiculo').value,
        cor = document.getElementById('cor').value,
        placa = document.getElementById('placa').value,
        destino = document.getElementById('destino').value,
        anotador = document.getElementById('anotador').value
    )
    docRef
        .add({
            nome: newData.nome,
            identificacao: newData.identificacao,
            veiculo: newData.veiculo,
            cor: newData.cor,
            placa: newData.placa,
            horario: getTimeStampForCollection().hourMin,
            destino: newData.destino,
            anotador: newData.anotador,
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

//if there's no data in object the return will be "[]"
const readCurrentDay_F = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "F")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().nome, doc.data().identificacao)
                dataFromFirestore.push([
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

            return viewDataInTable_F(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err,'Erro ao consultar: ', window.location = '../../login/login.html')
        })
}

//this function call the firestore and put the doc value into the modal for edition 
const fetchOneDocForUpdate_F = (id) =>{
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
}


//This function update the current document from id
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
           
        }).catch((err) => {
            console.log(err)
        })
}

