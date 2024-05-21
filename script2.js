const time = document.getElementsByClassName("time")[0];
const startBtn = document.getElementsByClassName("startBtn")[0];
const stopBtn = document.getElementsByClassName("stopBtn")[0];
const resetBtn = document.getElementsByClassName("resetBtn")[0];

let second = 0 , minute = 0, hour = 0;

const writeTime = () =>{
    let hourText = hour<10 ? "0" + hour.toString() : hour;
    let minuteText = minute<10 ? "0" + minute.toString() : minute;
    let secondText = second<10 ? "0" + second.toString() : second;

    time.textContent = hourText + ":" + minuteText + ":" + secondText;
}

const countTime = () => {
    second++;
    if(second === 60){
        second = 0;
        minute++;

        if(minute === 60){
            minute = 0;
            hour++;
        }
    }
    
    writeTime();
    
}

let interval;
startBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    interval = setInterval(countTime, 1000);
})

stopBtn.addEventListener("click", ()=>{
    clearInterval(interval);
})

resetBtn.addEventListener("click", ()=>{
    hour = 0, minute = 0, second = 0;

    writeTime();
})