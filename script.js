const time = document.getElementsByClassName("time")[0];
const dayContainer = document.getElementsByClassName("dayContainer")[0];

const dayArray = ["Sunday", "Monday" , "Tuesday" ,"Wednesday", "Thursday", "Friday", "Saturday"];

const getCurrentTime = () => {
    const currentTime = new Date();
    let day = currentTime.getDay();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    let hourText = hour<10 ? "0" + hour.toString() : hour;
    let minuteText = minute<10 ? "0" + minute.toString() : minute;
    let secondText = second<10 ? "0" + second.toString() : second;

    dayContainer.textContent = dayArray[day];
    time.textContent = hourText + ":" + minuteText + ":" + secondText;
}

setInterval(getCurrentTime, 1000);