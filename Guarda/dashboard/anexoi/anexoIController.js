let anexoI = new AnexoI()
let btnEditPrefix = document.getElementById("btnEditPrefix")
let btnConfirmPrefix = document.getElementById("btnConfirmPrefix")
const createDataForm = document.getElementById('createData')


createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    anexoI.createData()
})


//handle edit prefix
btnEditPrefix.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById('prefix').disabled = false
    btnEditPrefix.style.display = "none"
    btnConfirmPrefix.style.display = "inline"
})

//confirm edit prefix
btnConfirmPrefix.addEventListener("click", (e) => {

    if (document.getElementById('prefix').value == '') {
        alert('Informe um prefixo')

    } else {
        e.preventDefault()
        document.getElementById('prefix').disabled = true
        btnConfirmPrefix.style.display = "none"
        btnEditPrefix.style.display = "inline"
        anexoI.updatePrefix()
    }

})


//Manipulate the DOM after load the page
document.body.onload = anexoI.readCurrentDay(),
    //put this as a helper for the user input in the "createData" form
    document.getElementById('exitTime').value = getTimeStampForCollection().hourMin,
    //get prefix
    getPrefix()

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the doc id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoI.updateData(id)
    })
}

const HandlerRefreshPage = (id) => {
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}

