//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_G = () => {
    const newData = new AnexoG(
        name = document.getElementById('name').value,
        company = document.getElementById('company').value,
        time = document.getElementById('time').value,
        taker = document.getElementById('taker').value
    )
    docRef
        .add({
            nome: newData.name,
            companhia: newData.company,
            horarioEntrada: newData.time,
            anotador: newData.taker,
            created_at: Date.now(),
            anexo: 'G'
        })
        .then((docRef) => {
            console.log("Documento registrado: ", docRef.id);
            createDataForm.reset()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        })
}

//if there's no data in object the return will be "[]"
const readCurrentDay_G = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "G")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().nome,
                    doc.data().companhia,
                    doc.data().horarioEntrada,
                    doc.data().anotador
                ])
            })
            console.log(dataFromFirestore)

            //return to view
            return viewDataInTable_G(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ', alert('Erro no banco ' + err))
        })
}

//this function call the firestore and put the doc values into the modal for edition 
const fetchOneDocForUpdate_G = (id) => {
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                    document.getElementById('editModalTitle').innerHTML = 'Marcar entrada do militar'
                    document.getElementById('showTime').innerText = getTimeStampForCollection().hourMin

                    document.getElementById('editName').value = doc.data().nome
                    document.getElementById('editCompany').value = doc.data().companhia
                    document.getElementById('editTime').value = doc.data().horarioEntrada
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })
}

//This function update the current document from id
const updateData_G = (id) => {
    docRef
        .doc(id)
        .update({
            nome: document.getElementById('editName').value,
            companhia: document.getElementById('editCompany').value,
            horarioEntrada: document.getElementById('editTime').value,
            observacoes: document.getElementById('observations').value,
            updated_at: Date.now()
        })
        .then(() => {
            HandlerRefreshPage(id)
        }).catch((err) => {
            console.log(err)
        })
}
