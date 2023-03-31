//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_E = () => {
    const newData = new AnexoE(
        name = document.getElementById('name').value,
        document = document.getElementById('document').value,
        tagNumber = document.getElementById('tagNumber').value,
        destiny = document.getElementById('destiny').value,
        entranceTime = document.getElementById('entranceTime').value,
        contact = document.getElementById('contact').value
    )
    docRef
        .add({
            nome: newData.name,
            documento: newData.document,
            cracha: newData.tagNumber,
            destino: newData.destiny,
            horarioEntrada: newData.entranceTime,
            horarioSaida: ' ',
            contato: newData.contact,
            created_at: Date.now(),
            anexo: 'E'
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
const readCurrentDay_E = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "E")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().nome,
                    doc.data().documento,
                    doc.data().cracha,
                    doc.data().destino,
                    doc.data().horarioEntrada,
                    doc.data().horarioSaida,
                    doc.data().contato
                ])
            })
            console.log(dataFromFirestore)

            //return to view
            return viewDataInTable_E(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err,'Erro ao consultar: ', window.location = '../../login/login.html')
        })
}

//this function call the firestore and put the doc values into the modal for edition 
const fetchOneDocForUpdate_E = (id) =>{
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('showName').innerHTML = doc.data().nome + ' ?'
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })

}

//This function update the current document from id
const updateData_E = (id) => {
    docRef
        .doc(id)
        .update({
            horarioSaida: getTimeStampForCollection().hourMin,
            updated_at: Date.now()
        })
        .then(() => {
            HandlerRefreshPage(id)
        }).catch((err) => {
            console.log(err)
        })
}
