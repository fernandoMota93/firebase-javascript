class Dashboard {

    constructor(){
        
    }

    readCurrentDay(){
        //model
        return readCurrentDayCollection()
    }

    gerarPDF(anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI){
        //view
        return gerarPDF(anexoA, anexoB, anexoC, anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)
    }
}