 var scores,roundScore,activePlayer,score,hold,diceRoll,current,newgame,active0,active1,playerName,diceDom;
 active0=document.querySelector('.player-0-panel');
 active0.classList.add("active");
 active1=document.querySelector('.player-1-panel');
 hold = document.querySelector('.btn-hold');
 newgame = document.querySelector('.btn-new');
 diceRoll = document.querySelector('.btn-roll');
 diceDom = document.querySelector('.dice');
 initi();

hold.addEventListener('click',function(){
score = document.querySelector('#score-'+activePlayer);
scores[activePlayer] = scores[activePlayer] + roundScore;
score.textContent = scores[activePlayer];
playerName = document.querySelector('#name-' + activePlayer);
if(scores[activePlayer]>=20)
{
	playerName.textContent = "WINNER !";
	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	alert("Game End");
}
else
toggle();
})


newgame.addEventListener('click',initi);


diceRoll.addEventListener('click',function (){
 	current = document.querySelector('#current-'+activePlayer);
	var dice = Math.floor(Math.random() * (6))+1;
    diceDom.src = "images/d"+dice+".jpg";
    diceDom.style.display = "block";
    if(dice===1)
    {
    	toggle();
    }
    else
    {
    roundScore += dice;
   	current.textContent =roundScore;
    }
})
function toggle()
{
		activePlayer===0 ? activePlayer =1 : activePlayer = 0;
		roundScore = 0;
		active1.classList.toggle('active');
    	current.textContent = roundScore;
    	active0.classList.toggle('active');
}
console.log()
function initi()
{
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 document.querySelector('#score-0').textContent = '0';
 document.querySelector('#score-1').textContent = '0';
 document.querySelector('#current-0').textContent = '0';
 document.querySelector('#current-1').textContent = '0';
 document.querySelector('#name-0').textContent="PLAYER 1";
 document.querySelector('#name-1').textContent="PLAYER 2";
 diceDom.style.display = "none";
 document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
 document.querySelector('.player-0-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
}

