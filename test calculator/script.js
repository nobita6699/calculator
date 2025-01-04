function clearScreen() {
    document.getElementById("screen").value = "";
}

function deleteLast() {
    let current = document.getElementById("screen").value;
    document.getElementById("screen").value = current.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("screen").value += number;
}

function appendOperator(operator) {
    let screen = document.getElementById("screen");
    let lastChar = screen.value.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        screen.value = screen.value.slice(0, -1) + operator;
    } else {
        screen.value += operator;
    }
}

function calculate() {
    try {
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch (error) {
        document.getElementById("screen").value = "Error";
    }
}
