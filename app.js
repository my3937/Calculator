document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';

    const calculate = (expression) => {
        try {
            // Use the Function constructor to evaluate the expression safely
            return new Function('return ' + expression)();
        } catch (error) {
            return 'Error';
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerHTML;

            if (buttonText === '=') {
                // Evaluate the expression
                currentInput = calculate(currentInput).toString();
                input.value = currentInput;
            } else if (buttonText === 'AC') {
                // Clear the input
                currentInput = '';
                input.value = currentInput;
            } else if (buttonText === 'DEL') {
                // Delete the last character
                currentInput = currentInput.slice(0, -1);
                input.value = currentInput;
            } else {
                // Append the clicked button's value to the input
                currentInput += buttonText;
                input.value = currentInput;
            }
        });
    });
});
