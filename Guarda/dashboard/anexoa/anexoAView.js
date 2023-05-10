//render sentinel size
const renderSentinelFields = (size) => {

    let pgOptions = ['Selecione...', 'Sd Ef Vrv', 'Sd Ef Prfl']

    for (let i = 1; i <= size; i++) {

        let fieldset = document.createElement('fieldset'),
            legend = document.createElement('legend'),
            divPG = document.createElement('div'),
            divName = document.createElement('div'),
            divWeapon = document.createElement('div'),
            labelName = document.createElement('label'),
            labelWeapon = document.createElement('label'),
            select = document.createElement('select'),
            inputName = document.createElement('input')
            inputWeapon = document.createElement('input')


        for (let i = 0; i < pgOptions.length; i++) {
            let option = document.createElement("option");
            option.value = pgOptions[i];
            option.text = pgOptions[i];
            select.appendChild(option);
            document.querySelectorAll('option[value="Selecione..."]').required = true
        }

        fieldset.classList.add('border', 'p-2', 'mb-4')
        legend.classList.add('w-auto')
        legend.innerText = 'Sentinela #' + i

        divPG.classList.add('form-group')
        divName.classList.add('form-group')
        divWeapon.classList.add('form-group')

        select.classList.add('form-control', 'mb-4')
        select.setAttribute('id', 'pg'+i)

        inputName.classList.add('form-control', 'mb-4')
        inputName.type = 'text'
        inputName.setAttribute('id', 'name'+i)
        
        inputWeapon.classList.add('form-control')
        inputWeapon.type = 'text'
        inputWeapon.setAttribute('id', 'weaponNumber'+i)

        labelName.innerText="Número e Nome (535Brasil)"
        labelName.classList.add('form-control-placeholder')

        labelWeapon.innerText="Nr do armamento"
        labelWeapon.classList.add('form-control-placeholder')





        renderAmount.insertAdjacentElement('beforebegin',fieldset)
        .appendChild(legend)
        .insertAdjacentElement('afterend',divPG)
        .appendChild(labelName)
        .insertAdjacentElement('afterend',select)
        .insertAdjacentElement('afterend', divName)
        .appendChild(inputName)
        .insertAdjacentElement('afterend',labelName)
        .insertAdjacentElement('afterend',divWeapon)
        .appendChild(inputWeapon)
        .insertAdjacentElement('afterend',labelWeapon)

   

        document.querySelectorAll('label')[1].setAttribute('for', 'pg')
    }
}

//function viewDataInTable transform each doc into html text
const viewDataInTable_A = (dataFromFirestore) =>{
    let table = document.getElementById('dataTable')

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
         <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoA.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
        `
        insertAfter(td, row.lastElementChild)

    })
}

//This function get one element for edition
const renderEditModal_A = (id) => {

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
                                <input type="text" id="editNome" class="form-control" required>
                                <label class="form-control-placeholder" for="username">Nome do Condutor</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editIdentificacao" class="form-control" required>
                                <label class="form-control-placeholder" for="identificacao">Identificação
                                    (CNH/RG/CPF)</label>
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
    anexoA.fetchOneDocForUpdate(id)

    //call the controller -> 
    handlerUpdateData(id)
}