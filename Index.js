setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hRotation = (hTime*30) + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    digitaiTime = hTime + " : " + mTime + " : " + sTime;
    // document.getElementById("time").innerHTML = digitalTime;
    digitalTime.innerHTML = digitaiTime;
}, 1000);
// hour.innerHTML = digitaiTime;