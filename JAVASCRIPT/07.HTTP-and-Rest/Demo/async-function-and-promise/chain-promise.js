new Promise((resolve) => {
    resolve(5);
})
    .then((number) => {
        console.log(number); // 5
        return number * 2;
    })
    .then((result) => {
        console.log(result); // 10
        return result + 3;
    })
    .then((finalResult) => {
        console.log(finalResult); // 13
    });
