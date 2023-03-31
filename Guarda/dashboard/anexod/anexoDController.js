let anexoD = new AnexoD()
const createDataForm = document.getElementById('createData')
const chooseOption = document.getElementById('choose')
let timeRegister = 0

createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    anexoD.createData()
})

chooseOption.addEventListener('change', (e)=>{
    e.preventDefault()
    timeRegister = chooseOption.value
    console.log(timeRegister)
})


//Manipulate the DOM after load the page
document.body.onload = anexoD.readCurrentDay(),
    //put this as a helper for the user input in the "createData" form
    document.getElementById('time').value = getTimeStampForCollection().hourMin

const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')
    //Parse dinamically the values to "updateData" refering the doc id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoD.updateData(id)
    })
}

const HandlerRefreshPage = (id) =>{
    const updateDataForm = document.getElementById('editForm')
    updateDataForm.reset()
    refreshPage(id)
}

