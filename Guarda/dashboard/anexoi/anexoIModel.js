//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_I = () => {
    const newData = new AnexoI(
        exitTime = document.getElementById('exitTime').value,
        exitOdometer = document.getElementById('exitOdometer').value,
        destiny = document.getElementById('destiny').value,
        driver = document.getElementById('driver').value,
        escort = document.getElementById('escort').value
    )
    docRef
        .add({
            horarioSaida: newData.exitTime,
            horarioEntrada: '',
            odometroSaida: newData.exitOdometer,
            odometroEntrada: '',
            destino: newData.destiny,
            motorista: newData.driver,
            acompanhante: newData.escort,
            kmTotal: '',
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

//if there's no data in object the return will be "[]"
const readCurrentDay_I = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "I")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().horarioSaida,
                    doc.data().horarioEntrada,
                    doc.data().odometroSaida,
                    doc.data().odometroEntrada,
                    doc.data().destino,
                    doc.data().motorista,
                    doc.data().acompanhante,
                    doc.data().kmTotal
                ])
            })
            console.log(dataFromFirestore)

            //return to view
            return viewDataInTable_I(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ', window.location = '../../login/login.html')
        })
}

//this function call the firestore and put the doc values into the modal for edition 
const fetchOneDocForUpdate_I = (id) => {
    document.getElementById('returnTime').value = getTimeStampForCollection().hourMin
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('showExitOdometer').innerHTML = doc.data().odometroSaida
                document.getElementById('showExitTime').innerHTML = ' ' + doc.data().horarioSaida
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })

}


//This function update the current document from id
const updateData_I = (id) => {
    docRef
        .doc(id)
        .update({
            horarioEntrada: document.getElementById('returnTime').value,
            odometroEntrada: document.getElementById('returnOdometer').value,
            observacoes: document.getElementById('observations').value,
            kmTotal: document.getElementById('returnOdometer').value - document.getElementById('showExitOdometer').innerHTML,
            updated_at: Date.now()
        })
        .then(() => {
            HandlerRefreshPage(id)
        }).catch((err) => {
            console.log(err)
        })
}

const updatePrefix_I = () => {
    docRef
        .doc('misc')
        .set({
            prefixoViatura: document.getElementById("prefix").value,
        })
        .then(() => {
            console.log("Documento registrado: ")
            alert('Prefixo atualizado')
        })
        .catch((error) => {
            console.error("Error adding document: ", error)
        })
}

const getPrefix = () => {
    docRef
        .doc('misc')
        .get()
        .then((doc) => {
            if (doc.exists) {
                //return to view
                document.getElementById('labelPrefix').innerHTML = doc.data().prefixoViatura
            }
        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ', window.location = '../../login/login.html')
        })

}




