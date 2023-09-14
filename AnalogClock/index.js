const sHand = document.querySelector("#shand");
const mHand = document.querySelector("#mhand");
const hHand = document.querySelector("#hhand");

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const secDeg = ((sec/60) * 360 );
    const minDeg = ((min/60) * 360 );
    const hourDeg = (((hour/12) * 360 )+((1/2)*min));
    sHand.style.transform = `rotate(${secDeg}deg)`;
    mHand.style.transform = `rotate(${minDeg}deg)`;
    hHand.style.transform = `rotate(${hourDeg}deg)`;
    
}

setInterval(setDate,1000);

setDate();

