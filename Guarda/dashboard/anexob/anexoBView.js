
//render based on ANEXOA sentinel amount and names
const renderWithData = (names,size) =>{
    console.log(size) 

    let pgOptions = ['Selecione...', '1º Quarto (08:00)', '2º Quarto (10:00)', '3º Quarto (12:00)']
    let pgOptionsValues = ['Selecione...', '08:00AM - 02:00PM - 08:00PM - 02:00AM', '10:00AM - 04:00PM - 10:00PM - 04:00AM','12:00AM - 06:00PM - 12:00PM - 06:00AM']
    for (let i = 1; i < size + 1; i++) {

        let fieldset = document.createElement('fieldset'),
            legend = document.createElement('legend'),
            divPG = document.createElement('div'),
            divName = document.createElement('div'),
            labelName = document.createElement('label'),
            select = document.createElement('select'),
            labelSelect = document.createElement('label'),
            inputName = document.createElement('input'),
            hidden = document.createElement('input')

        for (let i = 0; i < pgOptions.length; i++) {
            let option = document.createElement("option");
            option.value = pgOptionsValues[i];
            option.text = pgOptions[i];
            select.appendChild(option);
            document.querySelectorAll('option[value="Selecione..."]').required = true

        }

        fieldset.classList.add('border', 'p-2', 'mb-4')
        legend.classList.add('w-auto')
        legend.innerText = 'Sentinela #' + i

        divPG.classList.add('form-group')
        divName.classList.add('form-group')


        select.classList.add('form-control', 'mb-4')
        select.setAttribute('id', 'time' + i)
        labelSelect.innerText = 'Qual quarto de hora'
        labelSelect.classList.add('form-control-placeholder', 'my-2')

        inputName.classList.add('form-control', 'mb-4')
        inputName.type = 'text'
        inputName.setAttribute('id', 'name' + i)
        inputName.value = names[i-1]

        labelName.innerText = "Número e Nome (535Brasil)"
        labelName.classList.add('form-control-placeholder')

        hidden.setAttribute('type','hidden')
        hidden.setAttribute('id', 'size')
        hidden.setAttribute('value', size)

        renderAmount.insertAdjacentElement('beforebegin', fieldset)
            .appendChild(legend)
            .insertAdjacentElement('afterend', divPG)
            .appendChild(labelName)
            .insertAdjacentElement('afterend', select)
            .insertAdjacentElement('afterend', labelSelect)
            .insertAdjacentElement('afterend', divName)
            .appendChild(inputName)
            .insertAdjacentElement('afterend', labelName)
            .insertAdjacentElement('afterend', hidden)

        document.querySelectorAll('label')[1].setAttribute('for', 'pg')
        document.getElementById('btnRegistrar').style.visibility = 'visible'
    }
}

const renderWithNoData = () =>{
    document.getElementById('selectAmount').innerHTML =
    `
    <label for="soldierAmount">Quantos postos na guarda para hoje?</label>
        <select class="form-control" name="soldierAmount" id="soldierAmount" required>
            <option selected disabled>Selecione...</option>
            <option value="3">1</option>
            <option value="6">2</option>
            <option value="9">3</option>
            <option value="12">4</option>
            <option value="15">5</option>
            <option value="18">6</option>
            <option value="21">7</option>
        </select>
    `
}

