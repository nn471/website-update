const blocks = document.querySelectorAll(".block");
const stage = document.querySelector(".stage");
const progress = document.querySelector(".progress");

const footerTotal = document.querySelector(".footer-total strong");

let currentBlock = 0;
let lastBlock = blocks.length - 1;

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
}
let newArray = [0, 0, 0, 0];
update();
function update() {
  const selected = document.querySelectorAll(`input[type=radio]:checked`);
  getSecondOptionPrice(selected[0].value);

  for (let i = 0; i < selected.length; i++) {
    newArray[i] = parseFloat(selected[i].value);
  }
  console.log(newArray);
  footerTotal.innerText =
    (newArray[0] + newArray[1] + newArray[2] + newArray[3]).toFixed(2) + "€";
}
function getSecondOptionPrice(element) {
  var elementFloat = parseFloat(element);
  document.getElementById("radio-2-1").value = 0;
  document.getElementById("radio-2-2").value = elementFloat * 2 - elementFloat;
  document.getElementById("radio-2-3").value = elementFloat * 4 - elementFloat;
}
