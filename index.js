let wakeUpTime=null, lunchTime=null, napTime=null;
let wakeUpTimeFlag=false, lunchTimeFlag=false,napTimeFlag=false;  

function box(){
    
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("am_pm");

    var now = new Date();
    var a = now.getHours();
    var b = now.getMinutes();
    var c = now.getSeconds();

   
    var d = a < 12 ? 'am' : 'pm';

    hours.innerHTML=(a%12 < 10) ? `0${a%12}` : a%12;
    minutes.innerHTML= (b < 10) ? `0${b}` : b;
    seconds.innerHTML= (c < 10) ? `0${c}` : c;
    ampm.innerHTML=d;

    var milliSeconds = now.getMilliseconds();
    
    if(wakeUpTime !== null && wakeUpTimeFlag === false && wakeUpTime == a) {
        wakeUpTimeFlag = true;
        document.getElementById("image").style.backgroundImage="url(./wakeup_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Morning";
        let resetTime = (60*60000) - (b*60000) - c * 1000 - milliSeconds*100;
        setTimeout(() => {
            wakeUpTimeFlag = false;
        }, resetTime)
        
    }

   if(napTime !== null && napTimeFlag === false && napTime == a) {
        napTimeFlag = true;
        document.getElementById("image").style.backgroundImage="url(./goodnight_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Night";
        let resetTime = (60*60000) - (b*60000) - c * 1000 - milliSeconds*100;
        setTimeout(() => {
            document.getElementById("image").style.backgroundImage="url(./wakeup_image.png)";
            document.getElementById("downimagetext").innerHTML="Good Morning";
            napTimeFlag = false;
        }, resetTime)
    } 

    if(lunchTime !== null && lunchTimeFlag === false && lunchTime == a) {
        lunchTimeFlag = true;
        document.getElementById("image").style.backgroundImage="url(./lunch_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Afternoon ";
        let resetTime = (60*60000) - (b*60000) - c * 1000 - milliSeconds*100;

        setTimeout(() => {
            document.getElementById("image").style.backgroundImage="url(./wakeup_image.png)";
            document.getElementById("downimagetext").innerHTML="Good Morning";
            lunchTimeFlag = false;
        }, resetTime)
    }
}
setInterval(box,1000);

function changeDisplay(waketime, lunchtime, naptime){

    var insideValue1 = document.getElementById("wakeuptime");
    var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

    var insideValue2 = document.getElementById("lunchtime");
    var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

    var insideValue3 = document.getElementById("dinnertime");
    var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

    if (waketime == "none") {
    document.getElementById("eleven").innerHTML = "Wake up time : ";
    } else {
    document.getElementById("eleven").innerHTML =
    "Wake up time : " + invalue1;
    }

    if (lunchtime == "none") {
    document.getElementById("twelve").innerHTML = "Lunch time : ";
    } else {
    document.getElementById("twelve").innerHTML =
    "Lunch time : " + invalue2;
    }

    if (naptime == "none") {
    document.getElementById("thirteen").innerHTML = "Nap time : ";
    } else {
    document.getElementById("thirteen").innerHTML = "Nap time : " + invalue3;
    }

    document.getElementById("message").style.display = "block";
}


function display(){
    var one = document.getElementById("wakeuptime").value;
    var two = document.getElementById("lunchtime").value;
    var three = document.getElementById("dinnertime").value;

    wakeUpTime = (one === "none") ? null : one;
    lunchTime = (two === "none") ? null : two;
    napTime = (three === "none") ? null : three;

    changeDisplay(one, two, three);
}