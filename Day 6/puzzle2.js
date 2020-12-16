const fs = require("fs")

let answersArray = []
let finalArray = []

fs.readFile('input.txt', 'utf8', (err, data) => {

    let count = 0
    let index = 0
    let validLetters = "abcdefghijklmnopqrstuvwxyz".split("")
    data = data.split("\n")
    data.forEach(value => {
        value = value.replace("\r", "")
        if (value.length == 0) {
            if (index == 10) return
            finalArray.push(answersArray)
            answersArray = []
        } else {
            answersArray.push(value)
        }
        index++
    })

    let lettersArray = []
    let final = []

    finalArray.forEach(groupOfQuestions => {
        validLetters.forEach(letter => {
            groupOfQuestions.forEach(group => {
                let answers = group.split("") 
                answers.forEach(answer => {
                    if(answer === letter) {
                        lettersArray.push(answer)
                    }
                })
            })
        })
        console.log(lettersArray)
        final.push(lettersArray)
        lettersArray = []
    })

    answersArray = []
    final = []
    let row = 0
    let rowInArray = 0
    console.log(data)
    data.forEach(groupOfQuestions => {
        groupOfQuestions = groupOfQuestions.replace("\r", "")
        if (groupOfQuestions.length == 0) {
            if(row == 1)
            {
                // There was only 1 row so add the count.                
                count = count + answersArray[rowInArray].length
                rowInArray++
            }
            else {
                // there were multiple rows.  Count the previous row and find dups.
                str=answersArray[rowInArray]

                var obj={}
                var repeats=[];
                for(x = 0, length = str.length; x < length; x++) {
                    var l = str.charAt(x)
                    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);     
                }
                for (var key in obj) {
                    if (obj.hasOwnProperty(key) && obj[key]>1) {
                        repeats.push(new Array( obj[key]+ 1 ).join( key ));
                    }
                }
                count = count + repeats.length
            }
            row = 0
            return
        }
        if (row == 0) {
                answersArray[rowInArray] = groupOfQuestions
            row++
            return
        }
        answersArray[rowInArray] = answersArray[rowInArray] + groupOfQuestions
        row++
        
    })
    console.log('total count ' + count)

});