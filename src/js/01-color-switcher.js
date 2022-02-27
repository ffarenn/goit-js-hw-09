const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector("body")

// random colour generator
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



startBtn.addEventListener('click', (e => {
    e.target.setAttribute('disabled','');
    stopBtn.removeAttribute('disabled')
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);

})
);

stopBtn.addEventListener('click', (e => {
    e.target.setAttribute('disabled', '');
    startBtn.removeAttribute('disabled');
    clearInterval(timerId);
})
);
