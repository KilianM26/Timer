var intervalID = 0;
var day = 0;
var sec = 0;
var min = 0;
var hr = 0;
var millis = 0;

//starts and stops the timer
function toggleTimer() {
  if(document.getElementById("toggle").value == "Start"){          //starting the timer

    document.getElementById("toggle").value = "Pause";
    intervalID = setInterval("increment()", 10);

  }else if(document.getElementById("toggle").value == "Resume"){  //resuming the timer

    document.getElementById("toggle").value = "Pause";
    intervalID = setInterval("increment()", 10);

  }else{                                                          //stopping the timer

    document.getElementById('toggle').value = "Resume";
    clearInterval(intervalID);

  }
}

//decreases time by 10 milliseconds
function increment(){
  //converts seconds, etc. if necessary
  millis ++;
  if((millis == 0 && sec == 0 && min == 0 && hr == 0 && day == 0)){
    clearInterval(intervalID);
    alert("YOUR TIMER IS DONE BRUH");
  }else if(millis > 99){
    millis = 0
    sec ++;
  }else if(sec > 59){
    sec = 0;
    min ++;
  }else if(min > 59){
    min = 00;
    hr ++;
  }else if(hr > 23){
    hr = 0;
    day ++;
  }else{
    document.getElementById("days").innerHTML = day.toString();
    document.getElementById("hours").innerHTML = hr.toString();
    document.getElementById("minutes").innerHTML = min.toString();
    document.getElementById("seconds").innerHTML = sec.toString();
  }
}

//resets the time on the timer
function reset() {
  document.getElementById('toggle').value = "Start";
  document.getElementById("days").innerHTML = 0;
  document.getElementById("hours").innerHTML = 0;
  document.getElementById("minutes").innerHTML = 0;
  document.getElementById("seconds").innerHTML = 0;
}

/**
var update = false;
document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(updateTime));

var beginning = new Date();
var sec = beginning.getSeconds();
var min = beginning.getMinutes();
var hr = beginning.getHours();
var day = beginning.getDays();

var pausedTime = new Date();
var pausedSec = 0;
var pausedMin = 0;
var pausedHr = 0;
var pausedDay = 0;

function toggleReset(){

}
function toggleTimer(){
  if(document.getElementById("toggle").value == "Start"){          //starting the timer
    document.getElementById("toggle").value = "Pause";
    pausedSec = 0;
    pausedMin = 0+0;
    pausedHr = 0+0;
    pausedDay = 0+0;

    update = true;
  }else if(document.getElementById("toggle").value == "Resume"){  //resuming the timer
    document.getElementById("toggle").value = "Pause";

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
    alert(diffSec);
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
  if(update){
    if(moment().format("ss") < sec){
      return moment().format("mm") - min - 1;
    }else {
      return moment().format("mm") - min;
    }
  }else {
    return 0;
  }
}

function updateHour(){
  if(update){
    if(moment().format("mm") < min){
      return moment().format("HH") - hr - 1;
    }else {
      return moment().format("HH") - hr;
    }
  }else {
    return 0;
  }
}

function updateDay(){
  if(update){
    if(moment().format("HH") < hr){
      return moment().format("dd") - day - 1;
    }else {
      return moment().format("dd") - day;
    }
  }else {
    return 0;
  }
}
*/
