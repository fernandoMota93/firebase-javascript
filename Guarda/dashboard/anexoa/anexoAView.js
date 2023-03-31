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
        select.setAttribute('id', 'pg')

        inputName.classList.add('form-control', 'mb-4')
        inputName.type = 'text'
        inputName.setAttribute('id', 'name'+i)
        
        inputWeapon.classList.add('form-control')
        inputWeapon.type = 'text'
        inputWeapon.setAttribute('id', 'weapon'+i)

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

