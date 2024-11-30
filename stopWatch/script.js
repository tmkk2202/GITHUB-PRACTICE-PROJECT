
    
const clockDiv = document.querySelector('.clockDiv');
const msecond = document.querySelector('.msecond');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const conti = document.querySelector('.continue');
const reset = document.querySelector('.reset');

let hour = 0, minute = 0, second = 0, milisecond = 0;
let x;

const displayFunc = () => {
    const msText = milisecond < 10 ? "00" + milisecond.toString() : milisecond < 100 ? "0" + milisecond.toString() : milisecond;
    const secText = second < 10 ? "0" + second.toString() : second;
    const minText = minute < 10 ? "0" + minute.toString() : minute;
    const hrText = hour < 10 ? "0" + hour.toString() : hour;
    clockDiv.textContent = `${ hrText } : ${ minText } : ${ secText }`;
    msecond.textContent = msText;
}
const func = () => {
    milisecond += 1;
    if (milisecond === 1000) {
        second += 1;
        milisecond = 0;
        if (second === 60) {
            minute += 1;
            second = 0;
            if (minute === 60) {
                hour += 1;
                minute = 0;
            }
        }
    }
    
    displayFunc();
        
};


start.addEventListener('click', () => {
    x = setInterval(func, 1);
});

pause.addEventListener('click', () => {
    clearInterval(x);
});

conti.addEventListener('click', () => {
    clearInterval(x);
    x = setInterval(func, 1);
});

reset.addEventListener('click', () => {
    clearInterval(x);
    hour = 0, minute = 0, second = 0, milisecond = 0;
    displayFunc();
});
