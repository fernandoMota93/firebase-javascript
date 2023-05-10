class AnexoF {
    constructor(name, identification, vehicle, color, tag, destiny, responsible) {
        this.name = name
        this.identification = identification
        this.vehicle = vehicle
        this.color = color
        this.tag = tag
        this.destiny = destiny
        this.responsible = responsible
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