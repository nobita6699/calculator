// Reference to the display input field
const display = document.getElementById('display');

/**
 * Appends a value (number or operator) to the display.
 * @param {string} value - The value to append.
 */
function appendValue(value) {
    display.value += value;
}

/**
 * Clears the calculator display.
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Evaluates the expression in the display and updates it with the result.
 * If the expression is invalid, displays an error message.
 */
function calculate() {
    try {
        // Use eval to calculate the result (caution: eval can execute arbitrary code)
        display.value = eval(display.value);
    } catch {
        // Show 'Error' if evaluation fails
        display.value = 'Error';
    }
}
