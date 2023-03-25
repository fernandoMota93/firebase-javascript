const showError = document.getElementById('showError')

const renderSpinner = () =>{
    let loadSpinner = document.getElementById('loadSpinner')
    loadSpinner.style.display = 'block'
}

const hideSpinner = () =>{
    loadSpinner.style.display = 'none'
}

const renderError = (error) => {
    throw new Error(showError.innerHTML = error)
}