function solve(inputArray) {
    let movies = [];

    function fillData(data, searchedString, movies) {
        let [movieName, field] = data.split(` ${searchedString} `);
        let movie = movies.find(m => m.name === movieName);
        if (movie) {
            if (searchedString === "directedBy") {
                movie.director = field;
            } else if (searchedString === "onDate") {
                movie.date = field;
            }
        }
        return movies;
    }

    inputArray.forEach((data) => {
        if (data.startsWith("addMovie ")) {
            let movieName = data.replace("addMovie ", "");
            movies.push({name: movieName});
        } else if (data.includes("directedBy")) {
            movies = fillData(data, "directedBy", movies);
        } else if (data.includes("onDate")) {
            movies = fillData(data, "onDate", movies);
        }
    });

    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date)  {
            console.log(JSON.stringify(movie));
        }
    });
}


solve([
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
])


// function solve(inputArray) {
//     let movies = [];
//
//     inputArray.forEach((data) => {
//         if (data.startsWith("addMovie ")) {
//             let movieName = data.replace("addMovie ", "");
//             movies.push({name: movieName});
//         } else if (data.includes("directedBy")) {
//             let [movieName, director] = data.split(" directedBy ");
//             let movie = movies.find(m => m.name === movieName);
//             if (movie) {
//                 movie.director = director;
//             }
//         } else if (data.includes("onDate")) {
//             let [movieName, date] = data.split(" onDate ");
//             let movie = movies.find(m => m.name === movieName);
//             if (movie) {
//                 movie.date = date
//             }
//         }
//     });
//
//     movies.forEach(movie => {
//         if (movie.name && movie.director && movie.date)  {
//             console.log(JSON.stringify(movie));
//         }
//     })
// }
//
