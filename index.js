let buttons = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("p");
let restart = document.querySelector("#restart");
let div = document.querySelector(".winner")


let turnO = true;

const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];

buttons.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked")
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })

});

const resetGame = () =>{
turnO = true;
enabledbutton();
msg.classList.add("hide")

}


const disabledbutton = () =>{
    for (button of buttons){
        button.disabled = true;
        // button.innerHTML = "";
    }
}
const enabledbutton = () =>{
    for (button of buttons){
        button.disabled = false;
        button.innerHTML = "";
    }
}



const checkWinner = () => {
    for (let pattern of winnerPattern) {
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(
                    "winner", pos1val
                )
                disabledbutton();
                msg.classList.remove("hide")
                msg.innerHTML = ` Congratulation Player ${pos1val} wins!`
            }
        }

    }
};


reset.addEventListener("click", resetGame);
restart.addEventListener("click", resetGame);