async function loadRepos() {
    const username = document.querySelector("#username").value;
    const reposList = document.querySelector("#repos");
    reposList.innerHTML = "";
    const url = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`User not found or unable to load repos (status: ${response.status}).`);
        }

        const data = await response.json();

        if (data.length === 0) {
            const noReposItem = document.createElement("li");
            noReposItem.textContent = "This user has no repositories.";
            reposList.appendChild(noReposItem);
            return;
        }

        data.forEach((repo) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");

            link.href = repo.html_url;
            link.textContent = repo.full_name;
            link.target = "_blank";

            listItem.appendChild(link);
            reposList.appendChild(listItem);
        });
    } catch (error) {
        const errorItem = document.createElement("li");
        errorItem.textContent = "User not found or unable to load repos.";
        reposList.appendChild(errorItem);
    }
}



// function loadRepos() {
// 	const username = document.getElementById("username").value
// 	const reposList = document.getElementById("repos");
// 	reposList.innerHTML = "";
//
// 	const url = `https://api.github.com/users/${username}/repos`;
// 	fetch(url)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error("User not found or unable to load repos");
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			data.forEach((repo) => {
// 				const listItem = document.createElement("li");
// 				const link = document.createElement("a");
//
// 				link.href = repo.html_url;
// 				link.textContent = repo.full_name;
// 				link.target = "_blank";
//
// 				listItem.appendChild(link);
// 				reposList.appendChild(listItem);
// 			});
// 		})
// 		.catch((error) => {
// 			const errorItem = document.createElement("li");
// 			errorItem.textContent = "User not found or unable to load repos.";
// 			reposList.appendChild(errorItem);
// 		});
// }
