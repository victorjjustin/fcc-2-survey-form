function test() {
    let dropDownList = document.getElementById("dropdown");
    let dropDownValue = dropDownList.options[dropDownList.selectedIndex].value;

    let radioButtonValue = document.querySelector("input[type=radio]:checked");
    
    if (dropDownValue == "extreme-enthusiasm" && radioButtonValue.value == "hourly") {
        alert("Oh dear! You might need help actually.");
    }

    if (dropDownValue == "zero-enthusiasm" && radioButtonValue.value == "yearly") {
        alert("It's a sad day for iced treat enthusiasts everywhere.");
    }
}