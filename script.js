body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.479);
}

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}

.header{
    display: flex;
    background-color: hsla(0, 0%, 0%, 0.781);
    height: 160px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid white;
}

.title{
    font-size: 95px;
    text-align: center;
    margin: 0;
    color:rgb(235, 235, 235);
    font-family: 'JetBrains Mono', monospace;
    word-spacing:0ex;
}

.gameBoard{
    display: flex;
}

.columns{
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 150px;
    height: 150px;
    border: 1px solid white;
    font-size: 130px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: white;
    background-color: hsla(0, 0%, 0%, 0.781);
    user-select: none;
   -webkit-user-select: none;
   -khtml-user-select: none;
   -moz-user-select: none; 
   -ms-user-select: none;
}

.columns[data-id="0"], .columns[data-id="1"], .columns[data-id="2"]{
    border-left: 6px solid white;
}

.columns[data-id="0"], .columns[data-id="3"], .columns[data-id="6"]{
    border-top: 6px solid white;
}

.columns[data-id="6"], .columns[data-id="7"], .columns[data-id="8"]{
    border-right: 6px solid white;
}

.columns[data-id="2"], .columns[data-id="5"], .columns[data-id="8"]{
    border-bottom: 6px solid white;
}

.columns:hover{
    background-color: rgba(0, 0, 0, 0.329);
    cursor: pointer;
}

.players{
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 42px;
    border: 2px solid white;
    margin-bottom: 30px;
    padding: 10px;
    color: white;
    background-color: hsla(0, 0%, 0%, 0.781);
    font-family: 'JetBrains Mono', monospace;
}

.start, .ai{
    margin-top: 20px;
    height: 75px;
    background-color: hsla(0, 0%, 0%, 0.781);
    border: 2px solid white;
    font-family: 'JetBrains Mono', monospace;
    color: white;
    font-size: 28px;
}

.ai{
    min-width: 100px;
    margin-left: 40px;
}

.start:hover, .ai:hover{
    cursor: pointer;
}

@media only screen and (max-width: 629px){
    .header{
        width: 100%;
        height: 100px;
    }
    .title{
        font-size: 54px;
    }
    .players{
        font-size: 22px;
    }
    .columns{
        width: 108px;
        height: 108px;
        font-size: 100px;
    }
    .start{
        font-size: 20px;
        height: 60px;
    }
    .ai{
        font-size: 22px;
        min-width: 100px;
        height: 60px;
    }
}
