function calculateRhombus(){
    const rhombusD1 = rhombusInput('rhombus-d1')
    const rhombusD2 = rhombusInput('rhombus-d2')

    // sum of them
    const sum = 0.5 * rhombusD1 * rhombusD2;

    //  add in the Area box
    areaDisplay('area-value', sum) // এটা ৩য় ফাংশনের আইডি এবং সাম হলো উপরের ক্যাল্কুলেশন।
}

function rhombusInput(inputId){
    const rhombus = document.getElementById(inputId);
    const rhombusText = rhombus.value;
    const value = parseFloat(rhombusText);
    return value;
}

function areaDisplay(areaValue, sum){
    const area = document.getElementById(areaValue);
    area.innerText = sum;
}
