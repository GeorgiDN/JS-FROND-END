function passwordValidator(currentPassword) {
    let passwordIsValid = true;

    let errorMessages = [
        [/.{6,10}/, "Password must be between 6 and 10 characters"],
        [/^[A-Za-z\d]+$/, "Password must consist only of letters and digits"],
        [/\d{2,}/, "Password must have at least 2 digits"]
    ];

    for (let [pattern, message] of errorMessages) {
        if (!pattern.test(currentPassword)) {
            console.log(message);
            passwordIsValid = false;
        }
    }

    if (passwordIsValid) {
        console.log("Password is valid");
    }
}

passwordValidator("logIn");
passwordValidator("MyPass123");



// function passwordValidator(currentPassword) {
//     let passwordIsValid = true;
//     function validateLength() {
//         return (currentPassword.length >= 6) && (currentPassword.length <= 10)
//     }
//
//     function validateLettersAndDigitsOnly() {
//         let regex = /^[A-Za-z\d]+$/;
//         return regex.test(currentPassword)
//     }
//
//     function validateAtLeastTwoDigits() {
//         let regex = /\d{2,}/;
//          return regex.test(currentPassword)
//     }
//
//     if (!validateLength()) {
//         console.log("Password must be between 6 and 10 characters");
//         passwordIsValid = false;
//     }
//     if (!validateLettersAndDigitsOnly()) {
//         console.log("Password must consist only of letters and digits");
//         passwordIsValid = false;
//     }
//     if (!validateAtLeastTwoDigits()) {
//         console.log("Password must have at least 2 digits");
//         passwordIsValid = false;
//     }
//     if (passwordIsValid) {
//         console.log("Password is valid");
//     }
// }

