function solve() {
    const searchString = document.querySelector("#searchField").value.toLowerCase().trim();
    const students = document.querySelectorAll("table tbody tr");

    if (searchString === "") {
        return;
    }

    students.forEach(student => {
        student.classList.remove("select");

        if (student.textContent.toLowerCase().includes(searchString)) {
            student.classList.add("select")
        }
    });
}





// function solve() {
//     document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//     function onClick() {
//         const tableRowEls = document.querySelectorAll("table.container tbody tr");
//         const searchedText = document.getElementById("searchField").value.toLowerCase();
//
//         function removeClassList(tableRowEls) {
//             tableRowEls.forEach((row) => {
//                 row.classList.remove("select");
//             });
//         }
//
//         function addClassList(tableRowEls) {
//             tableRowEls.forEach((row) => {
//                 if (searchedText.length > 0 && row.textContent.toLowerCase().includes(searchedText)) {
//                     row.classList.add("select");
//                 }
//             });
//         }
//
//         removeClassList(tableRowEls);
//         addClassList(tableRowEls);
//         document.getElementById("searchField").value = "";
//     }
// }


// function solve() {
//     document.querySelector('#searchBtn').addEventListener('click', onClick);
//
//     function onClick() {
//         const tableRowEls = document.querySelectorAll("table.container tbody tr");
//         const searchedText = document.getElementById("searchField").value.toLowerCase();
//
//         tableRowEls.forEach((row) => {
//             row.classList.remove("select");
//         });
//
//         tableRowEls.forEach((row) => {
//             if (searchedText.length > 0 && row.textContent.toLowerCase().includes(searchedText)) {
//                 row.classList.add("select");
//             }
//         });
//         document.getElementById("searchField").value = "";
//     }
// }
