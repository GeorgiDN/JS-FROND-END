function attachEvents() {
    const baseUrl = "http://localhost:3030/jsonstore/tasks";

    const loadButton = document.getElementById("load-board-btn");
    const addButton = document.getElementById("create-task-btn");

    const toDoTaskList = document.querySelector("#todo-section .task-list");
    const inProgressTaskList = document.querySelector("#in-progress-section .task-list");
    const codeReviewTaskList = document.querySelector("#code-review-section .task-list");
    const doneTaskList = document.querySelector("#done-section .task-list");

    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");

    loadButton.addEventListener("click", loadTasks);
    addButton.addEventListener("click", addTask);

    async function addTask() {
        const title = titleInput.value;
        const description = descriptionInput.value;

        if (!title || !description) {
            return;
        }

        await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, status: "ToDo" }),
        });

        clearInputs(titleInput, descriptionInput);
        await loadTasks();
    }

    async function loadTasks() {
        clearTaskList(toDoTaskList, inProgressTaskList, codeReviewTaskList, doneTaskList);

        const response = await fetch(baseUrl);
        const result = await response.json();
        const records = Object.values(result);

        records.forEach(task => {
            const taskElement = createTaskElement(task);
            const parentList = getParentList(task.status);
            parentList.appendChild(taskElement);
        });
    }

    function createTaskElement(task) {
        const { title, description, status, _id } = task;

        const liElement = document.createElement("li");
        liElement.classList.add("task");

        const h3Title = document.createElement("h3");
        h3Title.textContent = title;

        const pDescription = document.createElement("p");
        pDescription.textContent = description;

        const actionButton = document.createElement("button");
        actionButton.textContent = getButtonLabel(status);
        actionButton.addEventListener("click", () => handleTaskAction(task));

        liElement.append(h3Title, pDescription, actionButton);

        return liElement;
    }

    async function handleTaskAction(task) {
        const { status, _id } = task;
        let newStatus;

        if (status === "ToDo") {
            newStatus = "In Progress";
        } else if (status === "In Progress") {
            newStatus = "Code Review";
        } else if (status === "Code Review") {
            newStatus = "Done";
        } else if (status === "Done") {
            await fetch(`${baseUrl}/${_id}`, { method: "DELETE" });
            await loadTasks();
            return;
        }

        await fetch(`${baseUrl}/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus }),
        });

        await loadTasks();
    }

    function getParentList(status) {
        if (status === "ToDo") return toDoTaskList;
        if (status === "In Progress") return inProgressTaskList;
        if (status === "Code Review") return codeReviewTaskList;
        if (status === "Done") return doneTaskList;
    }

    function getButtonLabel(status) {
        if (status === "ToDo") return "Move to In Progress";
        if (status === "In Progress") return "Move to Code Review";
        if (status === "Code Review") return "Move to Done";
        if (status === "Done") return "Close";
    }

    function clearTaskList(...lists) {
        lists.forEach(list => list.innerHTML = "");
    }

    function clearInputs(...inputs) {
        inputs.forEach(input => (input.value = ""));
    }
}

attachEvents();

