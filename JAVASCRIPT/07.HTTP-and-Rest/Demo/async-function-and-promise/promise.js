function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.")
            }
        }, 2000);
    });
}

fakeApiCall()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error)
    })
