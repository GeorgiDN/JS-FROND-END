function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    const studentsTbodyElement = document.querySelector('#results tbody');
    const submitElement = document.getElementById('submit');

    submitElement.addEventListener('click', () => {
        const firstNameElement = document.querySelector('input[name=firstName]');
        const lastNameElement = document.querySelector('input[name=lastName]');
        const facultyNumberElement = document.querySelector('input[name=facultyNumber]');
        const gradeElement = document.querySelector('input[name=grade]');

        const newStudent = {
            firstName: firstNameElement.value,
            lastName: lastNameElement.value,
            facultyNumber: facultyNumberElement.value,
            grade: gradeElement.value,
        };

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        })
            .then(res => res.json())
            .then(data => {
                studentsTbodyElement.appendChild(createStudentElement(data))

                firstNameElement.value = '';
                lastNameElement.value = '';
                facultyNumberElement.value = '';
                gradeElement.value = '';
            });
    });

    fetch(baseUrl)
        .then(res => res.json())
        .then(data =>
            Object.values(data)
                .forEach(student => studentsTbodyElement.appendChild(createStudentElement(student)))
        )

    function createStudentElement(student) {
        const trElement = document.createElement('tr');

        const createRd = value => {
            const tdElement = document.createElement('td');
            tdElement.textContent = value;

            return tdElement;
        };

        trElement.appendChild(createRd(student.firstName));
        trElement.appendChild(createRd(student.lastName));
        trElement.appendChild(createRd(student.facultyNumber));
        trElement.appendChild(createRd(student.grade));

        return trElement;
    }
}

attachEvents();



//80/100
// function attachEvents() {
//     const baseUrl = "http://localhost:3030/jsonstore/collections/students";
//     const tBodyElement = document.querySelector("tbody");
//     const submitBtn = document.getElementById("submit");
//
//     submitBtn.addEventListener("click", createRecord)
//
//     async function createRecord() {
//         let firstName = document.querySelector("input[name=firstName]");
//         let lastName = document.querySelector("input[name=lastName]");
//         let facultyNumber = document.querySelector("input[name=facultyNumber]");
//         let grade = document.querySelector("input[name=grade]");
//
//         let student = {
//             firstName: firstName.value,
//             lastName: lastName.value,
//             facultyNumber: facultyNumber.value,
//             grade: Number(grade.value)
//         };
//
//         await fetch(baseUrl, {
//             method: "POST",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(student)
//         });
//
//         firstName.value = ""
//         lastName.value = ""
//         facultyNumber.value = ""
//         grade.value = ""
//
//         loadRecords();
//     }
//
//     async function loadRecords() {
//         tBodyElement.innerHTML = "";
//
//         const response = await fetch(baseUrl);
//         const data = await response.json();
//
//         Object.values(data).forEach(student => {
//             let firstNameTdElement = document.createElement("td");
//             firstNameTdElement.textContent = student.firstName;
//
//             let lastNameTdElement = document.createElement("td");
//             lastNameTdElement.textContent = student.lastName;
//
//             let facultyNumberTdElement = document.createElement("td");
//             facultyNumberTdElement.textContent = student.facultyNumber;
//
//             let gradeTdElement = document.createElement("td");
//             gradeTdElement.textContent = student.grade;
//
//             let rowElement = document.createElement("tr");
//             rowElement.appendChild(firstNameTdElement);
//             rowElement.appendChild(lastNameTdElement);
//             rowElement.appendChild(facultyNumberTdElement);
//             rowElement.appendChild(gradeTdElement);
//             tBodyElement.appendChild(rowElement);
//         });
//     }
//
//     loadRecords()
//
// }
//
// attachEvents()

