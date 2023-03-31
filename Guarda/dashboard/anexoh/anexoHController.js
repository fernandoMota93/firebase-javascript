let anexoH = new AnexoH()
const createDataForm = document.getElementById('createData')


createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    anexoH.createData()
})


//Manipulate the DOM after load the page
document.body.onload = anexoH.readCurrentDay(),
    //put this as a helper for the user input in the "createData" form
    document.getElementById('exitTime').value = getTimeStampForCollection().hourMin

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the doc id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoH.updateData(id)
    })
}

const HandlerRefreshPage = (id) =>{
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}

