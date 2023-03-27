let anexoF = new AnexoF()

const createDataForm = document.getElementById('createData')

createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    anexoF.createData()
})

//Load all the data in table after get and format from firestore
document.body.onload = anexoF.readCurrentDay()

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoF.updateData(id)
    })
}

const HandlerRefreshPage = (id) => {
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}
