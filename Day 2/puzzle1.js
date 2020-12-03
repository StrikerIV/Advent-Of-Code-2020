const fs = require("fs")

function validPassword(x, min, max) {
    return x >= min && x <= max;
}

fs.readFile('passwords.json', 'utf8', (err, data) => {

    const passwords = JSON.parse(data);
    let validPasswords = 0

    passwords.forEach(password => {
        let letterRepeatTimes = password.occurTimes.split("-")
        let splitPassword = password.password.split("")
        let occuringTimes = 0
        splitPassword.forEach(letter => {
            if(letter === password.letter) {
                occuringTimes++
            }
        })
        if(validPassword(occuringTimes, letterRepeatTimes[0], letterRepeatTimes[1])) validPasswords++
    });

    console.log(validPasswords)

});