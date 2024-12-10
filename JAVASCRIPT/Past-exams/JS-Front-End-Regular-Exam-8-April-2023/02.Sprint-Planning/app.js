window.addEventListener('load', solve);

function solve() {

    const hiddenInput = takeElementByTag("#task-id");
    const titleInput = takeElementByTag("#title");
    const descriptionInput = takeElementByTag("#description");
    const labelInput = takeElementByTag("#label");
    const estimationPointsInput = takeElementByTag("#points");
    const assigneeInput = takeElementByTag("#assignee");
    const createTaskButton = takeElementByTag("#create-task-btn");
    const deleteTaskButton = takeElementByTag("#delete-task-btn");
    const tasksSection = takeElementByTag("#tasks-section");
    const pTotalPoints = takeElementByTag("#total-sprint-points");
    let sumPoints = 0;

    let currentId = 0;

    const labelsSymbols = {
        "Feature": "&#8865;",
        "Low Priority Bug": "&#9737;",
        "High Priority Bug": "&#9888;",
    }

    const classes = {
        "Feature": "feature",
        "Low Priority Bug": "low-priority",
        "High Priority Bug": "high-priority"
    }

    createTaskButton.addEventListener("click", createTaskSection);
    deleteTaskButton.addEventListener("click", deleteTask)

    function createTaskSection() {
        currentId++;
        if (!titleInput.value ||
            !descriptionInput.value ||
            !labelInput.value ||
            !estimationPointsInput.value ||
            !assigneeInput.value) {
            return;
        }

        const title = titleInput.value;
        const description = descriptionInput.value;
        const label = labelInput.value;
        const estimationPoints = estimationPointsInput.value;
        const assignee = assigneeInput.value;

        const articleEl = createEl("article");
        articleEl.id = `task-${currentId}`;
        articleEl.classList.add("task-card");

        const divTaskLabel = createEl("div");
        divTaskLabel.classList.add("task-card-label");

        divTaskLabel.classList.add(classes[label]);
        divTaskLabel.innerHTML = `${label} ${labelsSymbols[label]}`

        const h3TaskTitleEl = createEl("h3");
        h3TaskTitleEl.classList.add("task-card-title");
        h3TaskTitleEl.textContent = title;

        const pDescriptionEl = createEl("p");
        pDescriptionEl.textContent = description;

        const divTaskPoints = createEl("div");
        divTaskPoints.classList.add("task-card-points");
        divTaskPoints.textContent = `Estimated at ${estimationPoints} pts`;

        const divTaskAssignee = createEl("div");
        divTaskAssignee.classList.add("task-card-assignee");
        divTaskAssignee.textContent = `Assigned to: ${assignee}`;

        const divTaskAction = createEl("div");
        divTaskAction.classList.add("task-card-actions");

        const deleteButtonEl = createEl("button");
        deleteButtonEl.textContent = "Delete";
        deleteButtonEl.addEventListener("click", () => {
            removeTask(articleEl, title, description, label, estimationPoints, assignee)
        })

        divTaskAction.appendChild(deleteButtonEl);

        articleEl.appendChild(divTaskLabel);
        articleEl.appendChild(h3TaskTitleEl);
        articleEl.appendChild(pDescriptionEl);
        articleEl.appendChild(divTaskPoints);
        articleEl.appendChild(divTaskAssignee);
        articleEl.appendChild(divTaskAction);

        tasksSection.appendChild(articleEl);

        sumPoints += Number(estimationPoints);
        pTotalPoints.textContent = `Total Points ${sumPoints}pts`;

        clearInputs(hiddenInput, titleInput, descriptionInput, labelInput, estimationPointsInput, assigneeInput)
    }

    function removeTask(articleEl, title, description, label, estimationPoints, assignee) {
        hiddenInput.value = articleEl.id;
        titleInput.value = title;
        descriptionInput.value = description;
        labelInput.value = label;
        estimationPointsInput.value = estimationPoints;
        assigneeInput.value = assignee;

        disabledElements(hiddenInput, titleInput, descriptionInput, labelInput, estimationPointsInput, assigneeInput, createTaskButton)
        removeDisabled(deleteTaskButton);
    }

    function deleteTask() {
        const idForDelete = hiddenInput.value;
        sumPoints -= Number(estimationPointsInput.value);
        pTotalPoints.textContent = `Total Points ${sumPoints}pts`;

        const articleToDelete = document.getElementById(idForDelete);
        articleToDelete.remove();

        removeDisabled(hiddenInput, titleInput, descriptionInput, labelInput, estimationPointsInput, assigneeInput, createTaskButton);
        disabledElements(deleteTaskButton);
        clearInputs(hiddenInput, titleInput, descriptionInput, labelInput, estimationPointsInput, assigneeInput)
    }

    function removeDisabled(...elements) {
        elements.forEach(el => (el.removeAttribute("disabled")));
    }

    function disabledElements(...elements) {
        elements.forEach(el => (el.setAttribute("disabled", "disabled")));
    }

    function takeElementByTag(tag) {
        return document.querySelector(tag);
    }

    function createEl(tagName) {
        return document.createElement(tagName);
    }

    function clearInputs(...inputs) {
        inputs.forEach(input => (input.value = ""));
    }
}
