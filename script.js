let display = document.getElementById("display");
let historyDisplay = document.getElementById("history");
let darkMode = false;

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
    historyDisplay.innerHTML = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        historyDisplay.innerHTML = display.value + " = " + result;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    let num = parseFloat(display.value);
    if (!isNaN(num)) {
        let result = Math.sqrt(num);
        historyDisplay.innerHTML = `√${num} = ${result}`;
        display.value = result;
    }
}

function calculatePower() {
    let base = parseFloat(display.value);
    if (!isNaN(base)) {
        let exponent = prompt("Enter exponent:");
        if (!isNaN(exponent)) {
            let result = Math.pow(base, exponent);
            historyDisplay.innerHTML = `${base}^${exponent} = ${result}`;
            display.value = result;
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    darkMode = !darkMode;
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendCharacter(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
