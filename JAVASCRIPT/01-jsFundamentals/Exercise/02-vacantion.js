function calculatePrice(numberOfPeople, group, day) {

    let dictionary = {
        "Students": {
            "Friday": 8.45,
            "Saturday" : 9.80,
            "Sunday": 10.46,
        },
        "Business": {
            "Friday": 10.90,
            "Saturday" : 15.60,
            "Sunday": 16,
        },
        "Regular": {
            "Friday": 15,
            "Saturday" : 20,
            "Sunday": 22.50,
        },
    }
    let price = dictionary[group][day]
    let totalPrice = price * numberOfPeople
    if (group === "Students") {
        if (numberOfPeople >= 30) {
            totalPrice *= 0.85
        }
    } else if (group === "Business") {
        if (numberOfPeople >= 100) {
            let discount = 10 * price
            totalPrice -= discount
        }
    } else if (group === "Regular") {
        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            totalPrice *= 0.95
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// calculatePrice(30, "Students", "Sunday")
// calculatePrice(40, "Regular", "Saturday")

