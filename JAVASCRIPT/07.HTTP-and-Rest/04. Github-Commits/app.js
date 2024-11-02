function loadCommits() {
    const username = document.getElementById("username").value;
    const repository = document.getElementById("repo").value;
    const unorderedList = document.getElementById("commits");

    unorderedList.innerHTML = "";
    const url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }
            return response.json();
        })
        .then(commits => {
            for (const commit of commits) {
                const listItem = document.createElement("li");
                listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                unorderedList.appendChild(listItem);
            }
        })
        .catch(error => {
            const liItem = document.createElement("li");
            listItem.textContent = error.message;
            unorderedList.appendChild(listItem);
        });
}
