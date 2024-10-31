function printDNA(num) {
    let chain = "ATCGTTAGGG";
    let arr = chain.split("")
    let counter = 1

    for (let i = 1; i <= num; i++) {
        let a = arr.shift();
        let b = arr.shift();
        if (counter % 2 === 0) {
            console.log(`*${a}--${b}*`);
        } else if (counter % 3 === 0) {
            console.log(`${a}----${b}`);
        } else {
            console.log(`**${a}${b}**`);
        }
        arr.push(a);
        arr.push(b);
        counter += 1
        if (counter === 5) {
            counter = 1
        }
    }
}


printDNA(10)
