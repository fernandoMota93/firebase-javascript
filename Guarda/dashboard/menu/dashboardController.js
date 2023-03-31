let dashboard = new Dashboard()
let btnRead = document.getElementById('btnRead')
let progressModal = document.getElementById('progress')

btnRead.addEventListener('click', () =>{
    console.log("CONSULTANDO FIREBASE")
    dashboard.readCurrentDay()
    renderProgressModal()
})

const handleGerarPDF = (anexoD, anexoE, anexoF, anexoG, anexoH, anexoI) =>{
    console.log('DOCS OK')
    dashboard.gerarPDF(anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)
}