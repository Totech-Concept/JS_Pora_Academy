const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}