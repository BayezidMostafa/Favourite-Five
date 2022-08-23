/* Common Function For A Common Condition */
function countPlayer(elementId) {
    const newPlayerList = document.getElementById(elementId);
    const list = newPlayerList.children;
    if (list.length <= 4) {
        return true;
    }
    else {
        return false;
    }
}
/* Common Function For Input Value */
function getInputFieldValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValueString = inputElement.value;
    const inputElementValue = parseInt(inputElementValueString);
    return inputElementValue;
}