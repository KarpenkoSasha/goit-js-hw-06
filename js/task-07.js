const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = `${inputEl.valueAsNumber}px`;

const range = () => {
    textEl.style.fontSize = `${inputEl.valueAsNumber}px`;
};

inputEl.addEventListener("input", range);