class AnexoD {
    constructor (name, company, time){
        this.name = name
        this.company = company
        this.time = time
    }

    createData() {
        //anexo D Model
        return createData_D()
    }

    readCurrentDay() {
        //anexo D Model
        return readCurrentDay_D()
    }

    renderEditModal(id) {
        //anexo D View
        return renderEditModal_D(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo D Model
        return fetchOneDocForUpdate_D(id)
    }

    updateData(id) {
        return updateData_D(id)
    }
}
