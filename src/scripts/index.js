const blocks = document.querySelectorAll(".block");
const stage = document.querySelector(".stage");
const progress = document.querySelector(".progress");

let currentBlock = 0;
let lastBlock = blocks.length - 1;

blocks[currentBlock].style.display = "block";
stage.innerText = `stage ${currentBlock + 1}/${blocks.length}`;
progress.style.width = `${currentBlock + 1 * 25}%`;

switchBlock(0);
function switchBlock(step) {
  let newIndex = currentBlock + step;
  if (newIndex < 0 || newIndex > lastBlock) return;

  for (let i = 0; i < blocks.length; i++) {
    document.getElementById(`block-${i + 1}`).style.display = "none";
  }
  blocks[newIndex].style.display = "block";
  stage.innerText = `stage ${newIndex + 1}/${blocks.length}`;
  progress.style.width = `${(newIndex + 1) * 25}%`;

  currentBlock = newIndex;
  console.log(currentBlock);
}
