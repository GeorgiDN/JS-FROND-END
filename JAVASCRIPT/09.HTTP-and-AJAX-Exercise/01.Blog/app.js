function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    let loadPostsButton = document.getElementById('btnLoadPosts');
    loadPostsButton.addEventListener('click', loadPostsEvent);

    let postsSelect = document.getElementById('posts');

    let viewPostButton = document.getElementById('btnViewPost');
    viewPostButton.addEventListener('click', viewPostEvent);

    let allPosts = {};

    async function loadPostsEvent(event) {
        postsSelect.innerHTML = '';

        let allPostsResponse = await fetch(postsURL);
        allPosts = await allPostsResponse.json();

        for (let postArr of Object.entries(allPosts)) {
            let option = document.createElement('option');
            option.textContent = postArr[1].title;
            option.value = postArr[0];
            postsSelect.appendChild(option);
        }
    }

    async function viewPostEvent(event) {
        let currentPostId = postsSelect.value;
        let currentPostComments = [];

        let allCommentsResponse = await fetch(commentsURL);
        let allComments = await allCommentsResponse.json();

        for (let commentArr of Object.entries(allComments)) {
            if (commentArr[1].postId === currentPostId) {
                currentPostComments.push(commentArr[1].text);
            }
        }

        let chosenPost = allPosts[currentPostId];

        document.getElementById('post-title').textContent = chosenPost.title;
        document.getElementById('post-body').textContent = chosenPost.body;

        let ul = document.getElementById('post-comments');
        ul.innerHTML = '';
        for (let comment of currentPostComments) {
            let li = document.createElement('li');
            li.textContent = comment;
            ul.appendChild(li);
        }
    }
}

attachEvents();






// 50/100
// function attachEvents() {
//     const postUrl = "http://localhost:3030/jsonstore/blog/posts" ;
//     const commentsUrl = " http://localhost:3030/jsonstore/blog/comments";
//
//     let loadBtn = document.getElementById("btnLoadPosts");
//     let viewPostBtn = document.getElementById("btnViewPost");
//     let postSelect = document.getElementById("posts");
//     let postTitleElement = document.getElementById("post-title");
//     let commentsList = document.getElementById("post-comments");
//     let postBodyElement = document.getElementById("post-body");
//
//     loadBtn.addEventListener("click", () => {
//         postSelect.innerHTML = "";
//
//         fetch(postUrl)
//             .then(response => response.json())
//             .then(data => {
//                 Object.values(data)
//                     .forEach(post => {
//                         let optionElement = document.createElement("option");
//                         optionElement.value = post.id;
//                         optionElement.textContent = post.title;
//                         postSelect.appendChild(optionElement)
//                     });
//             });
//     });
//
//     viewPostBtn.addEventListener("click", async () => {
//         let selectedPostId = postSelect.value;
//         let postResponse = await fetch(`${postUrl}/${selectedPostId}`);
//         let selectedPost = await postResponse.json();
//         postTitleElement.textContent = selectedPost.title;
//
//         let commentsResponse = await fetch(`${commentsUrl}`);
//         let comments = await commentsResponse.json();
//         postBodyElement.textContent = selectedPost.body;
//
//         Object.values(comments)
//             .forEach(commentObject => {
//                 if (selectedPostId === commentObject.postId) {
//                     let liElement = document.createElement("li");
//                     liElement.textContent = commentObject.text;
//                     commentsList.appendChild(liElement)
//                 }
//             });
//
//     });
//
// }
//
// attachEvents();


