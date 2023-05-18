let dashboard = new Dashboard()
let btnRead = document.getElementById('btnRead')
let progressModal = document.getElementById('progress')

btnRead.addEventListener('click', () => {
    console.log("CONSULTANDO FIREBASE")
    dashboard.readCurrentDay()
    renderProgressModal()
})

const handleGerarPDF = (anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI) => {
    console.log('DOCS OK')
    let anexoCSort = anexoC.sort((a, b) => {
        let lastElementA = a[a.length - 1];
        let lastElementB = b[b.length - 1];

        if (lastElementA < lastElementB) {
            return -1;
        }
        if (lastElementA > lastElementB) {
            return 1;
        }
        return 0;
    })
    console.log(anexoCSort)
    dashboard.gerarPDF(anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)
}