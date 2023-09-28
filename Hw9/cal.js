const resultLabel = document.getElementById('result');
let currentInput = '';

function updateResult() {
    resultLabel.textContent = currentInput;
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        currentInput += key;
        updateResult();
    } else if (key === 'Enter') {
        try {
            currentInput = eval(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'c' || key === 'C') {
        currentInput = '';
        updateResult();
    } else if (key === "Backspace") {
        if (resultLabel.textContent === "Error" || resultLabel.textContent === "Infinity" || resultLabel.textContent === "-Infinity") {
            resultLabel.textContent = "0";
        }
        currentInput = resultLabel.textContent;
        if (currentInput.length > 0) {
            currentInput = currentInput.slice(0, -1);
            resultLabel.textContent = currentInput;
        }
        if (currentInput.length == 0) {
            resultLabel.textContent = "0";
        }
    } else if (/[\d+\-*/]/.test(key)) {
        if (resultLabel.textContent === "0") {
            resultLabel.textContent = "";
        }
        currentInput = resultLabel.textContent;
        currentInput += key;
        resultLabel.textContent = currentInput;
    } else if (/[cC]/.test(key)) {
        resultLabel.textContent = "0";
    } else if (key === "=" || key === "Enter") {
        updateResult();
    }
});

calTable = document.getElementById('myTable')
calTable.addEventListener('click', function (event) {
    const key = event.target.textContent;
    const keyid = event.target.id;

    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        currentInput += key;
        updateResult();
    } else if (key === '=') {
        try {
            currentInput = eval(currentInput);
            localStorage.setItem('calculatorResult', currentInput)
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'C') {
        currentInput = '';
        updateResult();
    } else if (key === '<') {
        currentInput = currentInput.slice(0, -1);
        updateResult();
    } else if (key === 'sin'){
        try {
            currentInput = Math.sin(currentInput)
            updateResult();
        } catch (error){
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'cos') {
        try {
            currentInput = Math.cos(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (key === 'tan') {
        try {
            currentInput = Math.tan(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === 'sqrt'){
        try {
            currentInput = Math.sqrt(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === 'pi') {
        console.log('hi')
        try {
            currentInput = Math.PI;
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === 'square') {
        try {
            currentInput = Math.pow(currentInput, 2);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === '1/x') {
        try {
            currentInput = 1 / currentInput;
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === 'factorial') {
        try {
            currentInput = fatorial(currentInput);
            updateResult();
        } catch (error) {
            currentInput = 'Error';
            updateResult();
        }
    } else if (keyid === 'mc') {
        localStorage.removeItem('calculatorResult');
    } else if (keyid === 'mr') {
        currentInput = localStorage.getItem('calculatorResult');
        updateResult();
    } else if (keyid === 'm+') {
        let a = localStorage.getItem('calculatorResult', currentInput);
        a = parseFloat(a)
        currentInput = parseFloat(currentInput)
        newMemory = a + currentInput;
        localStorage.setItem('calculatorResult', newMemory);
        console.log(a)
        console.log(currentInput)
    } else if (keyid === 'm-') {
        let a = localStorage.getItem('calculatorResult', currentInput);
        a = parseFloat(a)
        currentInput = parseFloat(currentInput)
        newMemory = a - currentInput;
        localStorage.setItem('calculatorResult', newMemory)
    }
});

function fatorial(num) {
    if (num < 0) {
        return -1;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * fatorial(num - 1));
    }
}
