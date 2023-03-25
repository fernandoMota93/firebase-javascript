const { jsPDF } = window.jspdf




//testes para o PDF
const readCurrentDay = () => {
    var anexoF = [], anexoI = []

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

            gerarPDF(anexoF, anexoI)

        }).catch((err) => {
            console.log('Erro ao consultar: ', err)
        })
}

//pdf
const gerarPDF = (anexoF, anexoI) => {
    let doc = new jsPDF({
        orientation: 'l',
        unit: 'mm',
    })
    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['NOME', 'IDENTIFICAÇÃO', 'VEÍCULO', 'COR', 'PLACA', 'HORÁRIO', 'DESTINO', 'ANOTADOR']],
            body: anexoF,

            didDrawPage: function (data) {
                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                let logo = new Image();
                logo.src = "../src/images/coat.png"
                doc.addImage(logo, "png", 130, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", 116, 30)
                doc.text("9º Batalhão de Engenharia de Construção\n   Batalhão General Couto de Magalhães\n \nANEXO F - Entrada de veículos sem selo", 100, 40)
                //footer
                doc.setFont(undefined, "normal")
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['HORA DE SAIDA', 'HORA DE ENTRADA', 'ODOMETRO SAIDA', 'ODOMETRO ENTRADA', 'DESTINO', 'MOTORISTA', 'ACOMPANHANTE']],
            body: anexoI,

            didDrawPage: function (data) {
                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                let logo = new Image();
                logo.src = "../src/images/coat.png"
                doc.addImage(logo, "png", 130, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", 116, 30)
                doc.text("9º Batalhão de Engenharia de Construção\n   Batalhão General Couto de Magalhães\n \nANEXO I - Entrada e saída de viatura", 100, 40)
                //footer
                doc.setFont(undefined, "normal")
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })

    doc.save('Anexos.pdf')
}