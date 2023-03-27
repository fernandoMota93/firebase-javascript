class AnexoF {
    constructor(nome, identificacao, veiculo, cor, placa, destino, anotador) {
        this.nome = nome
        this.identificacao = identificacao
        this.veiculo = veiculo
        this.cor = cor
        this.placa = placa
        this.destino = destino
        this.anotador = anotador
    }

    createData() {
        //anexo F Model
        return createData_F()
    }

    readCurrentDay() {
        //anexo F Model
        return readCurrentDay_F()
    }

    renderEditModal (id){
        //anexo F View
        return renderEditModal_F(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo F Model
        return fetchOneDocForUpdate_F(id)
    }

    updateData(id) {
        return updateData_F(id)
    }
}