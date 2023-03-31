let manageUser = new ManageUser()

const createDataForm = document.getElementById('createDataForm')
//const updateDataForm = document.getElementById('editForm')

createDataForm.addEventListener('submit', (e) => {
    e.preventDefault()
    manageUser.createUser()
})

//Load all the data in table after get and format from firestore
document.body.onload = manageUser.readAllUsers()


//timeout
window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time')
    autoLogout(fiveMinutes, display);
}


function autoLogout(duration, display) {
    var timer = duration, minutes, seconds

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = minutes + ":" + seconds

        if (--timer < 0) {

            auth.signOut().then(() => {

                window.location = '../login/login.html'

            }).catch((error) => {
                console.log(error)
            })
        }
    }, 1000)
}