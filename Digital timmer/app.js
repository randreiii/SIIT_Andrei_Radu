
var hourElement = document.getElementById("hour");
var minuteElement = document.getElementById("minutes");
var secondElement = document.getElementById("seconds");


var hoursCount = 0;
var minutesCount = 0;
var secondsCount = 0;

function updateTimer() {
    secondsCount = secondsCount + 1;

    // secondElement.innerText = secondsCount < 10 ? "0" + secondsCount: secondsCount
    if (secondsCount === 60) {
        secondsCount = 0;
        minutesCount++;
    }

    if (minutesCount === 60) {
        hoursCount++;
        minutesCount = 0;

    }
    
    secondElement.innerText = secondsCount < 10 ? "0" + secondsCount: secondsCount
    minuteElement.innerText = minutesCount < 10 ? "0" + minutesCount : minutesCount;
    hourElement.innerText = hoursCount < 10 ? "0" + hoursCount : hoursCount;

}


var btnCount = 0;
var intervalId;

const btnStart = document.getElementById('start')
btnStart.addEventListener('click', function () {
    if (btnCount < 1) {
        intervalId = setInterval(updateTimer, 1000);
    }
    btnCount++;
})

const btnStop = document.getElementById('stop')
btnStop.addEventListener('click', function () {
    clearInterval(intervalId);
    btnCount = 0;

})

const btnReset = document.getElementById('reset')
btnReset.addEventListener('click', function () {

    document.getElementById("hour").innerText = '00';
    document.getElementById("minutes").innerText = '00';
    document.getElementById("seconds").innerText = '00';

    secondsCount = 0;

})

const btnSave = document.getElementById('save')
const lista = document.querySelector(".lista > p")
btnSave.addEventListener('click', function () {


    const container = document.querySelector('.container')
    var newElement = document.createElement('p')
    lista.appendChild(newElement)

    newElement.innerText = container.innerText;


})
