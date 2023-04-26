const counterEL = document.querySelector(".counter");

const barEL = document.querySelector(".loading-bar-front");

let idx = 0;

upadteNum();

function upadteNum() {
  counterEL.innerText = idx + "%";
  barEL.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(upadteNum, 20);
  }
}
