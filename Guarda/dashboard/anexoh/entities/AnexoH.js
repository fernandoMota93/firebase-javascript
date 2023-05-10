class AnexoH {
    constructor(prefix, exitTime, exitOdometer, destiny, driver, scout) {
        this.prefix = prefix
        this.exitTime = exitTime
        this.exitOdometer = exitOdometer
        this.destiny = destiny
        this.driver = driver
        this.scout = scout
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