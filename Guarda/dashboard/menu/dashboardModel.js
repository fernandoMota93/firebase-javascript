const { jsPDF } = window.jspdf

//testes para o PDF
const readCurrentDayCollection = () => {
    let anexoD = [], anexoE = [], anexoF = [], anexoG = [], anexoH = [], anexoI = []

    docRef.where("anexo", "==", "D")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoD.push([
                    doc.data().nome,
                    doc.data().companhia,
                    doc.data().horarioEntrada,
                    doc.data().horarioSaida
                ])
            })

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })
    docRef.where("anexo", "==", "E")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoE.push([
                    doc.data().nome,
                    doc.data().documento,
                    doc.data().cracha,
                    doc.data().destino,
                    doc.data().horarioSaida,
                    doc.data().horarioEntrada,
                    doc.data().contato
                ])
            })

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })

    docRef.where("anexo", "==", "F")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoF.push([
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

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })

    docRef.where("anexo", "==", "G")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoG.push([
                    doc.data().nome,
                    doc.data().companhia,
                    doc.data().horarioEntrada,
                    doc.data().anotador
                ])
            })

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })

    docRef.where("anexo", "==", "H")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoH.push([
                    doc.data().prefixo,
                    doc.data().horarioSaida,
                    doc.data().horarioEntrada,
                    doc.data().odometroSaida,
                    doc.data().odometroEntrada,
                    doc.data().kmTotal,
                    doc.data().destino,
                    doc.data().motorista,
                    doc.data().acompanhante
                ])
            })

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })

    docRef.where("anexo", "==", "I")
        .get()
        .then((query) => {
            query.forEach((doc) => {
                anexoI.push([
                    doc.data().horarioSaida,
                    doc.data().horarioEntrada,
                    doc.data().odometroSaida,
                    doc.data().odometroEntrada,
                    doc.data().destino,
                    doc.data().motorista,
                    doc.data().acompanhante
                ])
            })

            //controller
            handleGerarPDF(anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })
}

