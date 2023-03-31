class AnexoE {
    constructor(name, document, tagNumber, destiny, entranceTime, contact) {
        this.name = name
        this.document = document
        this.tagNumber = tagNumber
        this.destiny = destiny
        this.entranceTime = entranceTime
        this.contact = contact
    }

    createData() {
        //anexo E Model
        return createData_E()
    }

    readCurrentDay() {
        //anexo E Model
        return readCurrentDay_E()
    }

    renderEditModal(id) {
        //anexo E View
        return renderEditModal_E(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo E Model
        return fetchOneDocForUpdate_E(id)
    }

    updateData(id) {
        return updateData_E(id)
    }
}