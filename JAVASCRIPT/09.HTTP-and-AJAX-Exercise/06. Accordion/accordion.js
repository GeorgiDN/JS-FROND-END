function solution() {
    const baseUrl = "http://localhost:3030/jsonstore/advanced/articles/list";
    const mainSectionElement = takeElementByTag("#main");

    async function loadArticles() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const articles = Object.values(result);

        const recordsElements = await Promise.all(articles.map(article =>
            createRecord(article._id, article.title)));

        mainSectionElement.append(...recordsElements);
    }

    async function createRecord(articleId, title) {

        const divAccordionElement = createEl("div");
        divAccordionElement.classList.add("accordion");

        const divHeadElement = createEl("div");
        divHeadElement.classList.add("head");

        const spanHeadElement = createEl("span");
        spanHeadElement.textContent = title;

        const buttonElement = createEl("button");
        buttonElement.classList.add("button");
        buttonElement.id = articleId;
        buttonElement.textContent = "MORE";

        const divExtraElement = createEl("div");
        divExtraElement.classList.add("extra");
        divExtraElement.style.display = "none";

        const pContentElement = createEl("p");

        const textContentElement = await takeContent(articleId);
        pContentElement.textContent = textContentElement;

        divExtraElement.appendChild(pContentElement);

        buttonElement.addEventListener("click", () => {
            showExtra(buttonElement, divExtraElement)
        });

        divHeadElement.appendChild(spanHeadElement);
        divHeadElement.appendChild(buttonElement);

        divAccordionElement.appendChild(divHeadElement);
        divAccordionElement.appendChild(divExtraElement);

        return divAccordionElement;
    }

    async function takeContent(articleId) {
        const articlesResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`);
        const result  = await articlesResponse.json()

        return result.content;
    }

    function showExtra(buttonElement, divExtraElement) {
        if (divExtraElement.style.display === "none") {
            divExtraElement.style.display = "block";
            buttonElement.textContent = "Less";
        } else {
            divExtraElement.style.display = "none";
            buttonElement.textContent = "More";
        }
    }

    function takeElementByTag(tag) {
        return document.querySelector(tag);
    }

    function createEl(tag) {
        return document.createElement(tag);
    }

    loadArticles();

}

solution()
