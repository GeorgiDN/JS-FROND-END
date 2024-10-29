function solve(inputArray) {
    let bookShelf = {};

    inputArray.forEach((row) => {
        row = row.split(" ");
        if (row.includes("->")) {
            let idGenre = row.join("").split("->");
            let id = idGenre[0];
            let genre = idGenre[1];
            if (!bookShelf.hasOwnProperty(id)) {
                bookShelf[id] = {};
                bookShelf[id][genre] = [];
            }
        } else {
            row = row.join(" ")
            let [bookTitleAuthor, genre] = row.split(", ");

            Object.entries(bookShelf).forEach(([id, genres]) => {
                if (genres.hasOwnProperty(genre)) {
                    bookShelf[id][genre].push(bookTitleAuthor);
                }
            })
        }
    });

        let sortedBookShelf = Object.entries(bookShelf)
            .sort(([, genresA], [, genresB]) => {
        let totalBooksA = Object.values(genresA).reduce((acc, books) => acc + books.length, 0);
        let totalBooksB = Object.values(genresB).reduce((acc, books) => acc + books.length, 0);
        return totalBooksB - totalBooksA;
    });

    sortedBookShelf.forEach(([id, genresData]) => {
        Object.entries(genresData).forEach(([genre, titles]) => {
            let sortedTitles = titles.sort((a, b) => a.localeCompare(b));
            console.log(`${id} ${genre}: ${titles.length}`);
            sortedTitles.forEach((bookInfo) => {
                console.log(`--> ${bookInfo}`)
            })
        });
    });
}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])
