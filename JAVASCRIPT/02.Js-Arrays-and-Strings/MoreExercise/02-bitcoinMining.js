function bitcoinMining(arr) {
    let priceOfBitcoin = 11949.16;
    let priceOfGold = 67.51;
    let totalBitcoins = 0;
    let totalMoney = 0;
    let dayOfFirstPurchasedBitcoin = 0;

    for (let i = 0; i < arr.length; i++) {
        let goldGrams = arr[i];
        let exchange = goldGrams * priceOfGold;
        if ((i + 1) % 3 === 0) {
            exchange *= 0.70;
        }
        totalMoney += exchange;
        if (totalMoney >= priceOfBitcoin) {
            let boughtBitcoins = Math.floor(totalMoney / priceOfBitcoin);
            totalBitcoins += boughtBitcoins
            totalMoney -= priceOfBitcoin * boughtBitcoins;
            if (dayOfFirstPurchasedBitcoin === 0) {
                dayOfFirstPurchasedBitcoin = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchasedBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
