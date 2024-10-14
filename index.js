// Declare and define three variables using a numerical value

// * If the three variables are equal, display "The three variables are the same" in the console
// * If only two of the variables are equal, display "Two of the variables are the same" in the console
// * If the variables are all different display "all variables are different" in the console


function conditions () {
    const a = 1;
    const b = 2;
    const c =2;
    let result;
    if (a === b && b === c ) {
        result = "The three variables are the same"; 
    } else if (a === b || a === c || c === b) {
        result = "Two of the variables are the same";
    } else {
        result = 'all variables are different';
    }
    return result;
}
console.log(conditions());