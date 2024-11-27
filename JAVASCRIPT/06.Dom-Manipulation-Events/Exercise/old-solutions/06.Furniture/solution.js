function solve() {

    function createElement(tagName) {
        return document.createElement(tagName);
    }

    function selectElement(selector) {
        return document.querySelector(selector);
    }

    const textAreaInputElement = selectElement("#exercise textarea:first-of-type");
    const textAreaOutputElement = selectElement("#exercise textarea:last-of-type");
    const generateButtonElement = selectElement("#exercise button:first-of-type");
    const buyButtonElement = selectElement("#exercise button:last-of-type");
    const furnitureTbodyElement = selectElement(".table tbody");

    generateButtonElement.addEventListener("click", () => {
        const furnitures = JSON.parse(textAreaInputElement.value);

        for (let furniture of furnitures) {
            const imgElement = createElement("img");
            imgElement.src = furniture.img;
            const imageTdElement = createElement("td");
            imageTdElement.appendChild(imgElement);

            const namePElement = createElement("p");
            namePElement.textContent = furniture.name;
            const nameTdElement = createElement("td");
            nameTdElement.appendChild(namePElement);

            const pricePElement = createElement("p");
            pricePElement.textContent = furniture.price;
            const priceTdElement = createElement("td");
            priceTdElement.appendChild(pricePElement);

            const decPElement = createElement("p");
            decPElement.textContent = furniture.decFactor;
            const decTdElement = createElement("td");
            decTdElement.appendChild(decPElement);

            const markPElement = createElement("input");
            markPElement.setAttribute("type", "checkbox");
            const markTdElement = createElement("td");
            markTdElement.appendChild(markPElement);

            const furnitureTrElement = createElement("tr");
            furnitureTrElement.appendChild(imageTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decTdElement);
            furnitureTrElement.appendChild(markTdElement);
            furnitureTbodyElement.appendChild(furnitureTrElement);
        }
    });

    buyButtonElement.addEventListener("click", () => {
        let totalPrice = 0;
        let totalDecorationFactor = 0;
        let markedChildren = 0;
        let namesArray = [];

        Array.from(furnitureTbodyElement.children).forEach(furnitureTrElement => {
            const markInputElement = furnitureTrElement.querySelector("input[type=checkbox]");
            if (!markInputElement.checked) {
                return;
            }

            const name = furnitureTrElement.children.item(1).textContent;
            const price = Number(furnitureTrElement.children.item(2).textContent);
            const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);

            totalPrice += price;
            totalDecorationFactor += decorationFactor;
            markedChildren += 1;
            namesArray.push(name);
        });

        const averageDecorationFactor = totalDecorationFactor / markedChildren;
        textAreaOutputElement.textContent += `Bought furniture: ${namesArray.join(", ")}\n`;
        textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textAreaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor.toFixed(2)}`;
    });
}




// function solve() {
//     const textAreaInputElement = document.querySelector("#exercise textarea:first-of-type");
//     const textAreaOutputElement = document.querySelector("#exercise textarea:last-of-type");
//     const generateButtonElement = document.querySelector("#exercise button:first-of-type");
//     const buyButtonElement = document.querySelector("#exercise button:last-of-type");
//     const furnitureTbodyElement = document.querySelector(".table tbody");
//
//     generateButtonElement.addEventListener("click", () => {
//         const furnitures = JSON.parse(textAreaInputElement.value)
//
//         for (let furniture of furnitures) {
//             const imgElement = document.createElement("img");
//             imgElement.src = furniture.img;
//             const imageTdElement = document.createElement("td");
//             imageTdElement.appendChild(imgElement);
//
//             const namePElement = document.createElement("p");
//             namePElement.textContent = furniture.name;
//             const nameTdElement = document.createElement("td");
//             nameTdElement.appendChild(namePElement);
//
//             const pricePElement = document.createElement("p");
//             pricePElement.textContent = furniture.price;
//             const priceTdElement = document.createElement("td");
//             priceTdElement.appendChild(pricePElement);
//
//             const decPElement = document.createElement("p");
//             decPElement.textContent = furniture.decFactor;
//             const decTdElement = document.createElement("td");
//             decTdElement.appendChild(decPElement);
//
//             const markPElement = document.createElement("input");
//             markPElement.setAttribute("type", "checkbox");
//             const markTdElement = document.createElement("td");
//             markTdElement.appendChild(markPElement);
//
//             const furnitureTrElement = document.createElement("tr");
//             furnitureTrElement.appendChild(imageTdElement);
//             furnitureTrElement.appendChild(nameTdElement);
//             furnitureTrElement.appendChild(priceTdElement);
//             furnitureTrElement.appendChild(decTdElement);
//             furnitureTrElement.appendChild(markTdElement);
//             furnitureTbodyElement.appendChild(furnitureTrElement);
//         }
//     });
//
//     buyButtonElement.addEventListener("click", () => {
//         let totalPrice = 0;
//         let totalDecorationFactor = 0;
//         let markedChildren = 0;
//         let namesArray = [];
//
//         Array.from(furnitureTbodyElement.children)
//             .forEach(furnitureTrElement => {
//                 const markInputElement = furnitureTrElement.querySelector("input[type=checkbox]");
//                 if (!markInputElement.checked) {
//                     return;
//                 }
//
//                 const name = furnitureTrElement.children.item(1).textContent;
//                 const price = Number(furnitureTrElement.children.item(2).textContent);
//                 const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);
//
//                 totalPrice += price;
//                 totalDecorationFactor += decorationFactor
//                 markedChildren += 1
//                 namesArray.push(name);
//             });
//
//         const averageDecorationFactor = totalDecorationFactor / markedChildren;
//         textAreaOutputElement.textContent += `Bought furniture: ${namesArray.join(", ")}\n`
//         textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
//         textAreaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor.toFixed(2)}`;
//     });
// }
