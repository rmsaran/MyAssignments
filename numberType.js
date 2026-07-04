function checkNumber(num){
    if(num > 0){
        console.log(`${num} is a Positive Number`);
    } else if(num < 0){
        console.log(`${num} is a Negative Number`);
    } else {
        console.log(`${num} is Neutral`);
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);