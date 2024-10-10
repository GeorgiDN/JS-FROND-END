function solve(inputArray) {

    function calculateAverageGrade(arr){
        let totalSum = 0;
        arr.forEach(grade => {
            totalSum += grade;
        });
        let averageGrade = totalSum / arr.length;
        return averageGrade
    }

    let gradesData = {};

    inputArray.forEach((row) => {
        row = row.split(', ')
        let name = (row[0].split(': ')[1]);
        let grade = Number(row[1].split(': ')[1]);
        let nextGrade = grade + 1
        let averageGrade = Number(row[2].split(': ')[1]);

        if (averageGrade >= 3) {
            if (!gradesData.hasOwnProperty(nextGrade)) {
                gradesData[nextGrade] = {};
            }
            gradesData[nextGrade][name] = averageGrade;
        }
    });

    Object.entries(gradesData).forEach(([year, studentsData]) => {
        console.log(`${year} Grade`);
        let listOfStudents = [];
        Object.keys(studentsData).forEach(name => {
            listOfStudents.push(name);
        })
        console.log(`List of students: ${listOfStudents.join(', ')}`);
        let listOfGrades = [];
        Object.values(studentsData).forEach(grade => {
            listOfGrades.push(grade);
        })
        let averageAnnualScore = calculateAverageGrade(listOfGrades);
        console.log(`Average annual score from last year: ${averageAnnualScore.toFixed(2)}`)
        console.log();
    });
}


solve([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)

// solve([
// 'Student name: George, Grade: 5, Graduated with an average score: 2.75',
// 'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
// 'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
// 'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
// 'Student name: John, Grade: 9, Graduated with an average score: 2.90',
// 'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
// 'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
// ]
// )
