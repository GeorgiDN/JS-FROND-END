function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/collections/students";
    const studentsTbodyElement = document.querySelector("#results tbody");
    const submitElement = document.getElementById("submit");

    submitElement.addEventListener("click", async () => {
        const firstNameElement = document.querySelector("input[name=firstName]");
        const lastNameElement = document.querySelector("input[name=lastName]");
        const facultyNumberElement = document.querySelector("input[name=facultyNumber]");
        const gradeElement = document.querySelector("input[name=grade]");

        const newStudent = {
            firstName: firstNameElement.value,
            lastName: lastNameElement.value,
            facultyNumber: facultyNumberElement.value,
            grade: gradeElement.value,
        };

        try {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newStudent),
            });

            const data = await response.json();
            studentsTbodyElement.appendChild(createStudentElement(data));

            firstNameElement.value = "";
            lastNameElement.value = "";
            facultyNumberElement.value = "";
            gradeElement.value = "";

        } catch (error) {
            console.error("Error creating student:", error);
        }
    });

    async function loadStudents() {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();

            Object.values(data).forEach(student =>
                studentsTbodyElement.appendChild(createStudentElement(student))
            );
        } catch (error) {
            console.error("Error loading students:", error);
        }
    }

    function createStudentElement(student) {
        const trElement = document.createElement("tr");

        const createTd = value => {
            const tdElement = document.createElement("td");
            tdElement.textContent = value;
            return tdElement;
        };

        trElement.appendChild(createTd(student.firstName));
        trElement.appendChild(createTd(student.lastName));
        trElement.appendChild(createTd(student.facultyNumber));
        trElement.appendChild(createTd(student.grade));

        return trElement;
    }

    loadStudents();
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

