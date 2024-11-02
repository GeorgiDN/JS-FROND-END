function loadRepos() {
   const url = "https://api.github.com/users/testnakov/repos";
   const resultElement = document.getElementById("res");

   fetch(url)
       .then(response => response.text())
       .then(data => {
          resultElement.textContent = data;
       })
       .catch(error => {
          console.error("Error fetching the repositories", error);
          resultElement.textContent = "Error loading repositories";
       });
}
