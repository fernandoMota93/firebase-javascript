const createRondaSentinel_C = (sentinelSize) => {
    try {
        for (let i = 1; i <= sentinelSize / 3; i++) {
            let newData = new AnexoC(
                check = 1,
                sentinel = "P" + i,
                rondantes = new Array(
                    document.getElementById('ronda1').value,
                    document.getElementById('ronda2').value,
                    document.getElementById('ronda3').value,
                    document.getElementById('ronda4').value
                )
            )
            docRef
                .add({
                    posto: newData.sentinel,
                    created_at: Date.now(),
                    rondas: ['', '', '', ''],
                    rondante: newData.rondantes,
                    updated_at: '',
                    anexo: 'C'
                })
                .then((docRef) => {
                    console.log("Documento registrado: ", docRef.id)
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
        alert('Sentinelas resgistradas na ronda')
    } catch (error) {
        alert('Algo deu errado: ', error)
    }
}

const createRondaPlantao_C = (soldierSize) => {
    try {
        for (let i = 1; i <= soldierSize; i++) {
            let newData = new AnexoC(
                check = 1,
                sentinel = "Plantao" + i,
                rondantes = new Array(
                    document.getElementById('ronda1').value,
                    document.getElementById('ronda2').value,
                    document.getElementById('ronda3').value,
                    document.getElementById('ronda4').value
                )
            )
            docRef
                .add({
                    posto: newData.sentinel,
                    created_at: Date.now(),
                    rondas: ['', '', '', ''],
                    rondante: newData.rondantes,
                    updated_at: '',
                    anexo: 'C'
                })
                .then((docRef) => {
                    console.log("Documento registrado: ", docRef.id)
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
        alert('Plantoes resgistradas na ronda')
    } catch (error) {
        alert(error, 'Algo deu errado: ')
    }

}

const readCurrentDay_C = (sentinelSize) => {
    let horarios = ['22:00 - 00:00', '00:00 - 02:00', '02:00 - 04:00', '04:00 - 06:00']
    let dataFromFirestore = []

    docRef.where("anexo", "==", "C")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                dataFromFirestore.push([
                    doc.id,
                    doc.data().rondante,
                    horarios,
                    doc.data().rondas,
                    doc.data().posto

                ])
            })
            return viewDataInTable_C(sentinelSize, dataFromFirestore)


        }).catch((err) => {
            throw new Error(err, 'Erro ao consultar: ')
        })
}

//this function call the firestore and put the doc value into the modal for edition 
const fetchOneDocForUpdate_C = (id) => {
    docRef
        .doc(id)
        .get()
        .then((doc) => {
            if (doc.exists) {
                document.getElementById('posto').innerHTML = 'Editar a Ronda do: ' + doc.data().posto
                document.getElementById('rondante1').value = '1ª Ronda -> ' + doc.data().rondante[0]
                document.getElementById('rondante2').value = '2ª Ronda -> ' + doc.data().rondante[1]
                document.getElementById('rondante3').value = '3ª Ronda -> ' + doc.data().rondante[2]
                document.getElementById('rondante4').value = '4ª Ronda -> ' + doc.data().rondante[3]
                document.getElementById('p1').value = doc.data().rondas[0]
                document.getElementById('plantao1').value = doc.data().rondas[1]
                document.getElementById('plantao2').value = doc.data().rondas[2]
                document.getElementById('plantao3').value = doc.data().rondas[3]
            } else {
                console.log("Objeto não encontrado")
            }
        }).catch((err) => {
            console.log("Erro ao retornar documento:", err)
        })
}


//This function update the current document from id
const updateData_C = (id) => {
    docRef
        .doc(id)
        .update({
            rondas: [
                document.getElementById('p1').value,
                document.getElementById('plantao1').value,
                document.getElementById('plantao2').value,
                document.getElementById('plantao3').value,
            ],
            updated_at: Date.now()
        })
        .then(() => {
            refreshPage(id)

        }).catch((err) => {
            console.log(err)
        })
}