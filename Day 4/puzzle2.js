const fs = require("fs")
let passport = ""
let passportsArray = []
let index = 0
let validPassports = 0

function invalid(passport) {
    console.log(`This passport is invalid - ${passport}`)
}

fs.readFile('input1.txt', 'utf8', (err, data) => {
    data = JSON.parse(data)
    data.forEach(field => {
        if (!field.includes(":")) {
            passportsArray.push(passport)
            passport = ""
        }
        else {
            passport = passport + ` ${field}`
        }
    })

    passportsArray.forEach(passport => {
        let splitPassport = passport.split(" ")
        console.log(splitPassport)
        index++
        console.log(`${index} - ${passport.split(" ")}`)
        if(!passport.includes("byr")) return invalid(passport)
        if(!passport.includes("iyr")) return invalid(passport)
        if(!passport.includes("eyr")) return invalid(passport)
        if(!passport.includes("hgt")) return invalid(passport)
        if(!passport.includes("hcl")) return invalid(passport)
        if(!passport.includes("ecl")) return invalid(passport)
        if(!passport.includes("pid")) return invalid(passport)
        console.log(`This Passport is valid - ${passport}`)
        validPassports++
    })

    console.log(validPassports)

})

