function solve(inputArray) {
    let commentsData = {};
    let listOfUsers = [];

    inputArray.forEach((data) => {
        data = data.split(" ");
        if (data[0] === "user") {
            let username = data[1];
            listOfUsers.push(username);
        } else if (data[0] === "article") {
            let articleName = data[1];
            commentsData[articleName] = {};
        } else {
            data = data.join(" ");
            let [userArticle, titleContent] = data.split(": ");
            userArticle = userArticle.split(" posts on ");
            let username = userArticle[0];
            let article = userArticle[1];
            titleContent = titleContent.split(", ");
            let commentTitle = titleContent[0];
            let commentContent = titleContent[1];
            if (listOfUsers.includes(username) && commentsData.hasOwnProperty(article)) {
                if (!commentsData[article].hasOwnProperty(username)) {
                    commentsData[article][username] = [];
                }
                commentsData[article][username].push({ title: commentTitle, content: commentContent });
            }
        }
    });

    let sortedArticles = Object.entries(commentsData)
        .sort(([, a], [, b]) => Object.keys(b).length - Object.keys(a).length);

    sortedArticles.forEach(([articleName, usersComments]) => {
        console.log(`Comments on ${articleName}`);

        let sortedUsersComments = Object.entries(usersComments)
            .sort(([userA], [userB]) => userA.localeCompare(userB));

        sortedUsersComments.forEach(([username, comments]) => {
            comments.forEach(comment => {
                console.log(`--- From user ${username}: ${comment.title} - ${comment.content}`);
            });
        });
    });
}


solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])


//  80/100
// function solve(inputArray) {
//     let commentsData = {};
//     let listOfUsers = [];
//
//     inputArray.forEach((data) => {
//         data = data.split(" ")
//         if (data[0] === "user") {
//             let username = data[1];
//             listOfUsers.push(username);
//         } else if (data[0] === "article") {
//             let articleName = data[1];
//             commentsData[articleName] = {};
//         } else {
//             data = data.join(" ")
//             let [userArticle, titleContent] = data.split(": ")
//             userArticle = userArticle.split(" posts on ")
//             let username = userArticle[0];
//             let article = userArticle[1];
//             titleContent = titleContent.split(", ");
//             let commentTitle = titleContent[0];
//             let commentContent = titleContent[1];
//             if (listOfUsers.includes(username) && (commentsData.hasOwnProperty(article))) {
//                 if (!commentsData[article].hasOwnProperty(username)) {
//                     commentsData[article][username] = [];
//                 }
//                 commentsData[article][username].push(commentTitle);
//                 commentsData[article][username].push(commentContent);
//             }
//         }
//     });
//     let sortedArticles = Object.entries(commentsData)
//         .sort(([, a], [, b]) => Object.keys(b).length - Object.keys(a).length);
//
//     sortedArticles.forEach(([articleName, usersComments]) => {
//         console.log(`Comments on ${articleName}`);
//
//         let sortedUsersComments = Object.entries(usersComments)
//             .sort(([userA], [userB]) => userA.localeCompare(userB));
//
//         sortedUsersComments.forEach(([user, comments]) => {
//             let title = comments[0];
//             let content = comments[1];
//             console.log(`--- From user ${user}: ${title} - ${content}`);
//         });
//     });
// }


