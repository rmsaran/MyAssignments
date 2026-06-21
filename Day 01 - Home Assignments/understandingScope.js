let genderType = "female"

function printGender(){
    let color = "brown"
    if (genderType.startsWith("female")) {
        var age = 30
        let color = "pink"
        console.log("Color inside block:", color)
    }
    console.log("Age outside block:", age)
}

printGender()
console.log("Gender Type globally:", genderType)

genderType = "male"
printGender()
console.log("Gender Type globally after change:", genderType)