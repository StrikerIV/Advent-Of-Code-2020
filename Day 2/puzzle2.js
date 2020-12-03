const fs = require("fs")

fs.readFile('passwords.json', 'utf8', (err, data) => {

    const passwords = JSON.parse(data);
    let valid = 0

    passwords.forEach(password => {
        let letterRepeatTimes = password.occurTimes.split("-")
        let letterCase = password.letter
        let splitPassword = password.password.split("")
        let lettersToCheck = []
        letterRepeatTimes.forEach(index => {
            index-- 
            lettersToCheck.push(splitPassword[index])
        })
        if(lettersToCheck[0] === lettersToCheck[1]) return
        if(lettersToCheck[0] === letterCase) valid++
        if(lettersToCheck[1] === letterCase) valid++
    });

    console.log(valid)

});