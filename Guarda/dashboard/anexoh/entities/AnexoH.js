class AnexoH {
    constructor(prefixo, horarioSaida, odometroSaida, destino, motorista, acompanhante) {
        this.prefixo = prefixo
        this.horarioSaida = horarioSaida
        this.odometroSaida = odometroSaida
        this.destino = destino
        this.motorista = motorista
        this.acompanhante = acompanhante
    }

    createData() {
        //anexo H Model
        return createData_H()
    }

    readCurrentDay() {
        //anexo F Model
        return readCurrentDay_H()
    }

    renderEditModal(id) {
        //anexo F View
        return renderEditModal_H(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo F Model
        return fetchOneDocForUpdate_H(id)
    }

    updateData(id) {
        return updateData_H(id)
    }
}