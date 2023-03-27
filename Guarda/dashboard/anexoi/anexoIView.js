//Transform each key/value into html text
function viewDataInTable_I(dataFromFirestore) {
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

        //After get the data row from firestore, create "options" panel in the last coll
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }

        //Insert a td to the created node with update button
        let td = document.createElement('td')
        td.innerHTML =
            `
            <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoI.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
            `
        insertAfter(td, row.lastElementChild)

    })
}


//the button from "displayDataInTable_I()" was clicked and triggered the "#editDataModal"
const renderEditModal_I = (id) => {
    let updateModal = document.getElementById('updateModal')
    updateModal.innerHTML =
        `
        <div class="modal fade" id="editDataModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header inline-block">
                    <h5 class="modal-title">Entrada da Viatura de Dia</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <p class="pl-4 mb-0">Hora da saída: </p>
                        <p id="showExitTime" class="text font-weight-bold"></p>
                    </div>
                    <div class="row">
                        <p class="pl-4">Odômetro de saída: </p>
                        <p id="showExitOdometer" class="text font-weight-bold"></p>
                    </div>
                    <hr class="py-1">
                    <form action="#" class="signin-form " id="editForm">
                        <div class="form-group mt-3">
                            <input type="text" id="returnTime" class="form-control" required disabled>
                            <label class="form-control-placeholder" for="username">Hora da Entrada</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="returnOdometer" class="form-control" required>
                            <label class="form-control-placeholder" for="returnOdometer">Odômetro retorno
                                (completo)</label>

                        </div>
                        <div class="form-group">
                            <input type="text" id="observations" class="form-control">
                            <label class="form-control-placeholder" for="observations">Observações</label>
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
    anexoI.fetchOneDocForUpdate(id)

    //call the controller    
    handlerUpdateData(id)

}

