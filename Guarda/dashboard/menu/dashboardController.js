let dashboard = new Dashboard()
let btnRead = document.getElementById('btnRead')
let progressModal = document.getElementById('progress')

btnRead.addEventListener('click', () =>{
    console.log("CONSULTANDO FIREBASE")
    dashboard.readCurrentDay()
    renderProgressModal()
})

const handleGerarPDF = (anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI) =>{
    console.log('DOCS OK')
    dashboard.gerarPDF(anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)
}