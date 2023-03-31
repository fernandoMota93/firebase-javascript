class Dashboard {

    constructor(){
        
    }

    readCurrentDay(){
        //model
        return readCurrentDayCollection()
    }

    gerarPDF(anexoD, anexoE, anexoF, anexoG, anexoH, anexoI){
        //view
        return gerarPDF(anexoD, anexoE, anexoF, anexoG, anexoH, anexoI)
    }
}