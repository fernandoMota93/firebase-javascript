//function viewDataInTable transform each doc into html text
const viewDataInTable_F = (dataFromFirestore) =>{
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
         <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="getDataForEditModal_F('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
        `
        insertAfter(td, row.lastElementChild)

    })
}

//This function get one element for edition
const getDataForEditModal_F = (id) => {

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
                                <input type="text" id="editVeiculo" class="form-control" required>
                                <label class="form-control-placeholder" for="editVeiculo">Veículo</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editCor" class="form-control" required>
                                <label class="form-control-placeholder" for="editCor">Cor do veículo</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editPlaca" class="form-control" required>
                                <label class="form-control-placeholder" for="editPlaca">Placa do veículo</label>
                            </div>
                            <div class="form-group">
                                <input type="hidden" id="editHorario" class="form-control" required>
                                <label class="form-control-placeholder" for="editHorario">Hora de entrada</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editDestino" class="form-control" required>
                                <label class="form-control-placeholder" for="editDestino">Onde vai?</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="editAnotador" class="form-control" value="Sd " required>
                                <label class="form-control-placeholder" for="editAnotador">Anotador</label>
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
    fetchOneDocForUpdate(id)

    //call the controller -> 
    handlerUpdateData(id)
}



//Load all the data in table after get and format from firestore
document.body.onload = readCurrentDay_F()