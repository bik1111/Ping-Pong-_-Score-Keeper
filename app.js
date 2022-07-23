const p1 = {
    score :0,
    button :document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display')

}
const p2 = {
    score :0,
    button :document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display')

}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#playto')
let isGameOver = false;
let winningScore  = 5; 

function updateScores(player, opponent) {
    if(!isGameOver) { //게임을 계속 진행중이면 
        player.score += 1; //점수 추가 그러다가..
        if(player.score === winningScore) { //목표점수에 도달하면
            isGameOver = true; //게임오버가 true가 되기때문에 +1 을 하지않게됨.
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disalbed = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score
    }


}

p1.button.addEventListener('click', function(){
  updateScores(p1, p2) //p1:player, p2:opponent

})

p2.button.addEventListener('click', function(){
  updateScores(p2, p1) //p2:player , p1:opponent 
})


resetButton.addEventListener('click', reset); //아래에서 설정해놓은 reset 함수 호출 , reset 버튼을 누르면 0:0으로변함

winningScoreSelect.addEventListener('change', function(){
    //this는 winningScoreSelect 의 객체를 지징함.
    winningScore = parseInt(this.value);
    reset(); //이기는 점수를 바꾸면 다시 0:0으로 화면이 바뀌게함.
})



function reset() {
    isGameOver = false; 

    for(let player of [p1,p2]){
        player.score = 0;
        player.display.innerText=0;
        player.display.classList.remove('has-text-success', 'has-text-danger') //p1,p2모두 이기고 질 수 있으므로
        player.button.disabled = false;

    }
}