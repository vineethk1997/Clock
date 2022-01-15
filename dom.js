function time(){
    
    var hours = document.getElementById(hours);
    var minutes = document.getElementById(minutes);
    var seconds = document.getElementById(seconds);
    var ampm = document.getElementById(AM-PM);

    var now = new Date();
    var a = now.getHours();
    var b = now.getMinutes();
    var c = now.getSeconds();

    hours.innerHTML=a;
    hours.innerHTML=b;
    hours.innerHTML=c;


}
setInterval(time,1000);


