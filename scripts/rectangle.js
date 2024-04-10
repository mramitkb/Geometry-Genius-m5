function calculateRectangleArea(){
    // Width
    const rectangleWidth = document.getElementById('width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);

    // Length
    const rectangleLength = document.getElementById('length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);

    // Calculate
    const calculate = width * length;

    // Show the Calculated Results
    const rectangleAdd = document.getElementById('rectangle-add');
    rectangleAdd.innerText = calculate;
}