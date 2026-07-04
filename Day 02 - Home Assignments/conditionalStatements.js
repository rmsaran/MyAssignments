function launchBrowser(browserName){

    if(browserName === "Chrome") {
        console.log("Launching Chrome browser");
    }else if(browserName === "Edge") {
        console.log("Launching Edge browser");
    }else{
        console.log("Invalid Input");
    }
}

function runTests(testType){
    switch(testType){
        case "Smoke":
            console.log("Running Smoke Tests");
            break;
        case "Sanity":
            console.log("Running Sanity Tests");
            break; 
        case "Regression":
            console.log("Running Regression Tests");
            break;
        default:
            console.log("Running Smoke Tests");
            break;
    }
}

launchBrowser("Chrome");
runTests("Sanity");
