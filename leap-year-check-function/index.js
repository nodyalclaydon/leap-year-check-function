function isLeapYear(date) {
    if (date % 4 === 0) {
        if (date % 100 === 0) {
            if (date % 400 === 0) {
                console.log("is a century leap year")
            } else { console.log("is not a leap year because it's a century year") }
        } else {
            console.log("is a leap year")
        }
    } else { console.log("is not a leap year") }
}

isLeapYear(2020)
isLeapYear(2018)
isLeapYear(1600)
isLeapYear(1700)