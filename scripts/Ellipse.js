function calculateEllipse(){
    const major = ellipseInput('major');
    const minor = ellipseInput('minor');

    const calculate = 3.1416 * major * minor;

    areaInput('ellipse-area', calculate);
}

function ellipseInput(inputId){
    const ellipseInputText = document.getElementById(inputId);
    const ellipseInputValue = ellipseInputText.value;
    const ellipseValue = parseFloat(ellipseInputValue);
    return ellipseValue;
}

function areaInput(areaId, calculate){
    const area = document.getElementById(areaId);
    area.innerText = calculate;
}