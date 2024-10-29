function solve(inputArray) {
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    let count = inputArray.shift();
    let songsLibrary = {};
    let allSongs = [];

    for (let i = 0; i < count; i++) {
        let [typeList, name, time] = inputArray.shift().split("_");

        if (!songsLibrary[typeList]) {
            songsLibrary[typeList] = [];
        }

        let newSong = new Song(name, time);
        songsLibrary[typeList].push(newSong);
        allSongs.push(newSong);
    }

    let typeList = inputArray.shift();

    if (typeList === "all") {
        allSongs.forEach(song => song.print());
    } else {
        songsLibrary[typeList].forEach(song => song.print());
    }
}


solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater']
)

solve([4,
    'ban_hey_3:48',
    'programming_ban_3:42',
    'ban_hello_3:29',
    'like_like_3:05',
    'all']
);

