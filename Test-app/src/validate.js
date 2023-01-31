const validateUsername =({username, setUsernameError}) => {
       return username && username.length < 5 ? setUsernameError("Username is too short") : setUsernameError("");

}
 
const validateEmail = ({email, setEmailError}) => {
    const regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return email && !email.match(regular) ? setEmailError("Email is invalid ") : setEmailError("")
}

const validatePassowrd = ({password, setPasswordError}) => {
     return password && password.length < 7 ? setPasswordError("password is too weak") : setPasswordError("")
}

export {validateUsername, validateEmail, validatePassowrd}
