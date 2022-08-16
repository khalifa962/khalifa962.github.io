//function to return the history value
function getHistory() {
    return document.getElementById('history-value').innerText;
}
//function to print the history value

function printHistoryValue(num) {

    document.getElementById("history-value").innerText = num;

}
//function to return the output value

function getOutput() {
    return document.getElementById('output-value').innerText;
}
//function to format the output number
function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}
//function to print the output value
function printOutput(num) {
    if (num == "") {
        document.getElementById('output-value').innerText = num;
    } else
        document.getElementById('output-value').innerText = getFormattedNumber(num);
}

//function to reverse function formatting 
function getReverseFormattedNumber(num) {
    return Number(num.replace(/,/g, ''));
}
//get operator and event listner to them
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function() {
        if (operator[i].id == "clear") {
            printHistoryValue("");
            printOutput("");
        } else if (operator[i].id == "backspace") {
            var output = getReverseFormattedNumber(getOutput()).toString();
            if (output) { //if output has a value 

                var output = output.substr(0, output.length - 1);
                printOutput(output);
            }

        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1)
                }
            }
            if (output !== "" || history !== "") {

                output = output == "" ? output : getReverseFormattedNumber(output);
                history = history + output;
                if (operator[i].id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistoryValue("");
                } else {
                    history = history + this.id;
                    printHistoryValue(history);
                    printOutput("");

                }

            }
        }
    })
};
//get numbers and event listner to them
let numbers = document.querySelectorAll('.number');
numbers.forEach(element => {
    element.addEventListener('click', function() {
        var output = getReverseFormattedNumber(getOutput());
        if (output !== NaN) {
            output = output + this.id;
            printOutput(output);
        }
    })
});