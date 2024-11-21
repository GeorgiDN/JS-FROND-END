function deleteByEmail() {
    const searchStr = document.querySelector('input[name="email"]').value.toLowerCase();
    const people = document.querySelectorAll('table tbody tr td:nth-child(2)');
    const resultEl = document.querySelector('#result');
    let found = false;

    for (let person of people) {
        if (person.textContent.toLowerCase() === searchStr) {
            resultEl.textContent = 'Deleted.';
            person.parentElement.remove();
            found = true;
            break;
        }
    }

    if (!found) {
        resultEl.textContent = 'Not found.';
    }
}



// function deleteByEmail() {
//     const customerTableEl = document.getElementById("customers");
//     const inputEl = document.querySelector("input[type=text][name=email]");
//     const resultEl = document.getElementById("result");
//     const searchedEmail = inputEl.value;
//     const tdElements = customerTableEl.querySelectorAll("tbody td:last-child");
//     const searchedEl = Array.from(tdElements).find(el => el.textContent === searchedEmail);
//
//     if (searchedEl) {
//         searchedEl.parentElement.remove();
//         resultEl.textContent = "Deleted";
//     } else {
//         resultEl.textContent = "Not found.";
//     }
//     inputEl.value = "";
// }
