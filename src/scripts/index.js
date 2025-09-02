const blocks = document.querySelectorAll(".block");
const stage = document.querySelector(".stage");
const progress = document.querySelector(".progress");

const footerTotal = document.querySelector(".footer-total strong");

let currentBlock = 0;
let lastBlock = blocks.length - 1;

let arrayPrice = [0, 0, 0, 0];
let total = 0;

blocks[currentBlock].style.display = "flex";
stage.innerText = `stage ${currentBlock + 1}/${blocks.length}`;
progress.style.width = `${currentBlock + 1 * 25}%`;

switchBlock(0);
function switchBlock(step) {
  let newIndex = currentBlock + step;
  if (newIndex < 0 || newIndex > lastBlock) return;

  for (let i = 0; i < blocks.length; i++) {
    document.getElementById(`block-${i + 1}`).style.display = "none";
  }
  blocks[newIndex].style.display = "flex";
  stage.innerText = `stage ${newIndex + 1}/${blocks.length}`;
  progress.style.width = `${(newIndex + 1) * 25}%`;

  currentBlock = newIndex;
  getSecondOptionPrice(currentBlock);
}

function showTotal(value) {
  footerTotal.innerText = `${(total + parseFloat(value)).toFixed(2)}€`;
}
function increaseTotal() {
  var selected = document.querySelector(
    `input[name=radio-${currentBlock + 1}]:checked`
  ).value;
  arrayPrice[currentBlock] = parseFloat(selected) || 0;
  total += arrayPrice[currentBlock];
  console.log(arrayPrice);
}
function reduceTotal() {
  if (currentBlock - 1 < 0) return;
  total -= arrayPrice[currentBlock - 1];
  arrayPrice[currentBlock - 1] = 0;
  footerTotal.innerText = `${total.toFixed(2)}€`;
  console.log(arrayPrice);
}
function getSecondOptionPrice(currentBlock) {
  if (arrayPrice[0] != 0 && currentBlock == 1) {
    document.getElementById("radio-2-1").value = arrayPrice[0];
    document.getElementById("radio-2-2").value = arrayPrice[0] * 2;
    document.getElementById("radio-2-3").value = arrayPrice[0] * 4;
  }
}
