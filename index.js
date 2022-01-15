function box(){
    
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("am_pm");

    var now = new Date();
    var a = now.getHours();
    var b = now.getMinutes();
    var c = now.getSeconds();
    a = a % 12;
    var d = a >= 12 ? 'am' : 'pm';

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    ampm.innerHTML=d;


}
setInterval(box,1000);

function changeDisplay(){



let waketime = document.getElementById("wakeuptime").value;
let lunchtime = document.getElementById("lunchtime").value;
let naptime = document.getElementById("dinnertime").value;

var insideValue1 = document.getElementById("wakeuptime");
var invalue1 = insideValue1.options[insideValue1.selectedIndex].text;

var insideValue2 = document.getElementById("lunchtime");
var invalue2 = insideValue2.options[insideValue2.selectedIndex].text;

var insideValue3 = document.getElementById("dinnertime");
var invalue3 = insideValue3.options[insideValue3.selectedIndex].text;

if (waketime == "none") {
document.getElementById("wakeuptime").innerHTML = "";
} else {
document.getElementById("wakeuptime").innerHTML =
"Wake up time : " + invalue1;
}

if (lunchtime == "none") {
document.getElementById("lunchtime").innerHTML = "";
} else {
document.getElementById("lunchtime").innerHTML =
"Lunch time : " + invalue2;
}

if (naptime == "none") {
document.getElementById("dinnertime").innerHTML = "";
} else {
document.getElementById("dinnertime").innerHTML = "Nap time : " + invalue3;
}
}








function display(){
    var one = document.getElementById("wakeuptime").value;
    var time = newDate().getHours();

    if(one == time){
        document.getElementById("image").style.backgroundImage="url(./wakeup_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Morning";
    }

    var two = document.getElementById("lunchtime").value;
    var time = newDate().getHours();

    if(two == time){
        document.getElementById("image").style.backgroundImage="url(./lunch_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Afternoon";
    }

    var three = document.getElementById("dinnertime").value;
    var time = newDate().getHours();

    if(three == time){
        document.getElementById("image").style.backgroundImage="url(./goodnight_image.png)";
        document.getElementById("downimagetext").innerHTML="Good Night";
    }
    changeDisplay();
}