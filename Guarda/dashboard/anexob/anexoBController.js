const btnRegistrar = document.getElementById('btnRegistrar')
let renderAmount = document.getElementById('renderAmount')
let checkData = false

let anexoB = new AnexoB()
//Load all the data in table after get and format from firestore
document.body.onload = anexoB.checkSentinelSize(),anexoB.readCurrentDay()

const controllerRender = (check, size) => {
    if (check == true) {
        checkData = check
        console.log('renderizar baseado em dados')
        renderBasedOnSize(size)

    } else {
        alert('Considere preencher o ANEXO A antes')
        renderWithNoData()

        //event render amount for the form     
        document.getElementById('soldierAmount').addEventListener('click', (e) => {
            e.preventDefault()
            renderAmount.innerHTML = ''
            renderSentinelFields(soldierAmount.value)
            btnRegistrar.style.visibility = 'visible'
        })
    }
}

//this will trigger preparations and render from ANEXOA name values and size
const renderBasedOnSize = (size) => {
    //call model to get all names to render
    fetchSentinelDataForAnexoB(size)
}

//register into firestore the sentinels for the day
btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault()
    if(checkData == true){
       anexoB.createData(document.getElementById('size').value)
    } else {
        anexoB.createData(soldierAmount.value)
    }
    
})

//handler for update value
const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')

    //Parse dinamically the values to "updateData" refering the id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoB.updateData(id)
    })
}


