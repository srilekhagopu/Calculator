document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    
    function updateDisplay() {
        display.textContent = currentInput || '0';
    }

    function clear() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function calculate() {
        if (previousInput !== '' && currentInput !== '' && operator !== '') {
            const prev = parseFloat(previousInput);
            const curr = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = prev + curr;
                    break;
                case '-':
                    result = prev - curr;
                    break;
                case '*':
                    result = prev * curr;
                    break;
                case '/':
                    result = prev / curr;
                    break;
                default:
                    return;
            }
            
            currentInput = result.toString();
            operator = '';
            previousInput = '';
            updateDisplay();
        }
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput !== '') {
                    previousInput = currentInput;
                    currentInput = '';
                }
                operator = value;
            } else if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clear();
            } else if (value === '.') {
                if (!currentInput.includes('.')) {
                    currentInput += '.';
                }
            } else {
                currentInput += value;
            }
            updateDisplay();
        });
    });
});
