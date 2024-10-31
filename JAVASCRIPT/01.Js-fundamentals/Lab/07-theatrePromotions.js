function promotions(day, age) {
    let dictionary = {
        "Weekday": [
            {min: 0, max: 18, value: 12},
            {min: 19, max: 64, value: 18},
            {min: 65, max: 122, value: 12},
        ],
        "Weekend": [
            {min: 0, max: 18, value: 15},
            {min: 19, max: 64, value: 20},
            {min: 65, max: 122, value: 15},
        ],
        "Holiday": [
            {min: 0, max: 18, value: 5},
            {min: 19, max: 64, value: 12},
            {min: 65, max: 122, value: 10},
        ],
    }

    if (dictionary[day]) {
        for (let range of dictionary[day]) {
            if (age >= range.min && age <= range.max) {
                return console.log(range.value+"$");
            }
        }
    }

    console.log("Error!");
}

promotions('Weekday', 42);
promotions('Holiday', -12);
