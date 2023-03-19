const inputColor = document.querySelector('input#validation-input');

const blur = () => {

    const validLength = Number(inputColor.dataset.length);
if (inputColor.value.length !== validLength) {
    inputColor.classList.add("invalid")
} else {
    inputColor.classList.add("valid")
    }
    
};

const focus = () => {
    inputColor.classList.remove("invalid", "valid")
};

inputColor.addEventListener('blur', blur);
inputColor.addEventListener('focus', focus);