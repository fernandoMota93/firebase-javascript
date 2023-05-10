const renderGetSoldierAmount = (sentinelSize) => {
    document.getElementById('plantoes').innerHTML =
        `
    <label>A Guarda de hoje tem <b>${sentinelSize / 3}</b> Sentinela(s) na hora.</label><br>
    <label for="soldierAmount">Quantos Plantões na hora?</label>
    <select class="form-control" name="soldierAmount" id="soldierAmount" required>
        <option selected disabled>Selecione...</option>

        <option value="3">3 (Padrão)</option>

    </select>
    <input type="hidden" id="sentinelSize" value="${sentinelSize}">
    `

    switch (sentinelSize / 3) {
        case 1:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
                <th scope="col">Opções</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 2:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 3:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">P3</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 4:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">P3</th>
                <th scope="col">P4</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 5:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">P3</th>
                <th scope="col">P4</th>
                <th scope="col">P5</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 6:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">P3</th>
                <th scope="col">P4</th>
                <th scope="col">P5</th>
                <th scope="col">P6</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        case 7:
            document.getElementById('tableHead').innerHTML =
                `
             <tr>
                <th scope="col">Rondante</th>
                <th scope="col">Horário</th>
                <th scope="col">P1</th>
                <th scope="col">P2</th>
                <th scope="col">P3</th>
                <th scope="col">P4</th>
                <th scope="col">P5</th>
                <th scope="col">P6</th>
                <th scope="col">P7</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CCAp</th>
                <th scope="col">Plantao CEEM</th>
            </tr>
            `
            readCurrentDay_C(sentinelSize)
            break;
        default:
            break;
    }
}

