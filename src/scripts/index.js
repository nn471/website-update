const blocks = document.querySelectorAll(".block");

blocks[0].style.display = "block";

let currentBlock = 0;
let lastBlock = blocks.length - 1;

function switchBlock(step) {
  let newIndex = currentBlock + step;
  if (newIndex < 0 || newIndex > lastBlock) return;

  for (let i = 0; i < blocks.length; i++) {
    document.getElementById(`block-${i + 1}`).style.display = "none";
  }
  blocks[newIndex].style.display = "block";
  currentBlock = newIndex;
  console.log(currentBlock);
}
