function monthPrinter(num) {
    let dictionary = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    }
    if (num in dictionary) {
        console.log(dictionary[num])
    } else {
        console.log("Error!")
    }
}

monthPrinter(13)
