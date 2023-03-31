//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_D = () => {
    console.log(timeRegister)
    const newData = new AnexoD(
        name = document.getElementById('name').value,
        company = document.getElementById('company').value,
        time = document.getElementById('time').value
    )
    if (timeRegister = 1) {
        docRef
            .add({
                nome: newData.name,
                companhia: newData.company,
                horarioEntrada: newData.time,
                horarioSaida: '',
                created_at: Date.now(),
                anexo: 'D'
            })
            .then((docRef) => {
                console.log("Documento registrado: ", docRef.id);
                createDataForm.reset()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            })
    } else {
        docRef
            .add({
                nome: newData.name,
                companhia: newData.company,
                horarioEntrada: '',
                horarioSaida: newData.time,
                created_at: Date.now(),
                anexo: 'D'
            })
            .then((docRef) => {
                console.log("Documento registrado: ", docRef.id);
                createDataForm.reset()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
}

//if there's no data in object the return will be "[]"
const readCurrentDay_D = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "D")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().nome,
                    doc.data().companhia,
                    doc.data().horarioEntrada,
                    doc.data().horarioSaida
                ])
            })
            console.log(dataFromFirestore)

            //return to view
            return viewDataInTable_D(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ', alert('Erro no banco ' + err))
        })
}

//this function call the firestore and put the doc values into the modal for edition 
const fetchOneDocForUpdate_D = (id) => {
    document.getElementById('actualTime').value = getTimeStampForCollection().hourMin
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                if (doc.data().horarioEntrada == '') {
                    document.getElementById('editModalTitle').innerHTML = 'Marcar entrada do militar'
                    document.getElementById('timeType').value = 'entrada'
                }
                else {
                    document.getElementById('editModalTitle').innerHTML = 'Marcar saída do militar'
                    document.getElementById('timeType').value = 'saida'
                }

            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })

}


//This function update the current document from id
const updateData_D = (id) => {
    if (document.getElementById('timeType').value == 'entrada') {
        docRef
            .doc(id)
            .update({
                horarioEntrada: document.getElementById('time').value,
                observacoes: document.getElementById('observations').value,
                updated_at: Date.now()
            })
            .then(() => {
                HandlerRefreshPage(id)
            }).catch((err) => {
                console.log(err)
            })
    }

    if (document.getElementById('timeType').value == 'saida') {
        docRef
            .doc(id)
            .update({
                horarioSaida: document.getElementById('time').value,
                observacoes: document.getElementById('observations').value,
                updated_at: Date.now()
            })
            .then(() => {
                HandlerRefreshPage(id)
            }).catch((err) => {
                console.log(err)
            })
    }


}






