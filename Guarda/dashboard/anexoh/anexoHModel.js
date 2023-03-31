//This function create a document to store, if collection don´t exist
//then the collection will be created into firestore
const createData_H = () => {
    const newData = new AnexoH(
        prefixo = document.getElementById('prefix').value,
        horarioSaida = document.getElementById('exitTime').value,
        odometroSaida = document.getElementById('exitOdometer').value,
        destino = document.getElementById('destiny').value,
        motorista = document.getElementById('driver').value,
        acompanhante =  document.getElementById('escort').value
    )
    docRef
        .add({
            prefixo: newData.prefixo,
            horarioSaida: newData.horarioSaida,
            horarioEntrada: '',
            odometroSaida: newData.odometroSaida,
            odometroEntrada: '',
            kmTotal:'',
            destino: newData.destino,
            motorista: newData.motorista,
            acompanhante: newData.acompanhante,
            created_at: Date.now(),
            updated_at: '',
            anexo: 'H'
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
const readCurrentDay_H = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "H")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().prefixo,
                    doc.data().horarioSaida,
                    doc.data().horarioEntrada,
                    doc.data().odometroSaida,
                    doc.data().odometroEntrada,
                    doc.data().kmTotal,
                    doc.data().destino,
                    doc.data().motorista,
                    doc.data().acompanhante,
                ])
            })

            return viewDataInTable_H(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err,'Erro ao consultar: ', window.location = '../../login/login.html')
        })
}

//this function call the firestore and put the doc value into the modal for edition 
const fetchOneDocForUpdate_H = (id) =>{
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('showExitTime').innerHTML = doc.data().horarioSaida
                document.getElementById('showExitOdometer').innerHTML = doc.data().odometroSaida
                document.getElementById('returnTime').value = getTimeStampForCollection().hourMin
                
            } else {
                console.log("Objeto não encontrado")
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })
}


//This function update the current document from id
const updateData_H = (id) => {
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
            refreshPage(id)
           
        }).catch((err) => {
            console.log(err)
        })
}

