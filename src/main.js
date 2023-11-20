// Add your JavaScript here
function clearAll() {
    document.getElementById('display').value = '';
}

function remove() {
    let displayValue = document.getElementById('display').value;
    let result = displayValue.slice(0, -1);
    document.getElementById('display').value = result;
}

function display(val) {
    let displayValue = document.getElementById('display').value;
    // the following logic prevent the user from entering multiple operations after each other
    if (
        val === '+' ||
        val === '-' ||
        val === '*' ||
        val === '/' ||
        val === '%' ||
        val === '.'
    ) {
        if (displayValue === '') {
            return;
        } else {
            let lastChar = displayValue.slice(-1);
            if (
                lastChar === '+' ||
                lastChar === '-' ||
                lastChar === '*' ||
                lastChar === '/' ||
                (lastChar === '%' && (val === '%' || val === '.')) ||
                lastChar === '.'
            ) {
                let result = displayValue.slice(0, -1);
                result += val;
                document.getElementById('display').value = result;
                return;
            }
        }
    }
    document.getElementById('display').value += val;
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    if (displayValue === '') {
        return; // if we have nothing to calculate we exit this method 
    }
    displayValue = displayValue.replaceAll('%', '*0.01');
    let result = eval(displayValue);
    document.getElementById('display').value = result;
}
