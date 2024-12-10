window.addEventListener('load', solve);

function solve() {
    const totalPointsField = document.querySelector("#total-sprint-points")
    const hiddenField = document.querySelector('#task-id')
    const createBtn = document.querySelector("#create-task-btn")
    const deleteBtn = document.querySelector("#delete-task-btn")
    const tasksSection = document.querySelector('#tasks-section')

    //input fields
    const titleInput = document.querySelector('#title');
    const descriptionInput = document.querySelector('#description');
    const labelInput = document.querySelector('#label');
    const pointsInput = document.querySelector('#points');
    const assigneeInput = document.querySelector('#assignee');

    const labelsMap = {
        "Feature": {
            class: 'feature',
            icon: '&#8865'
        },
        "Low Priority Bug": {
            class: 'low-priority',
            icon: '&#9737'
        },
        "High Priority Bug": {
            class: 'high-priority',
            icon: '&#9888'
        },
    }

    let articleIdCounter = 0
    let totalPoints = 0

    evaluateTotalPoints()

    createBtn.addEventListener('click', createTask)
    deleteBtn.addEventListener('click', deleteTask)

    function createTask(event) {
        event.preventDefault()

        if (titleInput.value === ""
            || descriptionInput.value === ""
            || labelInput.value === ""
            || pointsInput.value === ""
            || assigneeInput.value === ""
        ) return;


        const articleData = {
            title: titleInput.value,
            description: descriptionInput.value,
            label: labelInput.value,
            points: pointsInput.value,
            assignee: assigneeInput.value,
        }

        const article = handleArticleCreation(articleData)
        tasksSection.appendChild(article)
        evaluateTotalPoints()
        clearInputFields()

    }

    function deleteTask(event) {
        event.preventDefault()
        article = document.querySelector(`#${hiddenField.textContent}`)
        article.remove()
        totalPoints -= Number(pointsInput.value)
        toggleDisabledStatus()
        evaluateTotalPoints()
        clearInputFields()


    }
    function handleArticleCreation(articleData) {
        articleIdCounter++
        totalPoints += Number(articleData.points)
        const taskDeleteBtn = document.createElement('button')
        taskDeleteBtn.textContent = 'Delete'
        taskDeleteBtn.addEventListener('click', handleDeleteRequest)

        const actionElement = document.createElement('div')
        actionElement.classList.add("task-card-actions")
        actionElement.appendChild(taskDeleteBtn)

        const assignedToElement = document.createElement('div')
        actionElement.classList.add("task-card-assignee")
        assignedToElement.textContent = `Assigned to: ${articleData.assignee}`

        const pointsElement = document.createElement('div')
        actionElement.classList.add("task-card-points")
        pointsElement.textContent = `Estimated at ${articleData.points} pts`

        const descriptionElement = document.createElement('p')
        descriptionElement.classList.add('task-card-description')
        descriptionElement.textContent = `${articleData.description}`

        const titleElement = document.createElement('h3')
        titleElement.classList.add('task-card-title')
        titleElement.textContent = articleData.title

        const labelElement = document.createElement('div')
        labelElement.classList.add('task-card-label')
        labelElement.classList.add(labelsMap[articleData.label].class)
        labelElement.innerHTML = `${articleData.label} ${labelsMap[articleData.label].icon}`

        const articleElement = document.createElement('article')
        articleElement.classList.add('task-card')
        articleElement.setAttribute("id", `task-${articleIdCounter}`)

        articleElement.appendChild(labelElement)
        articleElement.appendChild(titleElement)
        articleElement.appendChild(descriptionElement)
        articleElement.appendChild(pointsElement)
        articleElement.appendChild(assignedToElement)
        articleElement.appendChild(actionElement)

        return articleElement

        function handleDeleteRequest(event) {
            event.preventDefault()
            titleInput.value = articleData.title
            descriptionInput.value = articleData.description
            labelInput.value = articleData.label
            pointsInput.value = articleData.points
            assigneeInput.value = articleData.assignee

            toggleDisabledStatus()

            hiddenField.textContent = articleElement.id
        };
    };


    function evaluateTotalPoints() {
        totalPointsField.textContent = `Total Points ${totalPoints}pts`
    };

    function clearInputFields() {
        titleInput.value = ""
        descriptionInput.value = ""
        labelInput.value = ""
        pointsInput.value = ""
        assigneeInput.value = ""
        hiddenField.textContent = ""
    }
    function toggleDisabledStatus() {
        titleInput.disabled = !titleInput.disabled
        descriptionInput.disabled = !descriptionInput.disabled
        labelInput.disabled = !labelInput.disabled
        pointsInput.disabled = !pointsInput.disabled
        assigneeInput.disabled = !assigneeInput.disabled
        createBtn.disabled = !createBtn.disabled
        deleteBtn.disabled = !deleteBtn.disabled
    }
}













