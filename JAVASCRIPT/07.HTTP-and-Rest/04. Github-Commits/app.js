async function loadCommits() {
    const username = document.querySelector("#username").value; // Use .value
    const repository = document.querySelector("#repo").value; // Use .value
    const commitsList = document.querySelector("#commits");

    commitsList.innerHTML = "";
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} (Not Found)`);
        }
        const data = await response.json();

        for (const commit of data) {
            const listItem = document.createElement("li");
            listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
            commitsList.appendChild(listItem);
        }
    } catch (error) {
        const errorItem = document.createElement("li");
        errorItem.textContent = `Error: ${error.message}`;
        commitsList.appendChild(errorItem);
    }
}


// function loadCommits() {
//     const username = document.getElementById("username").value;
//     const repository = document.getElementById("repo").value;
//     const unorderedList = document.getElementById("commits");
//
//     unorderedList.innerHTML = "";
//     const url = `https://api.github.com/repos/${username}/${repository}/commits`;
//
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} (Not Found)`);
//             }
//             return response.json();
//         })
//         .then(commits => {
//             for (const commit of commits) {
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
//                 unorderedList.appendChild(listItem);
//             }
//         })
//         .catch(error => {
//             const liItem = document.createElement("li");
//             listItem.textContent = error.message;
//             unorderedList.appendChild(listItem);
//         });
// }
