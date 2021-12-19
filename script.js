let player1Win = false, player2Win = false, countForTie=0, checkAI = false;
const gameBoard = (()=>{
    let arr = ['', '', '', '', '', '', '', '', ''];
    const div = document.querySelector('.gameBoard');
    const createBoard = () => {
        let id = 0;
        for(let i=0;i<3;i++){
            const row = document.createElement('div');
            row.classList.add('row');
            div.appendChild(row);
            for(let j=0;j<3;j++){
                const columns = document.createElement('div');
                columns.classList.add('columns');
                columns.dataset.id = id;
                row.appendChild(columns);
                id++;
            }
        }
    }
    const fillBoard = () => {
        let turn = 1;
        columns.forEach(element => {
            const startBtn = document.querySelector('.start');
            startBtn.addEventListener('click', ()=>{
                turn = 1;
                element.textContent = "";
                arr[element.dataset.id] = "";
                if(checkAI==false){
                    element.addEventListener('click', assignMarkers);
                }
                else{
                    element.removeEventListener('click', assignMarkers);
                }
            })
            columns.forEach(element => {
                element.addEventListener('click', ()=>{
                    if(player1Win || player2Win){
                        columns.forEach(element => {
                            element.removeEventListener('click', assignMarkers);
                        });
                    }
                })
            });
            function assignMarkers(){
                if(element.textContent!=""){
                    element.removeEventListener('click', assignMarkers);
                }
                else{
                    countForTie++;
                    if(turn==1){
                        element.textContent = player1.marker;
                        arr[element.dataset.id] = player1.marker;
                        turn = 2;
                    }
                    else if(turn==2){
                        element.textContent = player2.marker;
                        arr[element.dataset.id] = player2.marker;
                        turn = 1;
                    } 
                }
            }
        });
    }
    return {createBoard, fillBoard, arr};
})();

const gameController = (()=>{
    const checkForWin = () => {
        columns.forEach(element => {
            const startBtn = document.querySelector('.start');
            startBtn.addEventListener('click', ()=>{
                element.removeEventListener('click', check)
                element.addEventListener('click', check);
            })
            columns.forEach(element => {
                element.addEventListener('click', ()=>{
                    if(player1Win || player2Win){
                        columns.forEach(element => {
                            element.removeEventListener('click', check);
                        });
                    }
                })
            });
            function check(){
                let arr = gameBoard.arr;
                let m = [[arr[0],arr[3], arr[6]], [arr[1], arr[4], arr[7]], [arr[2], arr[5], arr[8]]];
                let count = 0, count1=0, count2=0, count3=0, count0=0, count12=0, count23 = 0, count34 = 0;
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(i==j){
                            if(m[i][j]=="X"){
                                count++;
                            }
                            if(m[i][j]=="O"){
                                count0++;
                            }
                            if(count==3){
                                player1Win = true;
                            }
                            if(count0==3){
                                player2Win = true;
                            }
                        }
                    }
                }
                for(let i=0;i<3;i++){
                    for(let j=0;j<3;j++){
                        if(i+j==2){
                            if(m[i][j]=="X"){
                                count1++;
                            }
                            if(m[i][j]=="O"){
                                count12++;
                            }
                            if(count1==3){
                                player1Win = true;
                            }
                            if(count12==3){
                                player2Win = true;
                            }
                        }
                    }
                }
                for(let i=0;i<3;i++){
                    count2=0;
                    count23=0;
                    for(let j=0;j<3;j++){
                        if(m[i][j]=="X"){
                            count2++;
                        }
                        if(m[i][j]=="O"){
                            count23++;
                        }
                        if(count2==3){
                            player1Win = true;
                        }
                        if(count23==3){
                            player2Win = true;
                        }
                    }
                }
                for(let i=0;i<3;i++){
                    count3=0;
                    count34=0;
                    for(let j=0;j<3;j++){
                        if(m[j][i]=="X"){
                            count3++;
                        }
                        if(m[j][i]=="O"){
                            count34++;
                        }
                        if(count3==3){
                            player1Win = true;
                        }
                        if(count34==3){
                            player2Win = true;
                        }
                    }
                }
                let text = document.querySelector(".text");
                let playAgain = document.querySelector(".start");
                let buttons = document.querySelector('.buttons');
                if(player1Win){
                    text.textContent = "Congratz, " + player1.name + " has won!";
                    playAgain.textContent = "Play Again";
                    buttons.style.display = 'block';
                }
                else if(player2Win){
                    text.textContent = "Congratz, " + player2.name + " has won!";
                    playAgain.textContent = "Play Again";
                    buttons.style.display = 'block';
                }
                else if(countForTie==9 && !player1Win && !player2Win){
                    text.textContent = "It's a tie!";
                    playAgain.textContent = "Play Again";
                    buttons.style.display = 'block';
                    columns.forEach(element => {
                        element.removeEventListener('click', check);
                    });
                }
            }
            element.addEventListener('click', check);
        });
    }
    const startGame = () => {
        const startBtn = document.querySelector('.start');
        let btn = document.querySelector(".ai");
        let text = document.querySelector('.text');
        let buttons = document.querySelector('.buttons');
        startBtn.addEventListener('click', ()=>{
            if(btn.textContent=='AI'){
                text.textContent = "Player1 VS Player2";
            }
            if(btn.textContent=='2 Players'){
                text.textContent = "Player VS AI";
            }
            startBtn.textContent = "Start Game";
            countForTie = 0;
            player1Win = false;
            player2Win = false;
            buttons.style.display = 'none';
        })
    }
    return {checkForWin, startGame};
})()

