function getInputValueById (inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

function getTextElementValueById (elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setTextElementValueById (elementId, elementValue) {
    const element = document.getElementById(elementId);
    element.innerText = elementValue;
}