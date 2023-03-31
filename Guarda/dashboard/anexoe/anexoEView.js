//Transform each key/value into html text
function viewDataInTable_E(dataFromFirestore) {
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

        

        if (row.children[5].innerText == '') {
            td.innerHTML =
                `
                 <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoE.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-sign-out"></i></button>
                `
        } else {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="alert('O senhor já confirmou este registro.')"; class="btn btn-secondary mb-1" ><i class="fa fa-times"></i></button>
                `
        }


        insertAfter(td, row.lastElementChild)
    })
}


//the button from "displayDataInTable_I()" was clicked and triggered the "#editDataModal"
const renderEditModal_E = (id) => {
    let updateModal = document.getElementById('updateModal')
    updateModal.innerHTML =


        `
        <div class="modal fade" tabindex="-1" role="dialog" id="editDataModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmar saída</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Confirmar saida de: </p>
                        <p id="showName" class="text font-weight-bold"></p>
                    </div>
                    <div class="modal-footer">
                        <form action="#" class="signin-form " id="editForm">
                            <button type="submit" id="btnUpdate" class="btn btn-primary">Sim</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    `

    //call the model -> get the document and show data in modal   
    anexoE.fetchOneDocForUpdate(id)

    //call the controller    
    handlerUpdateData(id)

}

