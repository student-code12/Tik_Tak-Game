let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer  = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
//main game logic

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

//reset karne ka logic

const resetGame = () => {
    turn0 = true;
    enableBoxes ();
    msgContainer.classList.add("hide");
}
//ad a event to this
//agar humare 0 player ki turn hogi to vo print hoga phir flase mins
//x ki bari aa jayegi

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        // console.log("this is clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        } else{
            box.innerText = "X";
            turn0 = true;
        }
        //box ko diable karne ke liye

        box.disabled = true;
        
        checkWinner();
    })
});

// button ko disable karne ke liye

const disaleBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }

}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disaleBoxes();

}

const checkWinner = ()=>{
    for (let patten of winPatterns){
        // console.log(patten[0],patten[1], patten[2] );
        // console.log(boxes[patten[0]].innerText,boxes[patten[1]].innerHTML, boxes[patten[2]].innerText );
        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3Val = boxes[patten[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);
                //this is a way t create a function
                showWinner(pos1Val);
            }
        }
    }
}

// reset kab tigred higa

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


