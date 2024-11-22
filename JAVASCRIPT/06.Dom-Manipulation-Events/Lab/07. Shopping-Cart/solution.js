function solve() {
    const allButtons = document.querySelectorAll("button");
    const allAddButtons = document.querySelectorAll(".add-product");
    const textAreaEl = document.getElementsByTagName("textarea")[0];
    const checkButton = document.querySelector(".checkout");
    let productsData = {};
    allAddButtons.forEach((addButton) => {
        let productDetails =  addButton.parentElement.previousElementSibling;
        let productName = productDetails.children[0].textContent;
        let productPrice =  Number(addButton.parentElement.nextElementSibling.textContent);
        addButton.addEventListener("click", () => {
            addProduct(productName, productPrice)
        });
    });

    checkButton.addEventListener("click", takeTheBill);

    function addProduct(productName, productPrice) {
        textAreaEl.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        saveProductData(productName, productPrice);
    }

    function saveProductData(productName, productPrice) {
        if (!productsData.hasOwnProperty(productName)) {
            productsData[productName] = 0;
        }
        productsData[productName] += productPrice;
    }

    function takeTheBill() {
        const productsNameList = Object.keys(productsData);
        const totalPrice = Object.values(productsData).reduce((sum, price) => sum + price, 0);
        textAreaEl.textContent += `You bought ${productsNameList.join(", ")} for ${totalPrice.toFixed(2)}.`;
        disableButtons(allButtons);
    }

    function disableButtons(allButtons) {
        allButtons.forEach((btn) => {
            btn.setAttribute("disabled", "disabled");
        });
    }
}




// function solve() {
//     const allButtons = document.querySelectorAll("button");
//     const allAddButtons = document.querySelectorAll(".add-product");
//     const textAreaEl = document.getElementsByTagName("textarea")[0];
//     const checkButton = document.querySelector(".checkout");
//     let productsData = {};
//     allAddButtons.forEach((addButton) => {
//         let productDetails =  addButton.parentElement.previousElementSibling;
//         let productName = productDetails.children[0].textContent;
//         let productPrice =  Number(addButton.parentElement.nextElementSibling.textContent);
//         addButton.addEventListener("click", () => {
//             addProduct(productName, productPrice)
//         });
//     });
//
//     checkButton.addEventListener("click", takeTheBill);
//
//     function addProduct(productName, productPrice) {
//         textAreaEl.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
//         saveProductData(productName, productPrice);
//     }
//
//     function saveProductData(productName, productPrice) {
//         if (!productsData.hasOwnProperty(productName)) {
//             productsData[productName] = 0;
//         }
//         productsData[productName] += productPrice;
//     }
//
//     function takeTheBill() {
//         const productsNameList = [];
//         let totalPrice = 0;
//         Object.entries(productsData).forEach(([name, price]) => {
//             productsNameList.push(name);
//             totalPrice += price;
//         });
//         textAreaEl.textContent += `You bought ${productsNameList.join(", ")} for ${totalPrice.toFixed(2)}.`
//         disableButtons(allButtons);
//     }
//
//     function disableButtons(allButtons) {
//         allButtons.forEach((btn) => {
//             btn.setAttribute("disabled", "disabled");
//         });
//     }
// }




// function solve() {
//     const resulElement = document.querySelector("textarea[disabled]");
//     const checkoutButton = document.querySelector("button.checkout");
//     // const addButtons = document.querySelectorAll('button.add-product');
//     const productCatalogElement = document.querySelector(".shopping-cart");
//
//     let products = [];
//
//     productCatalogElement.addEventListener("click", (e) => {
//         if (e.target.tagName !== "BUTTON" || e.target.textContent.trim() !== "Add") {
//             return;
//         }
//
//         const productElement = e.target.closest(".product");
//         const name = productElement.querySelector(".product-title").textContent;
//         const price = Number(productElement.querySelector(".product-line-price").textContent);
//
//         resulElement.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
//
//         products.push({
//             name,
//             price
//         });
//     });
//
//     checkoutButton.addEventListener("click", (e) => {
//         const totalPrice = products.reduce((price, product) => price + product.price, 0);
//         const productList = Array.from(new Set(products.map(product => product.name)));
//
//         resulElement.value += `You bought ${productList.join(", ")} for ${totalPrice.toFixed(2)}.`;
//
//         document.querySelectorAll("button")
//             .forEach(el => el.setAttribute("disabled", "disabled"));
//     });
// }
