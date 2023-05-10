class AnexoA {
    constructor(name, weaponNumber) {
        this.name = name
        this.weaponNumber = weaponNumber
    }

    createData() {
        return createData_A()
    }

    readCurrentDay() {
        return readCurrentDay_A()
    }

    renderEditModal(id) {
        //anexo A View
        return renderEditModal_A(id)
    }

    fetchOneDocForUpdate(id) {
        return fetchOneDocForUpdate_A(id)
    }

    updateData(id) {
        return updateData_A(id)
    }
}