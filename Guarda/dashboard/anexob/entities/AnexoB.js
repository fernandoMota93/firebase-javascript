class AnexoB {
    constructor(check, time, name) {
        this.check = check
        this.time = time
        this.name = name
    }

    checkSentinelSize() {

        docRef.where("anexo", "==", "B")
            .get()
            .then(query => {
                if (query.size > 0) {
                    alert('A guarda ja foi registrada, você pode edita-la abaixo')
                } else {
                    docRef.where("anexo", "==", "A")
                        .get()
                        .then(query => {
                            let size = query.size
                            if (query.size >= 1) {
                                controllerRender(this.check = true, size)
                            } else {
                                controllerRender(this.check = false, size)
                            }
                        }).catch((err) => {
                            this.check = false
                            throw new Error(err, 'Erro ao consultar: ')
                        })
                }
            }).catch((err) => {
                throw new Error(err, 'Erro ao consultar: ')
            })


    }

    createData(size) {
        return createData_B(size)
    }

    readCurrentDay(){
        return readCurrentDay_B()
    }

    renderEditModal(id) {
        //anexo A View
        return renderEditModal_B(id)
    }

    fetchOneDocForUpdate(id) {
        return fetchOneDocForUpdate_B(id)
    }

    updateData(id) {
        return updateData_B(id)
    }

}