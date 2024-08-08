let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector(".resetbtn");

let turno = true;

const showWinner = (winner) => {
  if (winner == "O") {
    msg.innerText = `congratulations , Winner is Player 1 `;
  } else {
    msg.innerText = `congratulations , Winner is Player 2`;
  }
  msgcontainer.classList.remove("hide");
  disabledboxes();
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disabledboxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
  }
};

const resetGame = () => {
  turno = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
  for (box of boxes) {
    box.innerText = "";
  }
};

newbtn.addEventListener("click", resetGame);

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log("Winner", p1);
        showWinner(p1);
        newbtn.classList.remove("hide");
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerHTML = "<b>O</x>";
      turno = false;
    } else {
      box.innerHTML = "<b>X</x>";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
