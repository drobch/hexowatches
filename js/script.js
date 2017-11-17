var clock = document.getElementById('clock');
var color = document.getElementById('color');
var day = document.getElementById('day');
var icons = document.getElementsByClassName('fa');


function hexoClock() {
    var time = new Date();
    var h = (time.getHours() % 12).toString();
    var m = time.getMinutes().toString();
    var s = time.getSeconds().toString();
     

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    var dayName = days[time.getDay()];
    
    var clockString = h + ':' + m + ':' + s;
    var colorString = '#' + h + m + s;  
    var colorString2 = '#' + h + m + s; 
    var dayString = "What a nice " + dayName.toString() + "!";
    
    clock.textContent = clockString;
    color.textContent = colorString;
    day.textContent = dayString;
    
    var grad = 'linear-gradient(' + colorString + ',wheat)';
    
    document.body.style.background = grad;
    day.style.color = colorString;

    for(var i = 0; i < icons.length; i++) {
        icons[i].style.color = colorString;
    }

}

hexoClock();
setInterval(hexoClock, 1000);