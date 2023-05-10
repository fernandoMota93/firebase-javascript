class AnexoC {
    constructor(check, sentinel, rondantes) {
        this.check = check
        this.sentinel = sentinel
        this.rondantes = rondantes
    }


    checkSentinelSize() {
        docRef.where("anexo", "==", "B")
            .get()
            .then(query => {
                if (query.size <= 0) {
                    return new Error(alert('Peça ao Comandante da Gda registrar o ANEXO B! GUARDA = ' + query.size))
                } else {
                    controllerRender(query.size)
                }
            }).catch((err) => {
                throw new Error(err)
            })
    }

    createRonda(sentinelSize, soldierSize) {
        createRondaSentinel_C(sentinelSize)
        createRondaPlantao_C(soldierSize)
    }

    renderEditModal(id){
        return renderEditModal_C(id)
    }

    fetchOneDocForUpdate(id) {
        return fetchOneDocForUpdate_C(id)
    }

    updateData(id) {
        return updateData_C(id)
    }

}