//function viewDataInTable transform each doc into html text
const viewDataInTable_C = (sentinelSize, dataFromFirestore) => {
    let table = document.getElementById('dataTable')
    let p1 = []
    let p2 = []
    let p3 = []
    let p4 = []
    let p5 = []
    let p6 = []
    let p7 = []
    let p8 = []
    let p9 = []
    let p10 = []
    let i = 0

    let idArray = ['', '', '', '', '','','','','','']
    let index = 0

    switch (sentinelSize / 3) {
        case 1:
            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row')

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdPlantao1.textContent = p2[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdPlantao2.textContent = p3[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdPlantao3.textContent = p4[i]
                    tr.appendChild(tdPlantao3);
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)

                //After get the data row from firestore, create option panel for the last coll
                function insertAfter(newNode, existingNode) {
                    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
                }

                let td = document.createElement('td')
                td.innerHTML =
                    `
                    <button type="button" id="`+ id + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + id + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                    `
                insertAfter(td, tr.lastElementChild)
                i++
            }
            break;

        case 2:
            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdPlantao1.textContent = p3[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdPlantao2.textContent = p4[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdPlantao3.textContent = p5[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover a ultima linha da tabela
            let row4 = document.getElementById('row4')
            row4.parentNode.removeChild(row4)

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(4, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda5(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda5 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");

                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantato CEEM</th>
                </tr>
                `
            }
            break
        case 3:

            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
                p6.push(dataFromFirestore[5][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }
                const tdP3 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP3.textContent = p2[i]
                    tr.appendChild(tdP3);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdPlantao1.textContent = p3[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdPlantao2.textContent = p4[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdPlantao3.textContent = p5[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover as linhas vazias da tabela (o laço percorre a quantidade de postos, não de rondantes)
            document.getElementById('row4').parentNode.removeChild(document.getElementById('row4'))
            document.getElementById('row5').parentNode.removeChild(document.getElementById('row5'))

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'P3':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(4, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(5, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda6(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda6 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");

                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">P3</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantato CEEM</th>
                </tr>
                `
            }
            break
        case 4:

            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
                p6.push(dataFromFirestore[5][3][key])
                p7.push(dataFromFirestore[6][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }
                const tdP3 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdP3.textContent = p3[i]
                    tr.appendChild(tdP3);
                }
                const tdP4 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdP4.textContent = p4[i]
                    tr.appendChild(tdP4);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdPlantao1.textContent = p5[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p6.length; j++) {
                    tdPlantao2.textContent = p6[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p7.length; j++) {
                    tdPlantao3.textContent = p7[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover as linhas vazias da tabela (o laço percorre a quantidade de postos, não de rondantes)
            document.getElementById('row4').parentNode.removeChild(document.getElementById('row4'))
            document.getElementById('row5').parentNode.removeChild(document.getElementById('row5'))
            document.getElementById('row6').parentNode.removeChild(document.getElementById('row6'))

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'P3':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'P4':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(4, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(5, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(6, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda7(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda7 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");

                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">P3</th>
                    <th scope="col">P4</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantato CEEM</th>
                </tr>
                `
            }
            break
        case 5:

            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
                p6.push(dataFromFirestore[5][3][key])
                p7.push(dataFromFirestore[6][3][key])
                p8.push(dataFromFirestore[7][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }
                const tdP3 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdP3.textContent = p3[i]
                    tr.appendChild(tdP3);
                }
                const tdP4 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdP4.textContent = p4[i]
                    tr.appendChild(tdP4);
                }
                const tdP5 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdP5.textContent = p5[i]
                    tr.appendChild(tdP5);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p6.length; j++) {
                    tdPlantao1.textContent = p6[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p7.length; j++) {
                    tdPlantao2.textContent = p7[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p8.length; j++) {
                    tdPlantao3.textContent = p8[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover as linhas vazias da tabela (o laço percorre a quantidade de postos, não de rondantes)
            document.getElementById('row4').parentNode.removeChild(document.getElementById('row4'))
            document.getElementById('row5').parentNode.removeChild(document.getElementById('row5'))
            document.getElementById('row6').parentNode.removeChild(document.getElementById('row6'))
            document.getElementById('row7').parentNode.removeChild(document.getElementById('row7'))

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'P3':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'P4':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'P5':
                                idArray.splice(4, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(5, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(6, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(7, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda8(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda8 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");

                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">P3</th>
                    <th scope="col">P4</th>
                    <th scope="col">P5</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantato CEEM</th>
                </tr>
                `
            }
            break
        case 6:

            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
                p6.push(dataFromFirestore[5][3][key])
                p7.push(dataFromFirestore[6][3][key])
                p8.push(dataFromFirestore[7][3][key])
                p9.push(dataFromFirestore[8][3][key])
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }
                const tdP3 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdP3.textContent = p3[i]
                    tr.appendChild(tdP3);
                }
                const tdP4 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdP4.textContent = p4[i]
                    tr.appendChild(tdP4);
                }
                const tdP5 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdP5.textContent = p5[i]
                    tr.appendChild(tdP5);
                }
                const tdP6 = document.createElement('td')
                for (let j = 0; j < p6.length; j++) {
                    tdP6.textContent = p6[i]
                    tr.appendChild(tdP6);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p6.length; j++) {
                    tdPlantao1.textContent = p6[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p7.length; j++) {
                    tdPlantao2.textContent = p7[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p8.length; j++) {
                    tdPlantao3.textContent = p8[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover as linhas vazias da tabela (o laço percorre a quantidade de postos, não de rondantes)
            document.getElementById('row4').parentNode.removeChild(document.getElementById('row4'))
            document.getElementById('row5').parentNode.removeChild(document.getElementById('row5'))
            document.getElementById('row6').parentNode.removeChild(document.getElementById('row6'))
            document.getElementById('row7').parentNode.removeChild(document.getElementById('row7'))
            document.getElementById('row8').parentNode.removeChild(document.getElementById('row8'))

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'P3':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'P4':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'P5':
                                idArray.splice(4, 1, doc.id)
                                break;
                            case 'P6':
                                idArray.splice(5, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(6, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(7, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(8, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda9(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda9 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");

                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">P3</th>
                    <th scope="col">P4</th>
                    <th scope="col">P5</th>
                    <th scope="col">P6</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantato CEEM</th>
                </tr>
                `
            }
            break
        case 7:

            dataFromFirestore.sort((a, b) => {
                if (a[4] < b[4]) {
                    return -1;
                }
                if (a[4] > b[4]) {
                    return 1;
                }
                return 0;
            });

            console.log(dataFromFirestore)

            Object.keys(dataFromFirestore).forEach((key) => {
                p1.push(dataFromFirestore[0][3][key]),
                    p2.push(dataFromFirestore[1][3][key]),
                    p3.push(dataFromFirestore[2][3][key]),
                    p4.push(dataFromFirestore[3][3][key])
                p5.push(dataFromFirestore[4][3][key])
                p6.push(dataFromFirestore[5][3][key])
                p7.push(dataFromFirestore[6][3][key])
                p8.push(dataFromFirestore[7][3][key])
                p9.push(dataFromFirestore[8][3][key])
                p10.push(dataFromFirestore[9][3][key])
                
            })

            for (let dado of dataFromFirestore) {

                const tr = document.createElement('tr');
                tr.setAttribute('id', 'row' + i)

                const tdId = document.createElement('td');
                tdId.textContent = dado[0]
                tr.appendChild(tdId);

                const tdNome = document.createElement('td');
                tdNome.textContent = dado[1][i];
                tr.appendChild(tdNome);

                const tdHora = document.createElement('td');
                tdHora.textContent = dado[2][i];
                tr.appendChild(tdHora);

                const tdP1 = document.createElement('td')
                for (let j = 0; j < p1.length; j++) {
                    tdP1.textContent = p1[i]
                    tr.appendChild(tdP1);
                }

                const tdP2 = document.createElement('td')
                for (let j = 0; j < p2.length; j++) {
                    tdP2.textContent = p2[i]
                    tr.appendChild(tdP2);
                }
                const tdP3 = document.createElement('td')
                for (let j = 0; j < p3.length; j++) {
                    tdP3.textContent = p3[i]
                    tr.appendChild(tdP3);
                }
                const tdP4 = document.createElement('td')
                for (let j = 0; j < p4.length; j++) {
                    tdP4.textContent = p4[i]
                    tr.appendChild(tdP4);
                }
                const tdP5 = document.createElement('td')
                for (let j = 0; j < p5.length; j++) {
                    tdP5.textContent = p5[i]
                    tr.appendChild(tdP5);
                }
                const tdP6 = document.createElement('td')
                for (let j = 0; j < p6.length; j++) {
                    tdP6.textContent = p6[i]
                    tr.appendChild(tdP6);
                }

                const tdP7 = document.createElement('td')
                for (let j = 0; j < p7.length; j++) {
                    tdP7.textContent = p7[i]
                    tr.appendChild(tdP7);
                }

                const tdPlantao1 = document.createElement('td')
                for (let j = 0; j < p8.length; j++) {
                    tdPlantao1.textContent = p8[i]
                    tr.appendChild(tdPlantao1);
                }

                const tdPlantao2 = document.createElement('td')
                for (let j = 0; j < p9.length; j++) {
                    tdPlantao2.textContent = p9[i]
                    tr.appendChild(tdPlantao2);
                }

                const tdPlantao3 = document.createElement('td')
                for (let j = 0; j < p10.length; j++) {
                    tdPlantao3.textContent = p10[i]
                    tr.appendChild(tdPlantao3)
                }

                table.appendChild(tr);

                //document id for UPDATE BUTTON
                let id = tr.children[0].innerHTML

                //this remove the "document id" from html component, user don´t need to know.
                tr.deleteCell(0)
                i++
                index = i

            }
            //remover as linhas vazias da tabela (o laço percorre a quantidade de postos, não de rondantes)
            document.getElementById('row4').parentNode.removeChild(document.getElementById('row4'))
            document.getElementById('row5').parentNode.removeChild(document.getElementById('row5'))
            document.getElementById('row6').parentNode.removeChild(document.getElementById('row6'))
            document.getElementById('row7').parentNode.removeChild(document.getElementById('row7'))
            document.getElementById('row8').parentNode.removeChild(document.getElementById('row8'))
            document.getElementById('row9').parentNode.removeChild(document.getElementById('row9'))

            //chama o banco para ordenar o array das IDs
            docRef.where("anexo", "==", "C")
                .get()
                .then((query) => {
                    query.forEach((doc) => {
                        switch (doc.data().posto) {
                            case 'P1':
                                idArray.splice(0, 1, doc.id)
                                break;
                            case 'P2':
                                idArray.splice(1, 1, doc.id)
                                break;
                            case 'P3':
                                idArray.splice(2, 1, doc.id)
                                break;
                            case 'P4':
                                idArray.splice(3, 1, doc.id)
                                break;
                            case 'P5':
                                idArray.splice(4, 1, doc.id)
                                break;
                            case 'P6':
                                idArray.splice(5, 1, doc.id)
                                break;
                            case 'P7':
                                idArray.splice(6, 1, doc.id)
                                break;
                            case 'Plantao1':
                                idArray.splice(7, 1, doc.id)
                                break;
                            case 'Plantao2':
                                idArray.splice(8, 1, doc.id)
                                break;
                            case 'Plantao3':
                                idArray.splice(9, 1, doc.id)
                                break;
                            default:
                                break;
                        }

                    })

                    return renderRonda10(idArray)


                }).catch((err) => {
                    throw new Error(err, 'Erro ao consultar: ')
                })

            //renderizar a tabela de lançamento da ronda com a ordem correta dos postos    
            const renderRonda10 = (idArray) => {
                //CRIA AS OPÇÕES DE LANÇAR A RONDA
                // Acessar a tabela
                let table1 = document.querySelector("#rondaTable");
                console.log(idArray)
                // Criar uma nova linha
                let newRow = table1.insertRow()
                for (let i = index - 1; i >= 0; i--) {
                    // Adicionar células na nova linha
                    let newCell = newRow.insertCell(0)
                    // Definir o conteúdo de cada célula
                    newCell.innerHTML =
                        `
                        <button type="button" id="`+ idArray[i] + `" data-toggle="modal" data-target="#editDataModal" onclick="anexoC.renderEditModal('` + idArray[i] + `')" class="btn btn-success mb-1"><i class="fa fa-edit"></i></button>
                          `
                    // Adicionar a nova linha na tabela
                    table1.appendChild(newRow)

                }
                //cabeçalho da tabela que registra a ronda
                document.getElementById('rondaTableHead').innerHTML =
                    `
                <tr>
                    <th scope="col">P1</th>
                    <th scope="col">P2</th>
                    <th scope="col">P3</th>
                    <th scope="col">P4</th>
                    <th scope="col">P5</th>
                    <th scope="col">P6</th>
                    <th scope="col">P7</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CCAp</th>
                    <th scope="col">Plantao CEEM</th>
                </tr>
                `
            }
            break

        default:

            break
    }
}

//This function get one element for edition
const renderEditModal_C = (id) => {

    let updateModal = document.getElementById('updateModal')
    updateModal.innerHTML =
        `
        <div class="modal fade" id="editDataModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="posto"></h5>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form action="#" class="signin-form " id="editForm">
                            <div class="form-group mt-3">
                                <div class="row">
                                     <div class="col">
                                        <input type="text" id="rondante1" class="form-control" disabled>
                                    </div>
                                    <div class="col">
                                        <input type="text" id="p1" class="form-control" required>
                                        <label class="form-control-placeholder" for="p1">Número do Sd</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                 <div class="row mt-3">
                                     <div class="col">
                                        <input type="text" id="rondante2" class="form-control" disabled>
                                    </div>
                                    <div class="col">
                                        <input type="text" id="plantao1" class="form-control" required>
                                        <label class="form-control-placeholder" for="plantao1">Número do Sd</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row mt-3">
                                     <div class="col">
                                        <input type="text" id="rondante3" class="form-control" disabled>
                                    </div>
                                    <div class="col">
                                        <input type="text" id="plantao2" class="form-control" required>
                                        <label class="form-control-placeholder" for="plantao2">Número do Sd</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row mt-3">
                                     <div class="col">
                                        <input type="text" id="rondante4" class="form-control" disabled>
                                    </div>
                                    <div class="col">
                                        <input type="text" id="plantao3" class="form-control" required>
                                        <label class="form-control-placeholder" for="plantao3">Número do Sd</label>
                                    </div>
                                </div>
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
    anexoC.fetchOneDocForUpdate(id)

    //call the controller -> 
    handlerUpdateData(id)
}