function ageDefine(num) {
    let dictionary = {
        "baby": [0, 2],
        "child": [3, 13],
        "teenager": [14, 19],
        "adult": [20, 65],
        "elder": [66, Infinity],
    }
    for (let [group, ageRange] of Object.entries(dictionary)) {
        let start = ageRange[0]
        let end = ageRange[1]
        if (num >= start && num <= end) {
            return console.log(group);
        }
    }
    console.log("out of bounds");
}

// ageDefine(-1)
// ageDefine(0)
// ageDefine(3)
// ageDefine(14)
// ageDefine(20)
// ageDefine(66)
// ageDefine(80)
