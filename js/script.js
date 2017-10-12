var minion1 = document.getElementById("minion1");
var minion2 = document.getElementById("minion2");
var minion3 = document.getElementById("minion3");
var result = 0;

function startGame(){
  document.getElementById('startBlock').style.display = "none";
  document.getElementById('gameHover').style.display = "none";
  document.getElementById('currentScore').style.display = "block";
  document.getElementById('currentScore').innerHTML = 0;

  init();
};

function init(){
  growMinion();
}


function growMinion(){
  setTimeout(function (){

    if(minion1.offsetHeight > 550 ||
       minion2.offsetHeight > 550 ||
       minion3.offsetHeight > 550 ){
      //game over
      gameOver();
      return false;

    }
    minion1.style.height = minion1.offsetHeight + 10 + 'px';
    minion2.style.height = minion2.offsetHeight + 10 + 'px';
    minion3.style.height = minion3.offsetHeight + 10 + 'px';
    growMinion();
  }, 100);
}

function smashMinions(minion){
  document.getElementById(minion).style.height = 100 + "px";
  result += 1;
  document.getElementById('currentScore').innerHTML = result;
}


function gameOver(){
  minion1.style.height = minion2.style.height = minion3.style.height = '100px';

  document.getElementById("gameHover").style.display = 'block';
  document.getElementById("gameOverBlock").style.display = 'block';
  document.getElementById("result").innerHTML = result;

  result = 0;
}
function restartGame(){
  document.getElementById("gameHover").style.display = 'none';
  document.getElementById("gameOverBlock").style.display = 'none';
  init();
}
