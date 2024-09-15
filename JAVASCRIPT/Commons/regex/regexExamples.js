//test
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae debitis, deserunt distinctio, " +
    "expedita explicabo facere odit omnis, quos repudiandae similique sunt tempora vel. Autem corporis explicabo non " +
    "perferendis quidem?";

const pattern = /([A-Z])[a-z]+/g;
const pattern2 = new RegExp("[A-Z][a-z]+", "g");
const result = pattern.test(text);
const result2 = pattern2.test(text);
console.log(result);
console.log(result2);
console.log();


//Exec
console.log("------------------------Exec-----------------------");
const execResult = pattern.exec(text);
console.log(execResult);
console.log(execResult);
console.log(pattern.exec(text));
console.log();

// String Method
// Match
console.log("------------------------Match-----------------------");
const pattern3 = /[A-Z][a-z]/;
const matchResult = text.match(pattern);
const matchResult3 = text.match(pattern3);
// console.log(matchResult)

// Without g
console.log(matchResult3);
console.log();

// MatchAll
console.log("------------------------MatchAll-----------------------");
const matchAllResult = text.matchAll(pattern);
for (const match of matchAllResult) {
    console.log(match);
}
console.log();


// Replace
console.log("------------------------Replace-----------------------");
let replacedText =  text.replace(pattern, "****");
console.log(replacedText);
console.log()


// Split
console.log("------------------------Split-----------------------")
let input = "first.second/third|fourth";
const words = input.split(/[\.\/\|]/g);
console.log(words)
console.log()
