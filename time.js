let hrsIn = document.getElementById("hoursInput");
let minIn = document.getElementById("minutesInput");
let conBtn = document.getElementById("convertBtn");
let hrlabel = document.getElementById("hoursInput");
hrlabel.id = "hoursInput";
let minlabel = document.getElementById("minutesInput");
let changeText = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
errorMsg.style.color = "#ffffff";

function convertTo(hrsVal, minVal) {

    let change = (hrsVal * 3600) + (minVal * 60);
    changeText.textContent = change;
    changeText.style.color = "#f7f5fa";
}

function errorText() {
    let hrsVal = hrsIn.value;
    let minVal = minIn.value;
    if (hrsVal === "" || isNaN(hrsVal)) {
        errorMsg.textContent = "please enter valid hour input";
        errorMsg.style.color = "#ffffff";
        changeText.classList.add("d-none");
    } else if (minVal === "" || isNaN(minVal)) {
        errorMsg.textContent = "please enter valid minutes";
        errorMsg.style.color = "#ffffff";
        changeText.classList.add("d-none")
    } else {
        errorMsg.textContent = "";
        changeText.classList.remove("d-none");
        convertTo(hrsVal, minVal);
    }
}

conBtn.addEventListener("click", errorText);
