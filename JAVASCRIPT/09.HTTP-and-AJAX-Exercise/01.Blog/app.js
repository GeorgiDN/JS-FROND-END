function attachEvents() {
    const postsUrl =  "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
    const loadPostsButton = takeElementByTag("#btnLoadPosts");
    const viewsButton = takeElementByTag("#btnViewPost");
    const selectPostsEl = takeElementByTag("#posts");
    const commentsList = takeElementByTag("#post-comments");
    const postTitle = takeElementByTag("#post-title");
    const postBody = takeElementByTag("#post-body");

    loadPostsButton.addEventListener("click", loadPosts);
    viewsButton.addEventListener("click", getData);

    let postDetails = {};

    async function loadPosts() {
        const allPostResponse = await fetch(postsUrl);
        const allPosts = await allPostResponse.json();

        Object.entries(allPosts).forEach(([objectKey, post]) => {
            postDetails[post.id] = {};
            postDetails[post.id]["title"] = post.title;
            postDetails[post.id]["body"] = post.body;
            const optionEl = createEl("option");
            optionEl.value = post.id;
            optionEl.textContent = post.title;
            selectPostsEl.appendChild(optionEl);
        });
    }

    async function getData() {
        commentsList.innerHTML = "";

        const selectedPostId = selectPostsEl.value;

        const allCommentsResponse = await fetch(commentsUrl);
        const postData = await allCommentsResponse.json();

        postTitle.textContent = postDetails[selectedPostId]["title"];
        postBody.textContent = postDetails[selectedPostId]["body"];

        Object.values(postData).forEach((post) => {
            if (selectPostsEl.value === post.postId) {
                const liElement = createEl("li");
                liElement.id = post.postId;
                liElement.textContent = post.text;
                commentsList.appendChild(liElement);
            }
        });
    }

    function takeElementByTag(tag) {
        return document.querySelector(tag);
    }

    function createEl(tag) {
        return document.createElement(tag);
    }
}

attachEvents();