// window.addEventListener('load', solve);
//
// function solve() {
//     const labelToIconMap = {
//         'Feature': '&#8865;',
//         'Low Priority Bug': '&#9737;',
//         'High Priority Bug': '&#9888;',
//     };
//     const labelNameToClassMap = {
//         'Feature': 'feature',
//         'Low Priority Bug': 'low-priority',
//         'High Priority Bug': 'high-priority',
//     };
//     const tasks = {};
//     const inputDOMSelectors = {
//         title: document.getElementById('title'),
//         description: document.getElementById('description'),
//         label: document.getElementById('label'),
//         points: document.getElementById('points'),
//         assignee: document.getElementById('assignee'),
//     };
//
//     const otherDOMSelectors = {
//         createBtn: document.getElementById('create-task-btn'),
//         deleteBtn: document.getElementById('delete-task-btn'),
//         tasksSection: document.getElementById('tasks-section'),
//         totalSprintPoints: document.getElementById('total-sprint-points')
//     };
//
//     otherDOMSelectors.createBtn.addEventListener('click', createTaskHandler);
//     otherDOMSelectors.deleteBtn.addEventListener('click', deleteTaskHandler);
//
//     function createTaskHandler() {
//         const { title, description, label, points, assignee } = inputDOMSelectors;
//         const hasInvalidInputValue = Object.values(inputDOMSelectors)
//             .some((input) => input.value === '');
//         if (hasInvalidInputValue) {
//             return;
//         }
//
//         const taskId = `task-${Object.keys(tasks).length + 1}`;
//         const article = createElement('article', null, otherDOMSelectors.tasksSection, ['task-card'], taskId);
//         createElement('div', `${label.value} ${labelToIconMap[label.value]}`, article, ['task-card-label', labelNameToClassMap[label.value]], null, true);
//         createElement('h3', `${title.value}`, article, ['task-card-title']);
//         createElement('p', `${description.value}`, article, ['task-card-description']);
//         createElement('div', `Estimated at ${points.value} pts`, article, ['task-card-points']);
//         createElement('div', `Assigned to: ${assignee.value}`, article, ['task-card-assignee']);
//         const taskCardActions = createElement('div', '', article, ['task-card-actions']);
//         const deleteBtn = createElement('button', 'Delete', taskCardActions);
//         deleteBtn.addEventListener('click', loadDeleteForm);
//         tasks[taskId] = {
//             title: title.value,
//             description: description.value,
//             label: label.value,
//             points: points.value,
//             assignee: assignee.value,
//         };
//         updateTotalPoints();
//         clearInputFields();
//     }
//
//     function loadDeleteForm(e) {
//         const taskId = e.target.parentNode.parentNode.getAttribute('id');
//         document.getElementById('task-id').value = taskId;
//         for (const key in inputDOMSelectors) {
//             inputDOMSelectors[key].value = tasks[taskId][key];
//         }
//         Object.values(inputDOMSelectors)
//             .forEach((input) => {
//                 input.setAttribute('disabled', true);
//             })
//         otherDOMSelectors.createBtn.setAttribute('disabled', true);
//         otherDOMSelectors.deleteBtn.removeAttribute('disabled');
//     }
//
//     function deleteTaskHandler() {
//         const taskId = document.getElementById('task-id').value;
//         const taskToRemove = document.getElementById(taskId);
//         taskToRemove.remove();
//         delete tasks[taskId];
//         otherDOMSelectors.deleteBtn.setAttribute('disabled', true);
//         otherDOMSelectors.createBtn.removeAttribute('disabled');
//         Object.values(inputDOMSelectors)
//             .forEach((input) => {
//                 input.removeAttribute('disabled');
//             });
//         clearInputFields();
//         updateTotalPoints();
//     }
//
//     function clearInputFields() {
//         Object.values(inputDOMSelectors)
//             .forEach((input) => {
//                 input.value = '';
//             });
//     }
//
//     function updateTotalPoints() {
//         const totalSprintPoints = Object.values(tasks).map((t) => Number(t.points)).reduce((a, b) => a + b, 0);
//         otherDOMSelectors.totalSprintPoints.textContent = `Total Points ${totalSprintPoints}pts`;
//     }
//
//     function createElement(type, content, parentNode, classes, id, useInnerHtml) {
//         const element = document.createElement(type);
//
//         if (content && useInnerHtml) {
//             element.innerHTML = content;
//         } else {
//             if (content && type !== 'input') {
//                 element.textContent = content;
//             }
//
//             if (content && type === 'input') {
//                 element.value = content;
//             }
//         }
//
//         if (classes && classes.length > 0) {
//             element.classList.add(...classes);
//         }
//
//         if (id) {
//             element.setAttribute('id', id);
//         }
//
//         if (parentNode) {
//             parentNode.appendChild(element);
//         }
//
//         return element;
//     }
// }
