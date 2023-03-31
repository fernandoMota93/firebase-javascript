//Transform each key/value into html text
function viewDataInTable_D(dataFromFirestore) {
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
        
        if (row.children[3].innerText == '' || row.children[2].innerText == '' ) {
            td.innerHTML =
                `
                 <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoD.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-sign-out"></i></button>
                `
        } else {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="alert('O senhor já confirmou esta saida.')"; class="btn btn-secondary mb-1" ><i class="fa fa-times"></i></button>
                `
        }
        insertAfter(td, row.lastElementChild)

    })
}


//the button from "displayDataInTable_D()" was clicked and triggered the "#editDataModal"
const renderEditModal_D = (id) => {
    let updateModal = document.getElementById('updateModal')
    updateModal.innerHTML =
        `
        <div class="modal fade" id="editDataModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header inline-block">
                    <h5 class="modal-title" id="editModalTitle">Marcar saída ou entrada</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <p class="pl-4 mb-0">Marcar hora de entrada ou saída do militar. <br>OBS.: Uma vez marcado não é possivel desfazer.</p>
                    </div>

                    <hr class="py-1">
                    <form action="#" class="signin-form " id="editForm">
                        <div class="form-group mt-3">
                            <label class="p-0" for="username">Hora atual</label>
                            <input type="text" id="actualTime" class="form-control" required disabled>  
                            <input type="hidden" id="timeType" value="">           
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
    anexoD.fetchOneDocForUpdate(id)

    //call the controller    
    handlerUpdateData(id)

}

