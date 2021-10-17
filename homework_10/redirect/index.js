const progressBar = document.getElementById("bar");
const loadingMsg = document.getElementById("loading");
let barWidth = 0;

const animate = () => {
  barWidth++;
  progressBar.style.width = `${barWidth}%`;
};

let i = 0;
// animation starts 2 seconds after page load
setTimeout(() => {
  let intervalID = setInterval(() => {
    if (barWidth === 100) {
      clearInterval(intervalID);
      setTimeout(() => {
        window.open("https://maxima.life", "_self");
      }, 100);
    } else {
      animate();
      loadingMsg.innerHTML = `вы будите перенаправлены через ${100 - i} секунд`;
      i += 1;
    }
  }, 100);
  //this sets the speed of the animation
}, 2000);
