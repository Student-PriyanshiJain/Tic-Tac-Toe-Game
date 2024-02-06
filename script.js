let resetBtn = document.querySelector("#reset-btn");
let indi = document.querySelectorAll(".box");
let turnO = true; // playerO,playerX 
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let audioTurn = new Audio("ting.mp3")

// creating 2D array :-
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

function resetGame() {
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");

}
for (let i = 0; i < indi.length; i++) {
    let boxes = document.querySelectorAll(".box")[i];
    boxes.addEventListener("click", function() {
        if (turnO) {
            // player O

            audioTurn.play();
            boxes.innerHTML = "O";
            turnO = false;
        }
        // player X
        else {
            audioTurn.play();
            boxes.innerHTML = "X";
            turnO = true;
        }
        boxes.disabled = true;

        checkWinner();
    });
}

function disableBox() {
    for (let box of indi) {
        box.disabled = true;
    }
}

function enableBox() {
    for (let box of indi) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

function showWinner(winner) {
    msg.innerHTML = "Congratulations , Winner is " + winner;
    msgContainer.classList.remove("hide");
    disableBox();
}

function checkWinner() {
    for (let pattern of winPatterns) { // for-of loop
        let pos1Val = indi[pattern[0]].innerHTML;
        let pos2Val = indi[pattern[1]].innerHTML;
        let pos3Val = indi[pattern[2]].innerHTML;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner", pos1Val);

                showWinner(pos1Val);
            }

        }

    }

}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);