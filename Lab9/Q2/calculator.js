// Get the result label and initialize a variable to store the current input
const resultLabel = document.getElementById('result');
let currentInput = '';

// Function to update the result label
function updateResult() {
    resultLabel.textContent = currentInput;
}

// Add event listeners for keydown
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Check if the key is a number or an operator
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        currentInput += key;
        updateResult();
    } else if (key === 'Enter') {
        // Calculate the result when Enter is pressed
        try {
            currentInput = eval(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'Backspace') {
        // Remove the last character when Backspace is pressed
        currentInput = currentInput.slice(0, -1);
        updateResult();
    } else if (key === 'c' || key === 'C') {
        // Clear the input when 'c' or 'C' is pressed
        currentInput = '';
        updateResult();
    }
    if (keyPressed === "Backspace") {
        if (resultLabel.textContent === "Error" || resultLabel.textContent === "Infinity" || resultLabel.textContent === "-Infinity") {
            resultLabel.textContent = "0";
        }
        currentInput = resultLabel.textContent;
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            resultLabel.textContent = currentInput;
        }
        if (currentInput.length == 0) {
            resultLabel.textContent = "0";
        }
    }
    else if (/[\d+\-*/]/.test(keyPressed)) {
        if (resultLabel.textContent === "0") {
            resultLabel.textContent = "";
        }
        currentInput = resultLabel.textContent;
        currentInput += keyPressed;
        resultLabel.textContent = currentInput;
    }
    else if (/[cC]/.test(keyPressed)) {
        resultLabel.textContent = "0";
    }
    else if (keyPressed === "=" || keyPressed === "Enter") {
    updateResult();
    }
});

// Add event listeners for button clicks
calTable = document.getElementById('myTable')
calTable.addEventListener('click', function (event) {
    const key = event.target.textContent;

    // Check if the key is a number or an operator
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        currentInput += key;
        updateResult();
    } else if (key === '=') {
        // Calculate the result when = is pressed
        try {
            currentInput = eval(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'C') {
        // Clear the input when C is pressed
        currentInput = '';
        updateResult();
    } else if (key === '<'){
        // Remove the last character when < is pressed
        currentInput = currentInput.slice(0, -1);
        updateResult();
    }
});

