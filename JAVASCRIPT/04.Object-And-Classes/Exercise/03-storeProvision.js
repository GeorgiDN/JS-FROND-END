function solve(firstInputArray, secondInputArray) {
    let storeProvisionData = {};

    function fillQuantity(arr, storeData) {
        let productName = null;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                productName = arr[i];

            } else {
                let qty = Number(arr[i]);
                if (!storeData[productName]) {
                    storeData[productName] = qty;
                } else {
                    storeData[productName] += qty;
                }
            }
        }
        return storeData;
    }

    storeProvisionData = fillQuantity(firstInputArray, storeProvisionData);
    storeProvisionData = fillQuantity(secondInputArray, storeProvisionData);
    for (let [productName, qty] of Object.entries(storeProvisionData)) {
        console.log(`${productName} -> ${qty.toString()}`);
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)
