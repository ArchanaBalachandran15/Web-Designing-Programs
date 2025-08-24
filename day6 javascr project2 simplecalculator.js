function buttonClick(val) {
    document.getElementById("screen").value += val;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch (err) {
        document.getElementById("screen").value = "Error";
    }
}