const ai = (()=>{
    const aiPlay = () =>{
        const btn = document.querySelector('.ai');
        const text = document.querySelector('.text');
        let arr = gameBoard.arr;
        let checkArray = [];
        const startBtn = document.querySelector('.start');
        columns.forEach(element => {
            element.addEventListener('click', ()=>{
                if(player1Win || player2Win){
                    columns.forEach(element => {
                        element.removeEventListener('click', assignMarkers2);
                    });
                }
            })
            startBtn.addEventListener('click', ()=>{
                checkArray = [];
                if(checkAI==true){
                    element.addEventListener('click', assignMarkers2);
                }
                else{
                    element.removeEventListener('click', assignMarkers2);
                }
            })
            function assignMarkers2(e){
                let able = false;
                let br=0, br2=0;
                checkArray[checkArray.length] = Number(e.target.dataset.id);
                randomNum = random();
                if(element.textContent!=""){
                    element.removeEventListener('click', assignMarkers2);
                }
                else{
                    countForTie++;
                    element.textContent = "X";
                    arr[element.dataset.id] = "X";
                    let m = [[arr[0],arr[3], arr[6]], [arr[1], arr[4], arr[7]], [arr[2], arr[5], arr[8]]];
                    let count = 0, count1=0, count2=0, count3=0;
                    for(let k=0;k<columns.length;k++){
                        if(columns[k].textContent=="X" || columns[k].textContent=="O"){
                            br2++;
                        }
                    }
                    if(player1Win!=true || player2Win==true){
                        while(able!=true && br2<9){
                            br = 0;
                            for(let j=0;j<checkArray.length;j++){
                                if(randomNum!=checkArray[j]){
                                    br++;
                                }
                            }
                            if(br==checkArray.length){
                                able = true;
                            }
                            else{
                                randomNum = random();
                            }
                        }
                        for(let i=0;i<3;i++){
                            for(let j=0;j<3;j++){
                                if(i==j){
                                    if(m[i][j]=="X"){
                                        count++;
                                    }
                                    if(count==3){
                                        player1Win = true;
                                    }
                                }
                            }
                        }
                        for(let i=0;i<3;i++){
                            for(let j=0;j<3;j++){
                                if(i+j==2){
                                    if(m[i][j]=="X"){
                                        count1++;
                                    }
                                    if(count1==3){
                                        player1Win = true;
                                    }
                                }
                            }
                        }
                        for(let i=0;i<3;i++){
                            count2=0;
                            for(let j=0;j<3;j++){
                                if(m[i][j]=="X"){
                                    count2++;
                                }
                                if(count2==3){
                                    player1Win = true;
                                }
                            }
                        }
                        for(let i=0;i<3;i++){
                            count3=0;
                            for(let j=0;j<3;j++){
                                if(m[j][i]=="X"){
                                    count3++;
                                }
                                if(count3==3){
                                    player1Win = true;
                                }
                            }
                        }
                        if(br2<9 && player1Win==false){
                            checkArray[checkArray.length] = randomNum;
                            columns[randomNum].textContent = 'O';
                            arr[randomNum] = 'O';
                            countForTie++;
                        }
                    }
                }
            }
        });
        function random(){
            return Math.floor(Math.random()*9);
        }
        btn.addEventListener('click', ()=>{
            if(btn.textContent=='AI'){
                checkAI=true;
                text.textContent = 'Player VS AI';
                btn.textContent = '2 Players';
            }
            else{
                checkAI=false;
                text.textContent = 'Player1 VS Player2';
                btn.textContent = 'AI';
            }
        })
    }
    return {aiPlay};
})() 


const Player = (name, marker) => {
    this.name = name;
    this.marker = marker;
    return {name, marker};
}

const player1 = Player("Player1", "X");
const player2 = Player("Player2", "O");

gameBoard.createBoard();
let columns = document.querySelectorAll('.columns');
columns = Array.prototype.slice.call(columns);
gameBoard.fillBoard();
ai.aiPlay();
gameController.startGame();
gameController.checkForWin();
