function solve(inputArray) {
    let sprintData = {};
    const rows = Number(inputArray.shift());
    const totalTasksPoints = {
        "ToDo": 0,
        "In Progress": 0,
        "Code Review": 0,
        "Done": 0
    }

    takeInput();
    taskProcess();
    printResult();


    function takeInput() {
        for (let i = 0; i < rows; i++) {
            const board = inputArray.shift().split(":");
            const assignee = board[0];
            const taskId = board[1];
            const title = board[2];
            const status = board[3];
            const estimatedPoints = Number(board[4]);

            createRecord(assignee, taskId, title, status, estimatedPoints);
        }
    }

    function taskProcess() {
        while (inputArray.length > 0) {
            const commandInfo = inputArray.shift().split(":");

            const currentCommand = commandInfo[0];
            const assignee = commandInfo[1];

            if (currentCommand === "Add New") {
                const taskId = commandInfo[2];
                const title = commandInfo[3];
                const status = commandInfo[4];
                const estimatedPoints = Number(commandInfo[5]);
                addNew(assignee, taskId, title, status, estimatedPoints);

            } else if (currentCommand === "Change Status") {
                const taskId = commandInfo[2];
                const newStatus = commandInfo[3];
                changeStatus(assignee, taskId, newStatus);

            } else if (currentCommand === "Remove Task") {
                const idx = Number(commandInfo[2]);
                removeTask(assignee, idx);
            }
        }
    }

    function addNew(assignee, taskId, title, status, estimatedPoints) {
        const assigneeExist = checkAssigneeExistence(assignee);
        if (!assigneeExist) {
            printAssigneeNotExistMessage(assignee);
        } else {
            createRecord(assignee, taskId, title, status, estimatedPoints);
        }
    }

    function changeStatus(assignee, taskId, newStatus) {
        const assigneeExist = checkAssigneeExistence(assignee);
        if (!assigneeExist) {
            printAssigneeNotExistMessage(assignee);
        } else if (assigneeExist) {
            const taskIdExist = checkForTaskId(assignee, taskId);
            if (!taskIdExist) {
                printTaskIdNotExistMessage(assignee, taskId);
            } else {
                sprintData[assignee][taskId]["status"] = newStatus;
            }
        }
    }

    function removeTask(assignee, idx) {
        const assigneeExist = checkAssigneeExistence(assignee);
        if (!assigneeExist) {
            printAssigneeNotExistMessage(assignee);
        } else if (assigneeExist) {
            const assigneeTasks = sprintData[assignee];
            const taskKeys = Object.keys(assigneeTasks);
            const validIndex = isValidIndex(idx, taskKeys);
            if (validIndex) {
                const keyToDelete = taskKeys[idx];
                delete assigneeTasks[keyToDelete];
            } else {
                printIndexOutOfRange();
            }
        }
    }

    function printResult() {
        Object.entries(sprintData).forEach(([assignee, data]) => {
            Object.entries(data).forEach(([_, taskData]) => {
                const currentStatus = taskData["status"];
                const currentPoints = taskData["estimatedPoints"];
                totalTasksPoints[currentStatus] += currentPoints;
            });
        });
        Object.entries(totalTasksPoints).forEach(([task, points]) => {
            if (task !== "Done") {
                console.log(`${task}: ${points}pts`);
            } else {
                console.log(`${task} Points: ${points}pts`);
            }
        });

        const spintSuccessful = isSprintSuccessful();
        if (spintSuccessful) {
            console.log("Sprint was successful!");
        } else {
            console.log("Sprint was unsuccessful...")
        }
    }

    function createRecord(assignee, taskId, title, status, estimatedPoints) {
        if (!sprintData.hasOwnProperty(assignee)) {
            sprintData[assignee] = {};
        }
        sprintData[assignee][taskId] = {};
        sprintData[assignee][taskId]["title"] = title;
        sprintData[assignee][taskId]["status"] = status;
        sprintData[assignee][taskId]["estimatedPoints"] = estimatedPoints;
    }

    function checkAssigneeExistence(assignee) {
        return sprintData.hasOwnProperty(assignee);
    }

    function printAssigneeNotExistMessage(assignee) {
        console.log(`Assignee ${assignee} does not exist on the board!`);
    }

    function checkForTaskId(assignee, taskId) {
        return sprintData[assignee].hasOwnProperty(taskId);
    }

    function printTaskIdNotExistMessage(assignee, taskId) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`)
    }

    function printIndexOutOfRange() {
        console.log("Index is out of range!");
    }

    function isValidIndex(idx, taskKeys) {
        return idx >= 0 && idx < taskKeys.length;
    }

    function isSprintSuccessful() {
        const donePoints = totalTasksPoints["Done"];
        const otherPointsSum = totalTasksPoints["ToDo"] +
            totalTasksPoints["In Progress"] +
            totalTasksPoints["Code Review"];

        return donePoints >= otherPointsSum;
    }
}


// solve([
//         '5',
//         'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
//         'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
//         'Peter:BOP-1211:POC:Code Review:5',
//         'Georgi:BOP-1212:Investigation Task:Done:2',
//         'Mariya:BOP-1213:New Account Page:In Progress:13',
//         'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
//         'Change Status:Peter:BOP-1290:ToDo',
//         'Remove Task:Mariya:1',
//         'Remove Task:Joro:1',
//     ]
// )
//
//
// solve([
//         '4',
//         'Kiril:BOP-1213:Fix Typo:Done:1',
//         'Peter:BOP-1214:New Products Page:In Progress:2',
//         'Mariya:BOP-1215:Setup Routing:ToDo:8',
//         'Georgi:BOP-1216:Add Business Card:Code Review:3',
//         'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
//         'Change Status:Georgi:BOP-1216:Done',
//         'Change Status:Will:BOP-1212:In Progress',
//         'Remove Task:Georgi:3',
//         'Change Status:Mariya:BOP-1215:Done',
//     ]
// )

