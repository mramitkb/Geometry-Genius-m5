
// একই কাজ বারবার করার ক্ষেত্রে এই ফাংশনের অনুযায়ী একবার করলেই সমাধান হয়।  

function calculateParallelogram(){
    // এখানে ২য় ফাংশনের নামটি বসিয়ে প্যারামিটার/আইডি হিসেবে ইনপুট ভ্যালু নেয়ার মেইন আইডি বসাতে হবে।
    const parallelogramBase = getValueById('p-base');
    const parallelogramHeight = getValueById('p-height');

    const area = parallelogramBase * parallelogramHeight;
    // ৩য় ফাংশনের এরিয়াতে টোটাল ভ্যালু শো করতে, সেই ফাংশনের নামকে কল করে (এরিয়ার আইডি নেম, ভ্যালু(দুইটি ইনপুটের হিসাব)) দিতে হবে।
    setInnerTextById('p-area', area);
}

// এই ফাংশনে ভ্যালুর আইডি একটি প্যারামিটার হিসেবে দেয়া হয়েছে।
function getValueById(inputId){
    const parallelogram = document.getElementById(inputId);
    const parallelogramValue = parallelogram.value;
    const parallelogramNumber = parseFloat(parallelogramValue);
    // এখানে ভ্যালু রিটার্ন করে দিতে হবে।
    return parallelogramNumber;
}

// ফাংশনের একটি নাম দিয়ে ভেতরে একটি এরিয়া আইডি নেম(যেটা এই ফাংশনেই কাজ চলমান) এবং দুইটি ইনপুটের হিসাবের প্যারামিটারের নাম দিতে হবে। 
function setInnerTextById(areaId, area){
    const areaName = document.getElementById('p-area');
    areaName.innerText = area;
}