class User {
    constructor(username, password){
        this.username = username
        this.password = password
        //role defined RBAC Firebase Console (user.role)
    }

    userLogin(){
        // login model
        return userLogin()
    }
}