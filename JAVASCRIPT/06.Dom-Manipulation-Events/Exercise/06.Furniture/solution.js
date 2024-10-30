function solve() {
    const textAreaInputElement = document.querySelector("#exercise textarea:first-of-type");
    const textAreaOutputElement = document.querySelector("#exercise textarea:last-of-type");
    const generateButtonElement = document.querySelector("#exercise button:first-of-type");
    const buyButtonElement = document.querySelector("#exercise button:last-of-type");
    const furnitureTbodyElement = document.querySelector(".table tbody");

    generateButtonElement.addEventListener("click", (e) => {
        const furnitures = JSON.parse(textAreaInputElement.value);

        for (let furniture of furnitures) {
            const imgElement = document.createElement("img");
            imgElement.src = furniture.img;
            const imageTdElement = document.createElement("td");
            imageTdElement.appendChild(imgElement);

            const namePElement = document.createElement("p");
            namePElement.textContent = furniture.name;
            const nameTdElement = document.createElement("td");
            nameTdElement.appendChild(namePElement);

            const pricePElement = document.createElement("p");
            pricePElement.textContent = furniture.price;
            const priceTdElement = document.createElement("td");
            priceTdElement.appendChild(pricePElement);

            const decPElement = document.createElement("p");
            decPElement.textContent = furniture.decFactor;
            const decTdElement = document.createElement("td");
            decTdElement.appendChild(decPElement);

            const markElement = document.createElement("input");
            markElement.setAttribute("type", "checkbox");
            const markTdElement = document.createElement("td");
            markTdElement.appendChild(markElement);

            const furnitureTrElement = document.createElement("tr");
            furnitureTrElement.appendChild(imageTdElement);
            furnitureTrElement.appendChild(nameTdElement);
            furnitureTrElement.appendChild(priceTdElement);
            furnitureTrElement.appendChild(decTdElement);
            furnitureTrElement.appendChild(markTdElement);

            furnitureTbodyElement.appendChild(furnitureTrElement)
        }
    });

    buyButtonElement.addEventListener("click", (e) => {
        let totalPrice = 0;
        let totalDecorationFactor = 0;
        let markedChildren = 0;
        let names = [];

        Array.from(furnitureTbodyElement.children)
            .forEach(furnitureTrElement => {
                const markInputElement = furnitureTrElement.querySelector("input[type=checkbox]");
                if (!markInputElement.checked) {
                    return;
                }

                const name = furnitureTrElement.children.item(1).textContent;
                const price = Number(furnitureTrElement.children.item(2).textContent);
                const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);

                names.push(name);
                totalPrice += price;
                totalDecorationFactor += decorationFactor;
                markedChildren += 1;
            });

        const averageDecorationFactor = totalDecorationFactor / markedChildren;
        textAreaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
        textAreaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
        textAreaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor}`;
    });
}












// function solve() {
//     // Select elements from the DOM
//     const [inputTextArea, outputTextArea] = document.querySelectorAll('textarea');
//     const [generateBtn, buyBtn] = document.querySelectorAll('button');
//     const tableBody = document.querySelector('tbody');
//
//     // Event listener for the "Generate" button
//     generateBtn.addEventListener('click', () => {
//         // Parse input JSON data
//         const furnitureData = JSON.parse(inputTextArea.value);
//
//         // Create rows for each piece of furniture
//         furnitureData.forEach(item => {
//             const row = document.createElement('tr');
//
//             // Create and append image cell
//             const imgCell = document.createElement('td');
//             const img = document.createElement('img');
//             img.src = item.img;
//             imgCell.appendChild(img);
//             row.appendChild(imgCell);
//
//             // Create and append name cell
//             const nameCell = document.createElement('td');
//             nameCell.textContent = item.name;
//             row.appendChild(nameCell);
//
//             // Create and append price cell
//             const priceCell = document.createElement('td');
//             priceCell.textContent = Number(item.price).toFixed(2);
//             row.appendChild(priceCell);
//
//             // Create and append decoration factor cell
//             const decFactorCell = document.createElement('td');
//             decFactorCell.textContent = item.decFactor;
//             row.appendChild(decFactorCell);
//
//             // Create and append checkbox cell
//             const checkboxCell = document.createElement('td');
//             const checkbox = document.createElement('input');
//             checkbox.type = 'checkbox';
//             checkboxCell.appendChild(checkbox);
//             row.appendChild(checkboxCell);
//
//             // Append the row to the table
//             tableBody.appendChild(row);
//         });
//     });
//
//     // Event listener for the "Buy" button
//     buyBtn.addEventListener('click', () => {
//         // Initialize variables for output
//         let boughtItems = [];
//         let totalPrice = 0;
//         let totalDecFactor = 0;
//         let count = 0;
//
//         // Iterate through each row in the table body
//         Array.from(tableBody.querySelectorAll('tr')).forEach(row => {
//             const checkbox = row.querySelector('input[type="checkbox"]');
//             if (checkbox && checkbox.checked) {
//                 const cells = row.querySelectorAll('td');
//                 const name = cells[1].textContent;
//                 const price = parseFloat(cells[2].textContent);
//                 const decFactor = parseFloat(cells[3].textContent);
//
//                 // Add the item name, price, and decoration factor
//                 boughtItems.push(name);
//                 totalPrice += price;
//                 totalDecFactor += decFactor;
//                 count++;
//             }
//         });
//
//         // Calculate average decoration factor
//         const avgDecFactor = count > 0 ? totalDecFactor / count : 0;
//
//
//         outputTextArea.value = `Bought furniture: ${boughtItems.join(', ')}\n` +
//             `Total price: ${totalPrice.toFixed(2)}\n` +
//             `Average decoration factor: ${avgDecFactor.toFixed(2)}`;
//     });
// }
