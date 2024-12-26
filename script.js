document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    function clearDisplay() {
        display.innerText = '0';
        document.getElementById('steps-display').innerText = '';
        document.getElementById('steps-display').style.display = 'none';
        document.querySelector('.toggle-steps').innerText = 'Show Steps';
    }

    function backspace() {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === '') {
            display.innerText = '0';
        }
    }

    function appendToDisplay(value) {
        if (display.innerText === '0' && !isNaN(value)) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }

    function simplifyExpression(expression) {
        // Insert multiplication signs where appropriate (e.g., 2(2) -> 2*(2))
        expression = expression.replace(/(\d)\(/g, '$1*(').replace(/\)(\d)/g, ')*$1');

        // Simplify consecutive signs
        return expression
            .replace(/--/g, '+')
            .replace(/\+\+/g, '+')
            .replace(/\+-/g, '-')
            .replace(/-\+/g, '-')
            .replace(/×/g, '*')
            .replace(/÷/g, '/');
    }

    function calculateResult() {
        const stepsDisplay = document.getElementById('steps-display');
        try {
            let expression = display.innerText;
            expression = simplifyExpression(expression);
            const result = eval(expression);
            stepsDisplay.innerText = display.innerText + ' = ' + result;
            display.innerText = result;
        } catch (e) {
            display.innerText = 'Error';
            stepsDisplay.innerText = e.message;
        }
        stepsDisplay.style.display = 'block';
        document.querySelector('.toggle-steps').innerText = 'Hide Steps';
    }

    function toggleSteps() {
        const stepsDisplay = document.getElementById('steps-display');
        const toggleButton = document.querySelector('.toggle-steps');
        if (stepsDisplay.style.display === 'none' || stepsDisplay.style.display === '') {
            stepsDisplay.style.display = 'block';
            toggleButton.innerText = 'Hide Steps';
        } else {
            stepsDisplay.style.display = 'none';
            toggleButton.innerText = 'Show Steps';
        }
    }

    function handleKeyboardInput(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculateResult();
        } else if (key === 'Backspace') {
            backspace();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if ('/*-+'.includes(key)) {
            appendToDisplay(key);
        } else if (key === '(' || key === ')') {
            appendToDisplay(key);
        }
    }

    document.addEventListener('keydown', handleKeyboardInput);

    window.clearDisplay = clearDisplay;
    window.backspace = backspace;
    window.appendToDisplay = appendToDisplay;
    window.calculateResult = calculateResult;
    window.toggleSteps = toggleSteps;
});
