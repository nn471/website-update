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

update();
function update() {
  const selected = document.querySelectorAll(`input:checked`);

  let total = 0;

  selected.forEach((input) => {
    total += parseFloat(input.value) || 0;
  });

  const baseRadio1 = document.querySelector(`input[name="radio-1"]:checked`);
  if (baseRadio1) {
    getSecondOptionPrice(baseRadio1.value);
  }

  console.log("Checked inputs:", selected, "Total:", total);

  footerTotal.innerText = total.toFixed(2) + "€";
}
function getSecondOptionPrice(element) {
  var elementFloat = parseFloat(element);
  document.getElementById("radio-2-1").value = 0;
  document.getElementById("radio-2-2").value = elementFloat * 2 - elementFloat;
  document.getElementById("radio-2-3").value = elementFloat * 4 - elementFloat;
}
