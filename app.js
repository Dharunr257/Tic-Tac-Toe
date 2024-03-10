let boxes = document.querySelectorAll('.box');
let restbtn = document.querySelector('#reset-btn');
let NewGameBtn = document.querySelector('#new-btn');
let msgCointainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true;
let winpattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
    enablebtn();
    msgCointainer.classList.add("hide")
    count = 0;
}
const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations,winner is ${winner}`;
    msgCointainer.classList.remove("hide")

}


const checkWinner = () => {
    
    for (let patten of winpattens) {
        let valpos1 = boxes[patten[0]].innerText
        let valpos2 = boxes[patten[1]].innerText
        let valpos3 = boxes[patten[2]].innerText

        if (valpos1 != "" && valpos2 != "" && valpos3 != "") {
            if (valpos1 === valpos2 && valpos2 === valpos3) {
                console.log('The winner is', valpos1);
                showWinner(valpos1);
                disablebtn();
            }
        
        }
    }
    
        
};

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            box.classList.add('o')
            box.classList.remove('x')
            turn0 = false;
            console.log("the count is ", count)
        } else {
            box.innerText = "X";
            box.classList.add('x')
            box.classList.remove('o')
            turn0 = true;
            console.log("the count is ", count)
        }
        box.disabled = true;
        count++;
        checkWinner();
        
        
    })
})


NewGameBtn.addEventListener("click", resetGame);
restbtn.addEventListener("click", resetGame);