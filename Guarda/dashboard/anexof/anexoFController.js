const createDataForm = document.getElementById('createData')

createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createData_F()
})

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        updateData_F(id)
    })
}

const HandlerRefreshPage = (id) => {
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}
