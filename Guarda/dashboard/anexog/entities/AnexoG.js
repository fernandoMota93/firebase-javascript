class AnexoG {
    constructor (name, company, time, taker){
        this.name = name
        this.company = company
        this.time = time
        this.taker = taker
    }

    createData() {
        //anexo G Model
        return createData_G()
    }

    readCurrentDay() {
        //anexo G Model
        return readCurrentDay_G()
    }

    renderEditModal(id) {
        //anexo G View
        return renderEditModal_G(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo G Model
        return fetchOneDocForUpdate_G(id)
    }

    updateData(id) {
        return updateData_G(id)
    }
}
