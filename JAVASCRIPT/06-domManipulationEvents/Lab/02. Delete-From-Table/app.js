function deleteByEmail() {
    const customerTableEl = document.getElementById("customers");
    const inputEl = document.querySelector("input[type=text][name=email]");
    const resultEl = document.getElementById("result");
    const searchedEmail = inputEl.value;
    const tdElements = customerTableEl.querySelectorAll("tbody td:last-child");
    const searchedEl = Array.from(tdElements).find(el => el.textContent === searchedEmail);

    if (searchedEl) {
        searchedEl.parentElement.remove();
        resultEl.textContent = "Deleted";
    } else {
        resultEl.textContent = "Not found.";
    }
    inputEl.value = "";
}
