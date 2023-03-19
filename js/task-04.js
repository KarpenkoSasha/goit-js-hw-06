let spanValue = 0;

const value = document.getElementById('value');

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const handleClick = () => {
    spanValue -= 1;
    value.textContent = spanValue;
};

const secondCallBack = () => {
    spanValue += 1;
    value.textContent = spanValue;
};





decrementBtnEl.addEventListener('click', handleClick);
incrementBtnEl.addEventListener('click', secondCallBack);