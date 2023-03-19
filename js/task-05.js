const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", updateValue);

function updateValue(event) {
    outputEl.textContent = event.target.value;
    
    if (event.target.value === "") {
        return outputEl.textContent = "Anonymous";
    };
};