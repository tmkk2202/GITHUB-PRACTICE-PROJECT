const clockDiv = document.querySelector(".clockDiv")
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const conti = document.querySelector(".continue");
const reset = document.querySelector(".reset");
const msecDiv = document.querySelector('.msecond');

let second = 0, minute = 0, hour = 0, msec =0 ;

let startfunc = () => {
    msec += 1;
    if (msec >= 1000) {
        msec = 0;
        second += 1;
        if (second === 60) {
            second = 0;
            minute += 1;
            if (minute === 60) {
                minute = 0;
                hour += 1;
            }
        }
    }
    displayFunc();    
}

let displayFunc = () => {
    const secText = second < 10 ? "0" + second.toString() : second;
    const minText = minute < 10 ? "0" + minute.toString() : minute;
    const hrText = hour < 10 ? '0'+ hour.toString() : hour;
    const msecText = msec<10 ? "000" + msec.toString() : msec<100 ? "00" + msec.toString() : msec<1000 ? "0" + msec.toString() : msec;
            
    clockDiv.textContent = hrText + ":" + minText + ":" + secText;
    msecDiv.textContent = msecText;

}

let yy;
start.addEventListener('click', () => {
    yy = setInterval(startfunc, 1);
    
});

pause.addEventListener('click', () => {
    clearInterval(yy);
    yy = null;
    
});

conti.addEventListener('click', () => {
    clearInterval(yy);   
    yy = setInterval(startfunc, 1);
    
});

reset.addEventListener('click', () => {
    clearInterval(yy);
    yy = null;
    hour = 0, minute = 0, second = 0, msec = 0;
    displayFunc();
    
    
});