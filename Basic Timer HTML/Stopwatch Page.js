var update = false;
document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(updateTime));

var beginning = new Date();
var sec = beginning.getSeconds();
var min = beginning.getMinutes();
var hr = beginning.getHours();
var day = beginning.getDate();

var pausedTime = new Date();
var pausedSec = 0;
var pausedMin = 0;
var pausedHr = 0;
var pausedDay = 0;

function toggleTimer(){
  if(document.getElementById("toggle").value == "Start"){          //starting the timer
    document.getElementById("toggle").value = "Pause";
    pausedSec = 0;
    pausedMin = 0;
    pausedHr = 0;
    pausedDay = 0;


    update = true;
  }else if(document.getElementById("toggle").value == "Resume"){  //resuming the timer
    document.getElementById("toggle").value = "Pause";
    pausedTime = new Date();

    //beginning = new Date();
    //sec = beginning.getSeconds();
    //min = beginning.getMinutes();
    //hr = beginning.getHours();
    //day = beginning.getDays();

    update = true;
  }else{                                                          //stopping the timer
    document.getElementById('toggle').value = "Resume";

    pausedTime = new Date();
    pausedSec = 0;
    diff = pausedTime.getTime() - beginning.getTime();
    diffSec = diff / (1000);
    //pausedSec = pausedSec + ;
    //pausedMin = pausedMin + diff / (1000 * 60);
    //pausedHr = pausedHr + diff / (1000 * 3600);
    //pausedDay = pausedDay + diff / (1000 * 3600 * 24);

    update = false;
  }
}

function updateTime() {
  document.documentElement.style.setProperty('--timer-hours', "'" + updateDay() + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + updateHour() + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + updateMinute() + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + updateSecond() + "'");
  requestAnimationFrame(updateTime);
}

function updateSecond() {
  if(update){
    if (moment().format("ss") - sec < 0){
      if(moment().format("ss") - sec == 0){
        updateMinute();
      }else{
        return moment().format("ss") - sec + 60;
      }
    }else {
      return moment().format("ss") - sec;
    }
  }
  else{
    return 0;
  }
}

function updateMinute() {
  if(moment().format("ss") < sec){
    return moment().format("mm") - min - 1;
  }else {
    return moment().format("mm") - min;
  }
}

function updateHour(){
  if(moment().format("mm") < min){
    return moment().format("HH") - hr - 1;
  }else {
    return moment().format("HH") - hr;
  }
}

function updateDay(){
  if(moment().format("HH") < hr){
    return moment().format("dd") - day - 1;
  }else {
    return moment().format("dd") - day;
  }
}