//render sentinel size
const renderSentinelFields = (size) => {

    let pgOptions = ['Selecione...', 'Sd Ef Vrv', 'Sd Ef Prfl']
    let timeOptions = ['Selecione...', '1º Horario (08:00)', '2º Horario (10:00)','3º Horario (12:00']
    let timeOptionsValue = ['Selecione...', '08:00AM - 02:00PM - 08:00PM - 02:00AM', '10:00AM - 04:00PM - 10:00PM - 04:00AM','12:00AM - 06:00PM - 12:00PM - 06:00AM']

    for (let i = 1; i <= size; i++) {

        let fieldset = document.createElement('fieldset'),
            legend = document.createElement('legend'),
            divPG = document.createElement('div'),
            divName = document.createElement('div'),
            divWeapon = document.createElement('div'),
            labelName = document.createElement('label'),
            labelSelectPG = document.createElement('label'),
            labelSelectTime = document.createElement('label'),
            select = document.createElement('select'),
            selectTime = document.createElement('select'),
            inputName = document.createElement('input'),
            inputWeapon = document.createElement('input')


        for (let i = 0; i < pgOptions.length; i++) {
            let option = document.createElement("option");
            option.value = pgOptions[i];
            option.text = pgOptions[i];
            select.appendChild(option);
            document.querySelectorAll('option[value="Selecione..."]').required = true
        }

        for (let i = 0; i < timeOptions.length; i++) {
            let optionTime = document.createElement("option");
            optionTime.value = timeOptionsValue[i];
            optionTime.text = timeOptions[i];
            selectTime.appendChild(optionTime);
            document.querySelectorAll('option[value="Selecione..."]').required = true
        }

        fieldset.classList.add('border', 'p-2', 'mb-4')
        legend.classList.add('w-auto')
        legend.innerText = 'Sentinela #' + i

        divPG.classList.add('form-group')
        divName.classList.add('form-group')
        divWeapon.classList.add('form-group')

        labelSelectPG.innerText="Posto/graduação"
        labelSelectPG.classList.add('form-control-placeholder', 'mt-1')
        select.classList.add('form-control', 'mb-4')
        select.setAttribute('id', 'pg'+i)

        labelSelectTime.innerText="Horário"
        labelSelectTime.classList.add('form-control-placeholder', 'mt-1')
     
        selectTime.classList.add('form-control', 'mb-4')
        selectTime.setAttribute('id', 'time'+i)
        selectTime.setAttribute('for', 'time'+i)

        inputName.classList.add('form-control', 'mb-4')
        inputName.type = 'text'
        inputName.setAttribute('id', 'name'+i)
        
        inputWeapon.classList.add('form-control')
        inputWeapon.type = 'text'
        inputWeapon.setAttribute('id', 'weaponNumber'+i)

        labelName.innerText="Número e Nome (535Brasil)"
        labelName.classList.add('form-control-placeholder')

        renderAmount.insertAdjacentElement('beforebegin',fieldset)
        .appendChild(legend)
        .insertAdjacentElement('afterend',divPG)
        .appendChild(labelName)

        .insertAdjacentElement('afterend',select)
        .insertAdjacentElement('afterend',labelSelectPG)
        .insertAdjacentElement('afterend',divWeapon)
        .appendChild(selectTime)
        .insertAdjacentElement('afterend',labelSelectTime)
        .insertAdjacentElement('afterend', divName)
        .appendChild(inputName)
        .insertAdjacentElement('afterend',labelName)
        
        document.querySelectorAll('label')[1].setAttribute('for', 'pg')
    }
}

//function viewDataInTable transform each doc into html text
const viewDataInTable_B = (dataFromFirestore) =>{
    
    let table = document.getElementById('dataTable')
    
    dataFromFirestore.sort((a, b) => {
        if (a[4] < b[4]) {
            return -1;
        }
        if (a[4] > b[4]) {
            return 1;
        }
        return 0;
        
    })

    
    dataFromFirestore.forEach((doc) => {
        let row = table.insertRow()
        row.setAttribute('id', 'row')

        Object.keys(doc).forEach((key) => {
            let cell = row.insertCell()
            cell.innerHTML = doc[key]

        })
        //document id for UPDATE BUTTON
        let id = row.children[0].innerHTML

        //this remove the "document id" from html component, user don´t need to know.
        row.deleteCell(0)

        //After get the data row from firestore, create option panel for the last coll
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        let td = document.createElement('td')
        td.innerHTML =
            `
         <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoB.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
        `
        insertAfter(td, row.lastElementChild)

    })
}

//This function get one element for edition
const renderEditModal_B = (id) => {

    let updateModal = document.getElementById('updateModal')
    updateModal.innerHTML =
        `
        <div class="modal fade" id="editDataModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar regsitro</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" class="signin-form " id="editForm">
                            <div class="form-group mt-3">
                                <input type="text" id="editTime" class="form-control" required>
                                <label class="form-control-placeholder" for="editTime">Horario</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editName" class="form-control" required>
                                <label class="form-control-placeholder" for="editName">PG/Nr/Nome</label>
                            </div>
                            <div class="form-group">
                                <button type="submit" id="btnUpdate"
                                    class="form-control btn btn-primary rounded submit px-3 mb-2">Atualizar registro
                                </button>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <p>Editando registro</p>
                    </div>
                </div>
            </div>
        </div>
        `
    //call the model -> get the document and show data in modal   
    anexoB.fetchOneDocForUpdate(id)

    //call the controller -> 
    handlerUpdateData(id)
}