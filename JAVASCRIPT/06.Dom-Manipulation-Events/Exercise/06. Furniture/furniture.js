document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputFormEl = document.querySelector("#input");
    inputFormEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputEl = e.target.querySelector("textarea");
        const data = JSON.parse(inputEl.value);
        const productListEl = document.querySelector("table tbody");

        data.forEach(item => {
            const product = document.createElement("tr");

            const productImageCell = document.createElement("td");
            const productImageEl = document.createElement("img");
            productImageEl.setAttribute("src", item.img);
            productImageCell.append(productImageEl);

            const productNameCell = document.createElement("td");
            productNameCell.textContent = item.name;

            const productPriceCell = document.createElement("td");
            productPriceCell.textContent = item.price;

            const productDeckFactorCell = document.createElement("td");
            productDeckFactorCell.textContent = item.decFactor;

            const productCheckCell = document.createElement("td");
            const productCheckInput = document.createElement("input");
            productCheckInput.setAttribute("type", "checkbox");
            productCheckCell.append(productCheckInput);

            product.append(
                productImageCell,
                productNameCell,
                productPriceCell,
                productDeckFactorCell,
                productCheckCell,
            )

            productListEl.append(product);
        })
    });

    const shopFormEl = document.querySelector("#shop");
    shopFormEl.addEventListener("submit", (e) => {
        e.preventDefault();

        const outputEl = e.target.querySelector("textarea");

        const data = [...document.querySelectorAll("table tbody tr:has(input:checked)")]
            .map(el => ({
            name: el.children[1].textContent.trim(),
            price: Number(el.children[2].textContent),
            decFactor: Number(el.children[3].textContent)
        }));

        let output = `Bought furniture: ${data.map(el => el.name).join(", ")} \n`;
        output += `Total price: ${data.reduce((total, el) => total + el.price, 0)} \n`;
        output += `Average decoration factor: ${data.reduce((factor, el) => factor + el.decFactor, 0) / data.length} \n`;

        outputEl.value = output;
    });
}



// function solve() {
//     const furnitureList = selectElement("#input textarea");
//     const generateButton = selectElement("#input input");
//     const furnitureTBodyElement = selectElement("table tbody");
//     const buyList = selectElement("#shop textarea");
//     const buyButton = selectElement('input[type="submit"][value="Buy"]');
//
//     generateButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         insertInTable();
//     });
//
//     function insertInTable() {
//         const furnitures =  JSON.parse(furnitureList.value);
//
//         for (let furniture of furnitures) {
//             const imgElement = createElement("img");
//             imgElement.src = furniture.img;
//             const imageTdElement = createElement("td");
//             imageTdElement.appendChild(imgElement);
//
//             const namePElement = createElement("p");
//             namePElement.textContent = furniture.name;
//             const nameTdElement = createElement("td");
//             nameTdElement.appendChild(namePElement);
//
//             const pricePElement = createElement("p");
//             pricePElement.textContent = furniture.price;
//             const priceTdElement = createElement("td");
//             priceTdElement.appendChild(pricePElement);
//
//             const decFactorElement = createElement("p");
//             decFactorElement.textContent = furniture.decFactor;
//             const decFactorTdElement = createElement("td");
//             decFactorTdElement.appendChild(decFactorElement);
//
//             const markElement = createElement("input");
//             markElement.setAttribute("type", "checkbox");
//             const markTdElement = createElement("td");
//             markTdElement.appendChild(markElement);
//
//             const furnitureTrElement = createElement("tr");
//             furnitureTrElement.appendChild(imageTdElement);
//             furnitureTrElement.appendChild(nameTdElement);
//             furnitureTrElement.appendChild(priceTdElement);
//             furnitureTrElement.appendChild(decFactorTdElement);
//             furnitureTrElement.appendChild(markTdElement);
//             furnitureTBodyElement.appendChild(furnitureTrElement);
//         }
//     }
//
//     buyButton.addEventListener("click", (e) => {
//         e.preventDefault();
//         let totalPrice = 0;
//         let totalDecorationFactor = 0;
//         let markedChildren = 0;
//         let namesArray = [];
//
//         Array.from(furnitureTBodyElement.children).forEach(furnitureTrEl => {
//             const markInputEl = furnitureTrEl.querySelector("input[type='checkbox']");
//             if (!markInputEl.checked) {
//                 return;
//             }
//
//             const name = furnitureTrEl.children.item(1).textContent;
//             const price = Number(furnitureTrEl.children.item(2).textContent);
//             const decorationFactor = Number(furnitureTrEl.children.item(3).textContent);
//
//             totalPrice += price;
//             totalDecorationFactor += decorationFactor;
//             markedChildren += 1;
//             namesArray.push(name);
//
//         });
//         const averageDecorationFactor = totalDecorationFactor / markedChildren;
//         buyList.textContent += `Bought furniture: ${namesArray.join(", ")}\n`;
//         buyList.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
//         buyList.textContent += `Average decoration factor: ${averageDecorationFactor.toFixed(2)}`;
//     });
//
//     function createElement(tagName) {
//         return document.createElement(tagName);
//     }
//
//     function selectElement(selector) {
//         return document.querySelector(selector);
//     }
// }



