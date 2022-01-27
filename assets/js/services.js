const timer = document.getElementById('timer');
const btns = document.getElementsByClassName('detailsBtn');
console.log(btns)
let minutes;
let seconds;

if (localStorage.getItem('minutes')) minutes = parseInt(localStorage.getItem('minutes'));
else minutes = 10;

if (localStorage.getItem('seconds')) seconds = parseInt(localStorage.getItem('seconds'));
else seconds = 0;

setInterval(function () {
  if (seconds === 0) {
    minutes -= 1;
    seconds = 59;
  }
  else seconds -= 1;
  timer.textContent = `**Offer ends in: ${minutes}m:${seconds}s`;
}, [1000]);

btns[0].addEventListener('click', function(){handleClick('preventive-maintenance')});
btns[1].addEventListener('click', function(){handleClick('body-repair-service')});
btns[2].addEventListener('click', function(){handleClick('car-care-service')});

function handleClick(page){
  localStorage.setItem('minutes', `${minutes}`);
  localStorage.setItem('seconds', `${seconds}`);
  location.assign(`http://127.0.0.1:5500/${page}.html`);
}