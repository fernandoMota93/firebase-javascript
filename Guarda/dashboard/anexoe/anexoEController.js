let anexoE = new AnexoE()
const createDataForm = document.getElementById('createData')


createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    anexoE.createData()
})


//Manipulate the DOM after load the page
document.body.onload = anexoE.readCurrentDay(),
    //put this as a helper for the user input in the "createData" form
    document.getElementById('entranceTime').value = getTimeStampForCollection().hourMin

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the doc id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoE.updateData(id)
    })
}

const HandlerRefreshPage = (id) =>{
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}
