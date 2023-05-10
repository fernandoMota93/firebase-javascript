const soldierAmount = document.getElementById('soldierAmount')
const btnRegistar = document.getElementById('btnRegistar')
let renderAmount = document.getElementById('renderAmount')

let anexoA = new AnexoA()

//Load all the data in table after get and format from firestore
document.body.onload = anexoA.readCurrentDay()

//event render amount for the form
soldierAmount.addEventListener('change', (e) =>{
    e.preventDefault()
    renderAmount.innerHTML = ''
    renderSentinelFields(soldierAmount.value)
    btnRegistar.style.visibility = 'visible'
})

//event should update the amount to zero
soldierAmount.addEventListener('click', (e) =>{
    e.preventDefault()
    $( "#renderAmount" ).load(window.location.href + " #renderAmount" )

})

//register into firestore the sentinels for the day
btnRegistar.addEventListener('click', (e) => {
    e.preventDefault()
    anexoA.createData()
})

//handler for update value
const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')

    //Parse dinamically the values to "updateData" refering the id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoA.updateData(id)
    })
}