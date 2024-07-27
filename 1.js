const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const specialChars = ["*", "/", "-", "+", "="];
let output = "";

const calculate = (value) => {
    if (value === "=" && output !== "") {
        try {
            output = eval(output.replace("%", "/100"));
        } catch (error) {
            output = "Error";
        }
    } else if (value === "AC") {
        output = "";
    } else {
        if (output === "" && specialChars.includes(value)) return;
        output += value;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.getAttribute("value");
        calculate(value);
    });
});
