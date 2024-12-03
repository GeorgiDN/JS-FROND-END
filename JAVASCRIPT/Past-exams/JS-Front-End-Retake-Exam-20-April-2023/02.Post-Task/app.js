window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById("task-title");
    const categoryInput = document.getElementById("task-category");
    const contentInput = document.getElementById("task-content");
    const publishButton = document.getElementById("publish-btn");
    const reviewList = document.getElementById("review-list");
    const publishedList = document.getElementById("published-list");

    publishButton.addEventListener("click", createTaskReview);

    function createTaskReview(e) {
        if (!titleInput.value || !categoryInput.value || !contentInput.value) {
            return;
        }
        // e.preventDefault();

        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        const liElement = createEl("li");
        liElement.classList.add("rpost");

        const articleElement = createEl("article");

        const h4TitleElement = createEl("h4");
        h4TitleElement.textContent = title;

        const pCategoryElement = createEl("p");
        pCategoryElement.textContent = `Category: ${category}`;

        const pContentElement = createEl("p");
        pContentElement.textContent = `Content: ${content}`;

        const editButtonEl = createEl("button");
        editButtonEl.classList.add("action-btn");
        editButtonEl.classList.add("edit");
        editButtonEl.textContent = "Edit";
        editButtonEl.addEventListener("click", () => editInformation(liElement, title, category, content));

        const postButtonEl = createEl("button");
        postButtonEl.classList.add("action-btn");
        postButtonEl.classList.add("post");
        postButtonEl.textContent = "Post";
        postButtonEl.addEventListener("click", () => saveInformation(liElement));

        articleElement.appendChild(h4TitleElement);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pContentElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButtonEl);
        liElement.appendChild(postButtonEl);

        reviewList.appendChild(liElement);

        clearInputs(titleInput, categoryInput, contentInput);
    }

    function editInformation(liElement, title, category, content) {
        titleInput.value = title;
        categoryInput.value = category;
        contentInput.value = content;

        liElement.remove();
    }

    function saveInformation(liElement) {
        const editBtn = document.querySelector(".edit");
        const postBtn = document.querySelector(".post");

        editBtn.remove();
        postBtn.remove();

        publishedList.appendChild(liElement);
    }


    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs(field1, field2, field3) {
        field1.value = "";
        field2.value = "";
        field3.value = "";
    }
}
