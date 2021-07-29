const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let intervalId = null;
let hasChangeBgc = false;

const btnStartRef = document.querySelector("[data-action='start']");
const btnStopRef = document.querySelector("[data-action='stop']");

function onStartBtn() {
  //   if ((hasChangeBgc = true)) {
  //     console.log("изменение темы запущено, кнопка старт не активна");
  //     return;
  //   }

  intervalId = setInterval(() => {
    // document.body.style.backgroundColor =
    // colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];

    console.log("изменяю цвет фона");
  }, 1000);
}
btnStartRef.addEventListener("click", onStartBtn);

function onStopBtn() {
  clearInterval(intervalId, console.log("останавливаю изменения цвета фона"));
}
btnStopRef.addEventListener("click", onStopBtn);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
