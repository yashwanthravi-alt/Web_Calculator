const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
 
function updateInput() {
    input.value = string;
}

function calculate() {
    try {
        string = String(eval(string));
    } catch {
        string = "";
        input.value = "Error";
        return;
    }

    updateInput();
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent.trim();

        if (value === "=") {
            calculate();
        } else if (value === "C") {
            string = "";
            updateInput();
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            updateInput();
        } else {
            string += value;
            updateInput();
        }
    });
});

input.addEventListener("keydown", (e) => {
    if (/^[0-9.+\-*/%]$/.test(e.key)) {
        e.preventDefault();
        string += e.key;
        updateInput();
    } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        calculate();
    } else if (e.key === "Backspace") {
        string = string.slice(0, -1);
        updateInput();
    } else if (e.key === "Escape") {
        string = "";
        updateInput();
    } else if (!["Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(e.key)) {
        e.preventDefault();
    }
});