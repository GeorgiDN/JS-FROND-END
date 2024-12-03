const baseUrl = "http://localhost:3030/jsonstore/tasks";

const loadButton = document.getElementById("load-course");
const addButton = document.getElementById("add-course");
const editButton = document.getElementById("edit-course");
const courseList = document.getElementById("list");
const formElement = document.querySelector("#form form");

const courseTitleInput = document.getElementById("course-name");
const courseTypeInput = document.getElementById("course-type");
const descriptionInput = document.getElementById("description");
const teacherNameInput = document.getElementById("teacher-name");


loadButton.addEventListener("click", loadCourses);
addButton.addEventListener("click", addCourse);
editButton.addEventListener("click", editCourse);


async function addCourse(e) {
    const title = courseTitleInput.value;
    const type = courseTypeInput.value;
    const description = descriptionInput.value;
    const teacher = teacherNameInput.value;

    e.preventDefault();

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, type, description, teacher })
    });


    clearInputs(courseTitleInput, courseTypeInput, descriptionInput, teacherNameInput);
    await loadCourses();

}

async function editCourse() {
    const courseId = formElement.getAttribute("data-course-id");

    const title = courseTitleInput.value;
    const type = courseTypeInput.value;
    const description = descriptionInput.value;
    const teacher = teacherNameInput.value;

    clearInputs(courseTitleInput, courseTypeInput, descriptionInput, teacherNameInput);

    await fetch(`${baseUrl}/${courseId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, type, description, teacher, _id: courseId })
    });

    await loadCourses();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");
    formElement.removeAttribute("data-course-id");
}

async function loadCourses() {
    courseList.innerHTML = "";

    const response = await fetch(baseUrl);
    const result = await response.json();
    const records = Object.values(result);

    const recordsElements = records.map(course => createEl(course.title, course.type, course.description, course.teacher ,course._id));

    courseList.append(...recordsElements);
}

function createEl(title, type, description, teacher, courseId) {
    const h2TitleElement = createTagEl("h2");
    h2TitleElement.textContent = title;

    const h3TeacherElement = createTagEl("h3");
    h3TeacherElement.textContent = teacher;

    const h3CourseTypeElement = createTagEl("h3");
    h3CourseTypeElement.textContent = type;

    const h4DescriptionElement = createTagEl("h4");
    h4DescriptionElement.textContent = description;

    const divContainer = createTagEl("div");
    divContainer.classList.add("container");

    divContainer.appendChild(h2TitleElement);
    divContainer.appendChild(h3TeacherElement);
    divContainer.appendChild(h3CourseTypeElement);
    divContainer.appendChild(h4DescriptionElement);

    const changeButton = createTagEl("button");
    changeButton.classList.add("edit-btn");
    changeButton.textContent = "Edit Course";
    changeButton.addEventListener("click", () => {
        courseTitleInput.value = title;
        courseTypeInput.value = type;
        descriptionInput.value = description;
        teacherNameInput.value = teacher;

        editButton.removeAttribute("disabled");
        addButton.setAttribute("disabled", "disabled");
        formElement.setAttribute("data-course-id", courseId);
    });

    const finishButton = createTagEl("button");
    finishButton.classList.add("finish-btn");
    finishButton.textContent = "Finish Course";
    finishButton.addEventListener("click", async() => {
        await fetch(`${baseUrl}/${courseId}`, {
            method: "DELETE",
        });
        await loadCourses();
    })

    divContainer.appendChild(changeButton);
    divContainer.appendChild(finishButton);

    return divContainer;
}


function createTagEl(tagName) {
    return document.createElement(tagName);
}


function clearInputs(field1, field2, field3, field4) {
    field1.value = "";
    field2.value = "";
    field3.value = "";
    field4.value = "";
}
