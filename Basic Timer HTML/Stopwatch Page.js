var intervalID = 0;
var day = 0;
var sec = 0;
var min = 0;
var hr = 0;
var millis = 0;

document.getElementById("days").innerHTML = 0;
document.getElementById("hours").innerHTML = 0;
document.getElementById("minutes").innerHTML = 0;
document.getElementById("seconds").innerHTML = 0;

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

//increases time by 10 milliseconds
function increment(){
  //converts seconds, etc. if necessary
  millis ++;
  if(millis > 99){
    millis = 0;
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
function toggleReset() {
  document.getElementById('toggle').value = "Start";

  clearInterval(intervalID);
  day = 0;
  sec = 0;
  min = 0;
  hr = 0;
  millis = 0;

  document.getElementById("days").innerHTML = day.toString();
  document.getElementById("hours").innerHTML = hr.toString();
  document.getElementById("minutes").innerHTML = min.toString();
  document.getElementById("seconds").innerHTML = sec.toString();
}
