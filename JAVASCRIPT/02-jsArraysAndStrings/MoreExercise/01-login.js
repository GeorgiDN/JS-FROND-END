function login(arr) {
    let username = arr.shift();
    let password =  username.split('').reverse().join('');
    let count = 1

    for (let word of arr) {
        if (word === password) {
            return  console.log(`User ${username} logged in.`);
        } else if (count === 4) {
            return console.log(`User ${username} blocked!`);
        }
        console.log("Incorrect password. Try again.");
        count += 1;
    }
}

login(['Acer','login','go','let me in','recA']);

// function login(arr) {
//     let username = arr.shift();
//     let password = username.split('').reverse().join('');
//
//     for (let i = 0; i < arr.length; i++) {
//         let word = arr[i];
//
//         if (word === password) {
//             return console.log(`User ${username} logged in.`);
//         } else if (i === 3) {
//             return console.log(`User ${username} blocked!`);
//         } else {
//             console.log("Incorrect password. Try again.");
//         }
//     }
// }



