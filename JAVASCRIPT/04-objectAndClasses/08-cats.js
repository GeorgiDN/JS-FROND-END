function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let data of input) {
        let [name, age] = data.split(" ");
        let cat = new Cat(name, age);
        cat.meow()
    }
}

solve(['Mellow 2', 'Tom 5']);



// function solve(input) {
//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
//
//         meow() {
//             console.log(`${this.name}, age ${this.age} says Meow`);
//         }
//     }
//
//     input
//         .map(entry => entry.split(' '))
//         .map(([name, age]) => new Cat(name, age))
//         .forEach(cat => cat.meow());
// }
