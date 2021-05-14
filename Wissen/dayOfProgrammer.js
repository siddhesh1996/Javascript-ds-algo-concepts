function dayOfProgrammer(year) {
    // Write your code here
    let isLeap = false;
    let date = '';
    let isJulian = false;
    if(year >= 1700 && year <= 1917) {
        isJulian = true;
    }

    if(isJulian && (0 == year % 4) || (0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        isLeap = true;
    }

    if(isLeap) {
        date += `12.09.${year}`;
    } else {
        if(!isJulian && year == 1918) {
            date += `26.09.${year}`
        } else {
            date += `13.09.${year}`;
        }
    }

    return date;
}


console.log(dayOfProgrammer(1918))

