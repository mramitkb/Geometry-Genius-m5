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
    

    // // if/else condition for NaN value in the input.


    
    // if(isNaN(width) || isNaN(length)){
    //     const rectangleAdd = document.getElementById('rectangle-add');
    //     rectangleAdd.innerText = "Please! Provide a Number";
    // }
    // else{
    //     // Calculate
    //     const calculate = width * length;

    //     // Show the calculated Results.
    //     const rectangleAdd = document.getElementById('rectangle-add');
    //     rectangleAdd.innerText = calculate;
    // }
}