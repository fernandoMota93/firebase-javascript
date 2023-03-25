//Transform each key/value into html text
function displayDataInTable_Users(dataFromFirestore) {
    let table = document.getElementById('userTable')

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
        row.deleteCell(0)

        //After get the data row from firestore, create option panel for the last coll
        function insertAfter(newNode, existingNode) {
            existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        let td = document.createElement('td')

        if (row.lastElementChild.innerText == 'locked') {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" onclick="unLockUser('` + id + `')" class="btn btn-warning mb-1"><i class="fa fa-unlock"></i></button>
                <button type="button" id="`+ id + `" onclick="editUser('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-pencil"></i></button>
                `
        } else {
            td.innerHTML =
                `
                <button type="button" id="`+ id + `" onclick="checkUsrFrst('` + id + `')" class="btn btn-danger mb-1"><i class="fa fa-lock"></i></button>
                <button type="button" id="`+ id + `" onclick="editUser('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-pencil"></i></button>
                `
        }

        insertAfter(td, row.lastElementChild)
    })
}

//Load all the data in table after get and format from firestore
document.body.onload = readAllUsers()