// Take spans and all HTML content
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resButton = document.querySelector('#reset');
const select = document.querySelector('#select')

// Make vars for store the values
let p1Val = 0;
let p2Val = 0;
let maxVal = 5;

// Make "WinGame" controller
let WinGame = false;

// Listener for p1 button
p1Button.addEventListener('click', function(){
    if (!WinGame) {
        p1Val++;
        if (p1Val === maxVal) {
            WinGame = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Score.textContent = p1Val;
    }
})

// Listener for p2 button
p2Button.addEventListener('click', function(){
    if (!WinGame) {
        p2Val++;
        if (p2Val === maxVal) {
            WinGame = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Score.textContent = p2Val;
    }
})

// Listener for reset button
resButton.addEventListener('click', reset)

// Listener for selection
select.addEventListener('change', function(){
    maxVal = Number(this.value);
    reset();
})

// Reset function
function reset(){
    p1Val = 0;
    p2Val = 0;
    p1Score.classList.remove('winner', 'loser');
    p2Score.classList.remove('winner', 'loser');
    p1Score.textContent = p1Val;
    p2Score.textContent = p2Val;
    p1Button.disabled = false;
    p2Button.disabled = false;
    WinGame = false;
}