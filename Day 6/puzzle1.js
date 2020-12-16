const fs = require("fs")

let answersArray = []
let finalArray = []

fs.readFile('input.txt', 'utf8', (err, data) => {

    let count = 0

    data = data.split("\n")
    data.forEach(value => {
        value = value.replace("\r", "")
        if(value.length == 0) {
            finalArray.push(answersArray)
            answersArray = []
        } else {
            answersArray.push(value)
        }
    })


    finalArray.forEach(questions => {
        let alreadySaidYes = []
        questions.forEach(answers => {
            answers = answers.split("")
            answers.forEach(answer => {
                if(!alreadySaidYes.includes(answer)) alreadySaidYes.push(answer)
            })
        })

        count+= alreadySaidYes.length

    })

    console.log(count)

});