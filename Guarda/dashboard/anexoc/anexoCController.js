let anexoC = new AnexoC()

document.body.onload = anexoC.checkSentinelSize()

const controllerRender = (sentinelSize) => {
    //render view to get amount of soldier
    renderGetSoldierAmount(sentinelSize)

    document.getElementById('soldierAmount').addEventListener('change', (e) => {
        e.preventDefault()
        document.getElementById('btnRegistrar').style.visibility = 'visible'

        document.getElementById('rondantes').innerHTML =
        `
        <fieldset class="">
            RONDANTES
            <div class="form-group mt-2">
                <input type="text" id="ronda1" class="form-control mb-3 mt-3" required>
                <label class="form-control-placeholder" for="ronda1">1ª Ronda (PG/Nr/Nome)</label>
            </div>

            <div class="form-group mt-2">
                <input type="text" id="ronda2" class="form-control" required>
                <label class="form-control-placeholder" for="ronda2">2ª Ronda (PG/Nr/Nome)</label>
            </div>

            <div class="form-group mt-2">
                <input type="text" id="ronda3" class="form-control" required>
                <label class="form-control-placeholder" for="ronda3">3ª Ronda (PG/Nr/Nome)</label>
            </div>

            <div class="form-group mt-2">
                <input type="text" id="ronda4" class="form-control" required>
                <label class="form-control-placeholder" for="ronda4">4ª Ronda (PG/Nr/Nome)</label>
            </div>
        </fieldset>
        `
    })

    document.getElementById('btnRegistrar').addEventListener('click', (e) =>{
        e.preventDefault()
        anexoC.createRonda(document.getElementById('sentinelSize').value, document.getElementById('soldierAmount').value)
    })
}

//handler for update value
const handlerUpdateData = (id) => {
    let btnUpdate = document.getElementById('btnUpdate')

    //Parse dinamically the values to "updateData" refering the id
    btnUpdate.addEventListener("click", (e) => {
        e.preventDefault()
        anexoC.updateData(id)
    })
}