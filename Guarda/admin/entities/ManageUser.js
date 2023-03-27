class ManageUser {
    constructor(email, password, selectFunction, selectRole, selectName) {
        this.email = email
        this.password = password
        this.selectFunction = selectFunction
        this.selectRole = selectRole
        this.selectName = selectName
    }

    createUser(){
        //adminModel
        return createUser()
    }

    readAllUsers(){
        //adminModel 
        return readAllUsers()
    }

    lockUser(){

    }

    unlockUser(){

    }


}
