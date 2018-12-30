var score, current, activeP, maxScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        document.querySelector('.dice').style.display = 'Block';
        var dice = Math.ceil(Math.random() * 6);
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        if (dice === 1) {
            nextPlayer();
        } else {
            current += dice;
            document.getElementById('current-' + activeP).textContent = current;
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[activeP] += current;
        document.getElementById('score-' + activeP).textContent = scores[activeP];
        if (scores[activeP] >= maxScore) {

            document.getElementById('name-' + activeP).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false;
        } else {

            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0, 0];
    activeP = 0;
    current = 0;
    gamePlaying = true;
    maxScore = document.getElementById('final-score').value;
    console.log(maxScore);
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


function nextPlayer() {
    activeP === 0 ? activeP = 1 : activeP = 0;
    current = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}