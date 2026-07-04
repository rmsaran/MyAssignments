function grade(mark){
    switch(mark){
        case 90:
            return "A";
        case 80:
            return "B";
        case 70:
            return "C";
        case 60:
            return "D";
        case 50:
            return "E";
        default:
            return "Need more Effort";
    }
}

let score = 80;
let result = grade(score);
console.log(`Your grade is: ${result}`);    