//this function will get all names from firestore and prepare into an array for html
let fetchSentinelDataForAnexoB = (size) => {
    let dataFromFirestore = []
    docRef.where("anexo", "==", "A")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.data().nome
                ])
            })
            return renderWithData(dataFromFirestore, size)
        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ')
        })
}

const createData_B = (size) => {

    if ((document.body.contains(document.getElementById('pg')))) {
        try {
            for (let i = 1; i <= size; i++) {
                let newData = new AnexoB(
                    check = 1,
                    name = document.getElementById('pg' + i).value +' '+ document.getElementById('name' + i).value,
                    time = document.getElementById('time' + i).value
                )
                docRef
                    .add({
                        nome: newData.time,
                        horario: newData.name,
                        created_at: Date.now(),
                        updated_at: '',
                        anexo: 'B'
                    })
                    .then((docRef) => {
                        console.log("Documento registrado: ", docRef.id)
    
    
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            }
            alert('Anexo B Registrado')
        } catch (error) {
            alert(error,'Algo deu errado: ')
        }
    } else {
        try {
            for (let i = 1; i <= size; i++) {
                let newData = new AnexoB(
                    check = 1,
                    name = document.getElementById('name' + i).value,
                    time = document.getElementById('time' + i).value
                )
                docRef
                    .add({
                        nome: newData.time,
                        horario: newData.name,
                        created_at: Date.now(),
                        updated_at: '',
                        anexo: 'B'
                    })
                    .then((docRef) => {
                        console.log("Documento registrado: ", docRef.id)
    
    
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });
            }
            alert('Anexo B Registrado')
        } catch (error) {
            alert(error,'Algo deu errado: ')
        }
    }



}

const readCurrentDay_B = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "B")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().horario,
                    doc.data().nome
                ])
            })
            return viewDataInTable_B(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ')
        })
}

//this function call the firestore and put the doc value into the modal for edition 
const fetchOneDocForUpdate_B = (id) => {
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('editTime').value = doc.data().horario
                document.getElementById('editName').value = doc.data().nome
            } else {
                console.log("Objeto não encontrado")
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })
}

//This function update the current document from id
const updateData_B = (id) => {
    docRef
        .doc(id)
        .update({
            nome: document.getElementById('editName').value,
            horario: document.getElementById('editTime').value,
            updated_at: Date.now()
        })
        .then(() => {
            refreshPage(id)

        }).catch((err) => {
            console.log(err)
        })
}