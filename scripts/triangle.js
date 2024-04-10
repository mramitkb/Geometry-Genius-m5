/**
 * Get base and height of the triangle and calculate them by using the provided formula, then display the result.
 * step-1: connect the function ONCLICK on the triangle button
 * step-2: get the base id by getElementId from input field
 * step-3: get the base value from base input id(value is STRING now)
 * step-4: now input value normally stand in "STRING", so we will be use parseFloat() for both of integer & decimal number.
 */


function calculateTriangleArea(){
    // base
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);
    

    // height
    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeight.value;
    const height = parseFloat(triangleHeightText);

    // calculate triangle area
    const sum = 0.5 * base * height;

    // Area Span add
    const areaAdd = document.getElementById('area-add');
    areaAdd.innerText = sum;
}
