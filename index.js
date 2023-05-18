const hoursEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const milliSecondEl = document.getElementById('milliseconds');
const ampmEl = document.getElementById('ampm')

const updateClockHandler = () => {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    
    let ampm = 'AM';
    if (hour > 12 ){
        hour = hour - 12;
        let ampm = 'PM';
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hoursEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;
    
    setTimeout(() => {
        updateClockHandler();
    })
}

updateClockHandler();