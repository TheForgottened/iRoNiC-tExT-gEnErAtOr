window.onload = function() {
    initListeners();
};

var inDefault = "Type original text here";
var outDefault = "Converted text here";

var inputID = document.getElementById("input_text");
var outputID = document.getElementById("output_text");
var capID = document.getElementById("capitalization");
var resetID = document.getElementById("reset_button");

function clearText(element) {
    element.value = "";
}

function transformText() {
    let i, j;

    let strOrig = inputID.value;
    let arr = Array.from(strOrig);
    let arrLower = Array.from(strOrig.toLowerCase());
    let arrUpper = Array.from(strOrig.toUpperCase());


    if (capID.checked) {
        for (i = 0, j = 0; i < arr.length; i++) {
            if (arr[i] != " " && arr[i] != "\n") {
                if (j % 2 == 0) {
                    arr[i] = arrUpper[i];
                } else {
                    if (arr[i] != " " && arr[i] != "\n") {
                        arr[i] = arrLower[i];
                    }
                }

                j++;
            }
        }
    } else {
        for (i = 0, j = 0; i < arr.length; i++) {
            if (arr[i] != " " && arr[i] != "\n") {
                if (j % 2 == 0) {
                    arr[i] = arrLower[i];
                } else {
                    if (arr[i] != " " && arr[i] != "\n") {
                        arr[i] = arrUpper[i];
                    }
                }

                j++;
            }
        }
    }

    outputID.value = arr.join("");
}

function updateTextArea() {
    if (this.value === "") {
        inputID.value = inDefault;
        outputID.value = outDefault;

        return;
    }

    if (this.value === inDefault) {
        inputID.value = "";

        return;
    }
}

function resetTextAreas() {
    inputID.value = inDefault;
    outputID.value = outDefault;
}

function initListeners() {
    // update text in textarea in case it's empty
    inputID.addEventListener("focus", updateTextArea);
    inputID.addEventListener("blur", updateTextArea);

    // converts text in textarea live
    inputID.addEventListener("keyup", transformText);

    // resets text area to default value
    resetID.addEventListener("click", resetTextAreas);

    // check if the ironic value method has been changed
    capID.addEventListener("click", transformText);
}