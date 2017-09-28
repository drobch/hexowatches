var color = document.getElementById("color");
var clock = document.getElementById("clock");
 
function hexoClock() {
    var time = new Date();
    h = (time.getHours( % 12)).toString();
    m = time.getMinutes().toString();
    s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }

    if (m.length < 2) {
        m = '0' + m;
    }

    if (s.length < 2) {
        s = '0' + s;
    }

    var colorString = '#' + h + m + s;
    var clockString = h + ':' + m + ':' + s;

    color.textContent = colorString;
    clock.textContent = clockString;

    document.body.style.background = colorString;
} 
hexoClock();
setInterval(hexoClock,1000);
