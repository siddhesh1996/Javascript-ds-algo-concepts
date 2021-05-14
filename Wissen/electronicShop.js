function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
    */
    let maxSpent = -1;
    let budget = b;
    let keyboardsCompliment = keyboards.map(keyboard => {
        return budget - keyboard;
    });

    for (let i = 0; i < keyboardsCompliment.length; i++) {
        let keyboardComp = keyboardsCompliment[i];
        let drivesGroup = getDrivesGroup(keyboardComp, drives);
        if (drivesGroup.length) {
            let maxVal = Math.max(...drivesGroup);
            let diffVal = keyboardComp - maxVal;
            let totalSpent = budget - diffVal;
            if (totalSpent > maxSpent) {
                maxSpent = totalSpent;
            }
        }
    }

    return maxSpent;
}

function getDrivesGroup(keyboard, drives) {
    let group = [];
    for (let i = 0; i < drives.length; i++) {
        let drive = drives[i];
        if (drive <= keyboard) {
            group.push(drive);
        }
    }

    return group;
}

let keyboards = [40, 50, 60];
let drives = [5, 8, 12];
let b = 60;

// let keyboards = [4];
// let drives = [5];
// let b = 5;

// let keyboards = [3, 1];
// let drives = [5, 2, 8];
// let b = 10;
getMoneySpent(keyboards, drives, b);