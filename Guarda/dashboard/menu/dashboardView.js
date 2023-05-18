const renderProgressModal = () => {

    progressModal.innerHTML =
        `
        <div class="modal fade" id="progressModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">GERANDO PDF</h5>
                    </div>
                    <div class="modal-body justify-content-between">
                        <p class="text text-center" id='showProgress'></p>
                        <p class="text text-center" id='statusMsg'></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
        `
    $('#progressModal').modal()
}


const gerarPDF = (anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI) => {
    const cRefatorado = []
    //Sort array by time
    anexoB.sort((a, b) => {
        let lastElementA = a[a.length - 1];
        let lastElementB = b[b.length - 1];

        if (lastElementA < lastElementB) {
            return -1
        }
        if (lastElementA > lastElementB) {
            return 1
        }
        return 0
    })
    //Sort Array by last child alphabet 
    anexoC.sort((a, b) => {
        let lastElementA = a[a.length - 1];
        let lastElementB = b[b.length - 1];

        if (lastElementA < lastElementB) {
            return -1
        }
        if (lastElementA > lastElementB) {
            return 1
        }
        return 0
    })

//let format by the anexoC size
    switch (anexoC.length) {
        case 6:
            cRefatorado.push(
                [anexoC[0][0][0], anexoC[0][1][0], anexoC[0][2][0], anexoC[1][2][0], anexoC[2][2][0], '-', '-', '-', '-', anexoC[3][2][0], anexoC[4][2][0], anexoC[5][2][0]],
                [anexoC[0][0][1], anexoC[0][1][1], anexoC[0][2][1], anexoC[1][2][1], anexoC[2][2][1], '-', '-', '-', '-', anexoC[3][2][1], anexoC[4][2][1], anexoC[5][2][1]],
                [anexoC[0][0][2], anexoC[0][1][2], anexoC[0][2][2], anexoC[1][2][2], anexoC[2][2][2], '-', '-', '-', '-', anexoC[3][2][2], anexoC[4][2][2], anexoC[5][2][2]],
                [anexoC[0][0][3], anexoC[0][1][3], anexoC[0][2][3], anexoC[1][2][3], anexoC[2][2][3], '-', '-', '-', '-', anexoC[3][2][3], anexoC[4][2][3], anexoC[5][2][3]],
            )
            break
        case 7:
            cRefatorado.push(
                [anexoC[0][0][0], anexoC[0][1][0], anexoC[0][2][0], anexoC[1][2][0], anexoC[2][2][0], anexoC[3][2][0], '-', '-', '-', anexoC[4][2][0], anexoC[5][2][0], anexoC[6][2][0]],
                [anexoC[0][0][1], anexoC[0][1][1], anexoC[0][2][1], anexoC[1][2][1], anexoC[2][2][1], anexoC[3][2][1], '-', '-', '-', anexoC[4][2][1], anexoC[5][2][1], anexoC[6][2][1]],
                [anexoC[0][0][2], anexoC[0][1][2], anexoC[0][2][2], anexoC[1][2][2], anexoC[2][2][2], anexoC[3][2][2], '-', '-', '-', anexoC[4][2][2], anexoC[5][2][2], anexoC[6][2][2]],
                [anexoC[0][0][3], anexoC[0][1][3], anexoC[0][2][3], anexoC[1][2][3], anexoC[2][2][3], anexoC[3][2][3], '-', '-', '-', anexoC[4][2][3], anexoC[5][2][3], anexoC[6][2][3]],
            )
            break
        case 8:
            cRefatorado.push(
                [anexoC[0][0][0], anexoC[0][1][0], anexoC[0][2][0], anexoC[1][2][0], anexoC[2][2][0], anexoC[3][2][0], anexoC[4][2][0], '-', '-', anexoC[5][2][0], anexoC[6][2][0], anexoC[7][2][0]],
                [anexoC[0][0][1], anexoC[0][1][1], anexoC[0][2][1], anexoC[1][2][1], anexoC[2][2][1], anexoC[3][2][1], anexoC[4][2][1], '-', '-', anexoC[5][2][1], anexoC[6][2][1], anexoC[7][2][1]],
                [anexoC[0][0][2], anexoC[0][1][2], anexoC[0][2][2], anexoC[1][2][2], anexoC[2][2][2], anexoC[3][2][2], anexoC[4][2][2], '-', '-', anexoC[5][2][2], anexoC[6][2][2], anexoC[7][2][2]],
                [anexoC[0][0][3], anexoC[0][1][3], anexoC[0][2][3], anexoC[1][2][3], anexoC[2][2][3], anexoC[3][2][3], anexoC[4][2][3], '-', '-', anexoC[5][2][3], anexoC[6][2][3], anexoC[7][2][3]],
            )
            break
        case 9:
            cRefatorado.push(
                [anexoC[0][0][0], anexoC[0][1][0], anexoC[0][2][0], anexoC[1][2][0], anexoC[2][2][0], anexoC[3][2][0], anexoC[4][2][0], anexoC[5][2][0], '-', anexoC[6][2][0], anexoC[7][2][0], anexoC[8][2][0]],
                [anexoC[0][0][1], anexoC[0][1][1], anexoC[0][2][1], anexoC[1][2][1], anexoC[2][2][1], anexoC[3][2][1], anexoC[4][2][1], anexoC[5][2][1], '-', anexoC[6][2][1], anexoC[7][2][1], anexoC[8][2][1]],
                [anexoC[0][0][2], anexoC[0][1][2], anexoC[0][2][2], anexoC[1][2][2], anexoC[2][2][2], anexoC[3][2][2], anexoC[4][2][2], anexoC[5][2][2], '-', anexoC[6][2][2], anexoC[7][2][2], anexoC[8][2][2]],
                [anexoC[0][0][3], anexoC[0][1][3], anexoC[0][2][3], anexoC[1][2][3], anexoC[2][2][3], anexoC[3][2][3], anexoC[4][2][3], anexoC[5][2][3], '-', anexoC[6][2][3], anexoC[7][2][3], anexoC[8][2][3]],
            )
            break
        case 10:
            cRefatorado.push(
                [anexoC[0][0][0], anexoC[0][1][0], anexoC[0][2][0], anexoC[1][2][0], anexoC[2][2][0], anexoC[3][2][0], anexoC[4][2][0], anexoC[5][2][0], anexoC[6][2][0], anexoC[7][2][0], anexoC[8][2][0], anexoC[9][2][0]],
                [anexoC[0][0][1], anexoC[0][1][1], anexoC[0][2][1], anexoC[1][2][1], anexoC[2][2][1], anexoC[3][2][1], anexoC[4][2][1], anexoC[5][2][1], anexoC[6][2][1], anexoC[7][2][1], anexoC[8][2][1], anexoC[9][2][1]],
                [anexoC[0][0][2], anexoC[0][1][2], anexoC[0][2][2], anexoC[1][2][2], anexoC[2][2][2], anexoC[3][2][2], anexoC[4][2][2], anexoC[5][2][2], anexoC[6][2][2], anexoC[7][2][2], anexoC[8][2][2], anexoC[9][2][2]],
                [anexoC[0][0][3], anexoC[0][1][3], anexoC[0][2][3], anexoC[1][2][3], anexoC[2][2][3], anexoC[3][2][3], anexoC[4][2][3], anexoC[5][2][3], anexoC[6][2][3], anexoC[7][2][3], anexoC[8][2][3], anexoC[9][2][3]],
            )
            break

        default:
            break
    }
    
    let doc = new jsPDF({
        orientation: 'l',
        unit: 'mm',
    })

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 10 },
            head: [['Grad/Nr/Nome', 'Nr Armamento']],
            body: anexoA,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                let logo = new Image();

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 32, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\n", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO A - FICHA DE CONTROLE ARMAMENTO DA GUARDA DO QUARTEL", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 12 },
            head: [['Grad Nr Nome', 'Horário']],
            body: anexoB,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                let logo = new Image();

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 32, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\n", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO B - RELAÇÃO DE DISTRIBUIÇÃO DOS POSTOS DA GUARDA DO QUARTEL", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 12 },
            head: [['Grad Nr', 'Ronda', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'Plantão CCAp', 'Plantão CCAp', 'Plantão CEEM']],
            body: cRefatorado,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                let logo = new Image();

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 32, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\n", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO C - ESCALA DE  RONDA", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Adjunto Of Dia', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['P/G Nr NOME', 'COMPANHIA', 'Hora Entrada', 'Hora Saída']],
            body: anexoD,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
                let logo = new Image();

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 32, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\n", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO D - CONTROLE DE MILITARES E SERVIDORES CIVIS QUE ENTRARAM NO BTL APÓS 22:00 HORAS", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Ch 2ª Seção', data.settings.margin.left, pageHeight - 10)
                doc.text('Oficial de Dia', 140, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['NOME', 'IDENTIFICAÇÃO', 'CRACHÁ', 'DESTINO', 'Hora Entrada', 'Hora Saída', 'CONTATO']],
            body: anexoE,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
                let logo = new Image()

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 30, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n \n", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO E - RELAÇÃO DE CONTROLE DE ENTRADA E SAIDA – PÚBLICO EXTERNO", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Ch 2ª Seção', data.settings.margin.left, pageHeight - 10)
                doc.text('Oficial de Dia', 140, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['NOME', 'IDENTIFICAÇÃO', 'VEÍCULO', 'COR', 'PLACA', 'HORÁRIO', 'DESTINO', 'ANOTADOR']],
            body: anexoF,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
                let logo = new Image()

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 30, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\nANEXO F - Entrada de veículos sem selo", pageWidth / 2, 40, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    document.getElementById('showProgress').innerText = "30%"

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['NOME', 'COMPANHIA', 'HORARIO', 'ANOTADOR']],
            body: anexoG,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
                let logo = new Image()

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 30, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO G - RELAÇÃO DOS MILITARES E SERVIDORES CIVIS QUE ENTRARAM\n   NO BATALHÃO APÓS O INICIO DO EXPEDIENTE  (07:30/12:00 - 13:30/17:00)", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Ch Div Pes', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    document.getElementById('showProgress').innerText = "60%"

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['PREFIXO', 'Hora Saida', 'Hora Entrada', 'Km Saida', 'Km Entrada', 'KM RODADO', 'DESTINO', 'MOTORISTA', 'Ch. VIATURA']],
            body: anexoH,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
                let logo = new Image()

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 30, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães", pageWidth / 2, 40, { align: 'center' })
                doc.text("ANEXO H - CONTROLE DE VIATURAS DIVERSAS", pageWidth / 2, 52, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Fisc Adm', data.settings.margin.left, pageHeight - 10)
                doc.text('Of Dia', 140, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    doc.addPage()

    document.getElementById('showProgress').innerText = "60%"

    doc.autoTable(
        {
            startY: 60,
            styles: { cellPadding: 0.5, fontSize: 8 },
            head: [['HORA DE SAIDA', 'HORA DE ENTRADA', 'ODOMETRO SAIDA', 'ODOMETRO ENTRADA', 'DESTINO', 'MOTORISTA', 'ACOMPANHANTE']],
            body: anexoI,

            didDrawPage: function (data) {
                let pageSize = doc.internal.pageSize
                let pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight()
                var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
                let logo = new Image()

                doc.setFontSize(12)
                doc.setFont(undefined, "bold")
                // Add an image to the header
                logo.src = "../../src/images/coat.png"
                doc.addImage(logo, "png", 136, 8, 20, 20)
                // Add the text to the header
                doc.text("MINISTÉRIO DA DEFESA\n EXÉRCITO BRASILEIRO", pageWidth / 2, 30, { align: 'center' })
                doc.text("9º Batalhão de Engenharia de Construção\nBatalhão General Couto de Magalhães\n\nANEXO I - Entrada e saída de viatura", pageWidth / 2, 40, { align: 'center' })
                //footer
                doc.setFont(undefined, "normal")
                doc.text('Oficial de Dia', data.settings.margin.left, pageHeight - 10)
                doc.text('Cmt Gda', 250, pageHeight - 10)
            }
        })
    document.getElementById('showProgress').innerText = "100%"
    document.getElementById('statusMsg').innerText = "O PDF Foi salvo na pasta de downloads do seu dispositivo."
    doc.save('Anexos.pdf')
}