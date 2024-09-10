function validateEmail(input) {
    let validEmails = []
    let invalidEmails = []
    let regexp = "^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})$"

    for (let email of input) {
        if (email.match(regexp)) {
            validEmails.push(email)
        } else {
            invalidEmails.push(email)
        }
    }
    console.log("Valid Emails")
    console.log(validEmails)
    console.log()
    console.log("Invalid Emails")
    console.log(invalidEmails)
}


validateEmail(["john.doe@example.com", "user+123@domain.co.uk", "firstname.lastname@subdomain.example.com",
"john.doe@com", "user@@example.com", "@example.com"])

