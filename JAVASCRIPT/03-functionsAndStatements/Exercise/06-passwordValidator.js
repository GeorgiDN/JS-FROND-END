function passwordValidator(currentPassword) {
    let allIsValid = true;
    function validateLength() {
        return (currentPassword.length >= 6) && (currentPassword.length <= 10)
    }

    function validateLettersAndDigitsOnly() {
        let regex = /^[A-Za-z\d]+$/;
        return regex.test(currentPassword)
    }

    function validateAtLeastTwoDigits() {
        let regex = /\d{2,}/;
         return regex.test(currentPassword)
    }

    if (!validateLength()) {
        console.log("Password must be between 6 and 10 characters");
        allIsValid = false;
    }
    if (!validateLettersAndDigitsOnly()) {
        console.log("Password must consist only of letters and digits");
        allIsValid = false;
    }
    if (!validateAtLeastTwoDigits()) {
        console.log("Password must have at least 2 digits");
        allIsValid = false;
    }
    if (allIsValid) {
        console.log("Password is valid");
    }
}

passwordValidator("logIn");
passwordValidator("MyPass123");

