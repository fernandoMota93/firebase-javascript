const soldierAmount = document.getElementById('soldierAmount')
const btnRegistar = document.getElementById('btnRegistar')
let renderAmount = document.getElementById('renderAmount')

soldierAmount.addEventListener('change', (e) =>{
    e.preventDefault()
    renderAmount.innerHTML = ''
    renderSentinelFields(soldierAmount.value)
    btnRegistar.style.visibility = 'visible'
})
soldierAmount.addEventListener('click', (e) =>{
    e.preventDefault()
    $( "#renderAmount" ).load(window.location.href + " #renderAmount" );

})