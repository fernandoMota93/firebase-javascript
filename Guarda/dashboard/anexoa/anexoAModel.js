const createData_A = () => {
    for (let i = 1; i <= soldierAmount.value; i++) {
        let newData = new AnexoA(
            name = document.getElementById('pg' + i).value + ' ' + document.getElementById('name' + i).value,
            weaponNumber = document.getElementById('weaponNumber' + i).value
        )
        docRef
            .add({
                nome: newData.name,
                identificacao: newData.weaponNumber,
                created_at: Date.now(),
                updated_at: '',
                anexo: 'A'
            })
            .then((docRef) => {
                console.log("Documento registrado: ", docRef.id)
                alert('Sentinelas Regsitrados')
                location.reload()
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

}

const readCurrentDay_A = () => {
    let dataFromFirestore = []

    docRef.where("anexo", "==", "A")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().nome, doc.data().identificacao)
                dataFromFirestore.push([
                    doc.id,
                    doc.data().nome,
                    doc.data().identificacao
                ])
            })
            return viewDataInTable_A(dataFromFirestore)

        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ')
        })
}

//this function call the firestore and put the doc value into the modal for edition 
const fetchOneDocForUpdate_A = (id) => {
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('editNome').value = doc.data().nome
                document.getElementById('editIdentificacao').value = doc.data().identificacao
            } else {
                console.log("Objeto não encontrado")
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })
}

//This function update the current document from id
const updateData_A = (id) => {
    docRef
        .doc(id)
        .update({
            nome: document.getElementById('editNome').value,
            identificacao: document.getElementById('editIdentificacao').value,
            updated_at: Date.now()
        })
        .then(() => {
            refreshPage(id)

        }).catch((err) => {
            console.log(err)
        })
}