let index = 0
let password = ""

input.forEach(field => {
    if(index == 6) return
    index++
    if(!field.includes(":")) {
        console.log(password)
    }
    else {
        password = password + ` ${field}`
    }
})