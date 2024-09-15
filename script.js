// 1. Triangle
function calculateTriangle() {
   const triangleBase = getTriangleValue('triangle-base');
   const triangleHeight = getTriangleValue('triangle-height');
   const area = 0.5 * triangleBase * triangleHeight;
   setTriangleText('area-value', area);
}
// getInput
function getTriangleValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setTriangleText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}

// 2. Rectangle
function calculateRectangle() {
    const rectangleWidth = getRectangleValue('rectangle-width');
    const rectangleLength = getRectangleValue('rectangle-length');
    const area = rectangleWidth * rectangleLength;
    setRectangleText('rectangle-area', area)
}
// getInput
function getRectangleValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setRectangleText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}

// 3. Parallelogram
function calculateParallelogram() {
    const parallelogramBase = getParallelogramValue('parallelogram-base');
    const parallelogramHeight = getParallelogramValue('parallelogram-height');
    const area = parallelogramBase * parallelogramHeight;
    setParallelogramText('parallelogram-area', area);
}
// getInput
function getParallelogramValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setParallelogramText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}

// 4. Rhombus
function calculateRhombus() {
    const rhombusD1 = getRhombusValue('rhombus-d1');
    const rhombusD2 = getRhombusValue('rhombus-d2');
    const area = 0.5 * rhombusD1 * rhombusD2;
    setRhombusText('rhombus-area', area);
}
// getInput
function getRhombusValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setRhombusText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}

// 5. Pentagon
function calculatePentagon() {
    const pentagonP = getPentagonValue('pentagon-p');
    const pentagonB = getPentagonValue('pentagon-b');
    const area = 0.5 * pentagonP * pentagonB;
    setPentagonText('pentagon-area', area);
}
// getInput
function getPentagonValue(inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setPentagonText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}

// 6. Ellipse
function calculateEllipse() {
    const ellipseMajor = getEllipseValue('ellipse-major');
    const ellipseMinor = getEllipseValue('ellipse-minor');
    const area = 3.1416 * ellipseMajor * ellipseMinor;
    setEllipseText('ellipse-area', area);
}
// getInput
function getEllipseValue (inputId) {
    const inputText = document.getElementById(inputId).value;
    const inputValue = parseFloat(inputText);
    return inputValue;
}
// setInnerText
function setEllipseText(textId, area) {
    const setText = document.getElementById(textId);
    setText.innerText = area;
    return setText;
}