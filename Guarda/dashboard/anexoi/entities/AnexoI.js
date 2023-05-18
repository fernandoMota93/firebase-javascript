class AnexoI {
    constructor(exitTime, exitOdometer, destiny, driver, escort) {
        this.exitTime = exitTime
        this.exitOdometer = exitOdometer
        this.destiny = destiny
        this.driver = driver
        this.escort = escort
    }

    createData() {
        //anexo I Model
        return createData_I()
    }

    readCurrentDay() {
        //anexo I Model
        return readCurrentDay_I()
    }

    renderEditModal(id) {
        //anexo I View
        return renderEditModal_I(id)
    }

    fetchOneDocForUpdate(id) {
        //anexo I Model
        return fetchOneDocForUpdate_I(id)
    }

    updatePrefix(){
        return updatePrefix_I()
    }

    updateData(id) {
        return updateData_I(id)
    }
}