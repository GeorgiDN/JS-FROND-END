function calculatePrice(fruit, weight, price) {
    let totalPrice = 0;
    let weightKg = weight / 1000;
    let neededMoney = price * weightKg;
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}

// calculatePrice('orange', 2500, 1.80)
