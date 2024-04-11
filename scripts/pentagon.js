function calculatePentagon(){
    // Input id
    const perimeter = pentagonInput('perimeter');
    const apothem = pentagonInput('apothem');

    // sum of the Area
    const calculate = 0.5 * perimeter * apothem;

    // calculated value add in the Area container
    areaResult('pentagon-area', calculate)
}

function pentagonInput(inputId){
    const inputText = document.getElementById(inputId);
    const inputValue = inputText.value;
    const input = parseFloat(inputValue);
    return input;
}

function areaResult(areaId, calculate){
    const area = document.getElementById(areaId);
    area.innerText = calculate;
}