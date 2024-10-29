function solve (inputArray) {
    let dictionary = {};

    inputArray.forEach((data) => {
        let [product, price] = data.split(' : ');
        let firstLetter = data[0];
        if (!dictionary.hasOwnProperty(firstLetter)) {
            dictionary[firstLetter] = {};
        }
        dictionary[firstLetter][product] = price;
    });

    let sortedDictionary = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));

    sortedDictionary.forEach(([letter, products]) => {
        let sortedProducts = Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]));
        console.log(letter);
        sortedProducts.forEach(([product, price]) => {
            console.log(`  ${product}: ${price}`)
        })
    });
}




solve([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
)
