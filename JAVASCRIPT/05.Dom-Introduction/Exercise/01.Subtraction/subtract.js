function subtract() {
    const [firstNum, secondNum] =
        document.querySelectorAll("input[type='text']");

    document.getElementById("result").textContent =
        Number(firstNum.value) - Number(secondNum.value);
}
