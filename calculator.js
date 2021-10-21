// Assignment 3 CS 5820
// Makalee Beelek
// Calculator Javascript File

// calculator function
// A function that repeatedly prompts
// a user for 2 numbers (x and y) and
// for an arithmetic operator
// (+, -, %, /, *) and loops until the
// user wants to discontinue the loop.
// calls calculate to get the result of the
// computation and stores it in an array until
// the loop is over. Table made from array is shown
// after calculation. After exiting the loop, the
// program constructs another table in which shows
// a min, max, average, and total of the results not
// including any results that have an error.
function calculator(){
    // the while loop condition
    let exit = true;
    // the results of the calculator
    let results = [];
    while(exit){
        // get the value of x
        let x = prompt("Value of x:", "");
        // get the operator
        let op = prompt("Operator:", "");
        // get the value of y
        let y = prompt("Value of y:", "");
        // get the result and store it in results
        results.push(calculate(x, y, op));
        console.log(results[0]);
        // false if user does not want to continue
        exit = confirm("Continue?");
    }
    // show the results
    displayTable(results);
    displayResultTable(results);
}

// calculate function
// inputs:
//      -x: the lefthand value of the computation
//      -y: the righthand value of the computation
//      -op: the operator of the computation
// computes the desired computation (only includes
// addition, subtraction, modulus, division and
// multiplication). returns x, op, y, and the result
// in an array.
function calculate(x, y, op){
    // check if x and y are numbers, if not, return arithmetic error
    if (!isNaN(parseInt(x)) && !isNaN(parseInt(y))){
        // check if op is a valid operation, and return the result
        // otherwise return computation error.
        if (op === "+"){
            let calc = parseInt(x) + parseInt(y);
            return([x, op, y, calc])
        }
        else if(op === "-"){
            let calc = parseInt(x) - parseInt(y);
            return([x, op, y, calc])
        }
        else if (op === "%"){
            let calc = parseInt(x) % parseInt(y);
            return([x, op, y, calc])
        }
        else if (op === "/"){
            let calc = parseInt(x) / parseInt(y);
            return([x, op, y, calc])
        }
        else if (op === "*"){
            let calc = parseInt(x) * parseInt(y);
            return([x, op, y, calc])
        }
        else {
            return([x, op, y, "Wrong Input Number"]);
        }
    }
    else {
        return([x, op, y, "Arithmetic Error"]);
    }
}

// displayTable function
// inputs:
//      - array: the 2D array that represents the calculations
// displays the array as a table on the document using
// html. The table has the headers of x, op, y, and result
function displayTable(array){
    document.write("<table>");
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
    for (let i = 0; i < array.length; i++) {
        document.write("<tr>");
        document.write("<td>" + array[i][0] + "</td>");
        document.write("<td class='operator'>" + array[i][1] + "</td>");
        document.write("<td>" + array[i][2] + "</td>");
        document.write("<td>" + array[i][3] + "</td>");
        document.write("</tr>");
    }

    document.write("</table>");
}
// displayTable function
// inputs:
//      - array: the 2D array that represents the calculations
// displays the minimum, maximum, average, and total of
// all of the numbers in the given array
function displayResultTable(array){
    // the starting numbers for the minimum, maximum, count, and total
    let min = Infinity;
    let max = 0;
    let total = 0;
    let count = 0;
    // get the minimum, maximum, average, and total
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++){
            let num = parseInt(array[i][j]);
            if(!isNaN(num)){
                count++;
                if (min > num){
                    min = num;
                }
                if (max < num){
                    max = num;
                }
                total += num;
            }
        }
    }
    let average = total / count;
    document.write("<br>");
    document.write("<table>");
    document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + average + "</td>");
    document.write("<td>" + total + "</td></tr>");
    document.write("</table>");

}

//run the calculator function
calculator();
