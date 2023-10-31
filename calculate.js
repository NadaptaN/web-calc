function addNum(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLastNum() {
    const display = document.getElementById('display');
    let rest = display.value;
    let newDisplay = rest.slice(0,-1);
    display.value = newDisplay;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Спробуй ще!';
    }
}

document.getElementById('display').addEventListener('keydown', function(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter')  {
        calculate();
    }
});
