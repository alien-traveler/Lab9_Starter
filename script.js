let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
let consoleLog = errorBtns[0];
let consoleError = errorBtns[1];
let consoleCount = errorBtns[2];
let consoleWarn = errorBtns[3];
let consoleAssert = errorBtns[4];
let consoleClear = errorBtns[5];
let consoleDir = errorBtns[6];
let consoleDirxml = errorBtns[7];
let consoleGroupStart = errorBtns[8];
let consoleGroupEnd = errorBtns[9];
let consoleTable = errorBtns[10];
let startTimer = errorBtns[11];
let endTimer = errorBtns[12];
let consoleTrace = errorBtns[13];
let triggerAGlobalError = errorBtns[14];

consoleLog.addEventListener("click", () => {
    console.log("Console Log Demo");
})

consoleError.addEventListener("click", () => {
    console.error("Console Error Demo");
})

consoleCount.addEventListener("click", () => {
    console.count();
})

consoleWarn.addEventListener("click", () => {
    console.warn("Console Warn Demo");
})

consoleAssert.addEventListener("click", () => {
    console.log("Console Assert Demo");
    let x = 5;
    let y = 5;
    console.assert(x + y == 11, "5 + 5 is not 11. Expression returned 'false'");
})

consoleClear.addEventListener("click", () => {
    console.clear();
})

consoleDir.addEventListener("click", () => {
    console.dir(document.querySelector("button"));
})

consoleDirxml.addEventListener("click", () => {
    console.dirxml(document.querySelector("button"));
})

consoleGroupStart.addEventListener("click", () => {
    console.group();
})

consoleGroupEnd.addEventListener("click", () => {
    console.groupEnd ();
})

consoleTable.addEventListener("click", () => {
    console.table(["Audi", "Volvo", "Ford"]);
})

startTimer.addEventListener("click", () => {
    console.time();
})

endTimer.addEventListener("click", () => {
    console.timeEnd();
})

consoleTrace.addEventListener("click", () => {
    myFunction();
})

function myFunction() {
    myAnotherFunction();
}

function myAnotherFunction() {
    myOtherFunction();
}

function myOtherFunction() {
    console.trace();
}

triggerAGlobalError.addEventListener("click", () => {
    try {
        aintGonnaWork();
    } catch (error) {
        throw new MyRefError(error);
    } finally {
        console.log("An error occurs.");
    }
})

function aintGonnaWork() {
    lalala;
}

class MyRefError extends Error {
    constructor(message) {
        super(message);
        this.name = 'My Reference Error';
        this.message = "A new error occurs! " + message;
    }
}

window.onerror = function(message){
    console.log("Caught an error: " + message + "\n");
}