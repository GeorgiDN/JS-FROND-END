function browserHistory(obj, actionsArray) {
    let commandIsOpen = (command) => command.startsWith('Open');
    let commandIsClose = (command) => command.startsWith('Close');
    let commandIsClearHistory = (command) => command === 'Clear History and Cache'

    let actions = {
        open: (string) => {
            let tab = string.slice(5);
            obj['Open Tabs'].push(tab);
            obj['Browser Logs'].push(string);
        },

        close: (string) => {
            let tab = string.slice(6);
            if (obj['Open Tabs'].includes(tab)) {
                let tabAtIndex = obj['Open Tabs'].indexOf(tab);
                obj['Open Tabs'].splice(tabAtIndex, 1);
                obj['Recently Closed'].push(tab);
                obj['Browser Logs'].push(string);
            }
        },

        clear: () => {
            obj['Open Tabs'] = [];
            obj['Recently Closed'] = [];
            obj['Browser Logs'] = [];
        }
    }

    for (let command of actionsArray) {
        if (commandIsOpen(command)) actions.open(command);
        else if (commandIsClose(command)) actions.close(command);
        else if (commandIsClearHistory(command)) actions.clear();
    }

    console.log(obj['Browser Name']);
    console.log(`Open Tabs: ${obj["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${obj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${obj["Browser Logs"].join(', ')}`);
}



// 80/100
//function solve(objectData, actions) {
// //     let browser = objectData['Browser Name'];
// //     let openTabs = objectData['Open Tabs'];
// //     let recentlyClosedTabs = objectData['Recently Closed'];
// //     let browserLogs = objectData['Browser Logs'];
// //
// //     actions.forEach((data) => {
// //         if (data === 'Clear History and Cache') {
// //             openTabs = [];
// //             recentlyClosedTabs = [];
// //             browserLogs = [];
// //         } else {
// //             let [command, tab] = data.split(' ')
// //             browserLogs.push(`${command} ${tab}`);
// //             if (command === 'Open') {
// //                 openTabs.push(tab);
// //                 if (recentlyClosedTabs.includes(tab)) {
// //                     let index = recentlyClosedTabs.indexOf(tab);
// //                     recentlyClosedTabs.splice(index, 1);
// //                 }
// //             } else if (command === 'Close') {
// //                 if (openTabs.includes(tab) && !recentlyClosedTabs.includes(tab)) {
// //                     while (openTabs.includes(tab)) {
// //                         let index = openTabs.indexOf(tab);
// //                         openTabs.splice(index, 1);
// //                     }
// //                     recentlyClosedTabs.push(tab);
// //                 }
// //             }
// //         }
// //     });
// //
// //     console.log(browser);
// //     console.log(`Open Tabs: ${openTabs.join(', ')}`);
// //     console.log(`Recently Closed: ${recentlyClosedTabs.join(', ')}`);
// //     console.log(`Browser Logs: ${browserLogs.join(', ')}`);
// // }

solve({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)


solve({"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)
