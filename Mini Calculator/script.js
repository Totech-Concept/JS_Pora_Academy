const inputBox = document.getElementById("inputBox");
const keys = document.querySelectorAll(".key");

keys.forEach(function(key){
    key.onclick = function() {
        const value = key.textContent;

        // if(value === "➕") value = "+";
        // if(value === "➖") value = "-";
        // if(value === "✖️") value = "*";
        // if(value === "➗") value = "/";

        

        if(value === "="){
            inputBox.value = eval(inputBox.value);
        } else if (value === "C/CE") {
            inputBox.value = "";
        } else if(
            value === "OFF" ||
            value === "MRC" ||
            value === "M-" ||
            value === "M+" ||
            value === "|"
        ){
            return;
        }
        else{
            inputBox.value += value;
        }
    };
});