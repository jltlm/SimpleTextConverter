let input = document.getElementById("input");
let buttonConverter = document.getElementById("buttonConvert");
let buttonCopy = document.getElementById("buttonCopy");
let output = document.getElementById("output");
let spaceNumber = document.getElementById("spaceNumber");

buttonConverter.onclick = function() {
    let space = "";
    for (let i = 0; i < spaceNumber.value; i++) {
        space += " ";
    }
    let raw = input.value;
    let out = "";
    for (let i = 0; i < raw.length; i++) {
        if (i%3 == 0 && i != 0) {
            out += space;
        }
        out += raw.charAt(i);
    }
    output.textContent = out;
    buttonCopy.textContent = "Copy Text";
};

buttonCopy.onclick = function() {
    navigator.clipboard.writeText(output.textContent);
    buttonCopy.textContent = "Copied!";
}