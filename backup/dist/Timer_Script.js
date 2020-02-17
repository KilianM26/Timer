var intervalID = 0;
var sec = 0;
var min = 0;
var hr = 0;
var millis = 0;

//starts and stops the timer
function toggleTimer() {
  if(document.getElementById("toggle").value == "Start"){          //starting the timer

    document.getElementById("toggle").value = "Pause";
    millis = 0;
    sec = document.getElementById("seconds").value;
    if(!min){min = 0;}
    min = document.getElementById("minutes").value;
    if(!min){min = 0;}
    hr = document.getElementById("hours").value;
    if(!hr){hr = 0;}
    intervalID = setInterval("increment()", 10);

  }else if(document.getElementById("toggle").value == "Resume"){  //resuming the timer

    document.getElementById("toggle").value = "Pause";
    document.getElementById("time").innerHTML = hr+":"+min+":"+sec+"."+millis;
    intervalID = setInterval("increment()", 10);

  }else{                                                          //stopping the timer

    document.getElementById('toggle').value = "Resume";
    clearInterval(intervalID);

  }
}

//decreases time by 10 milliseconds
function increment(){
  //converts seconds, etc. if necessary
  millis --;
  if(millis == 0 && sec == 0 && min == 0 && hr == 0){
    clearInterval(intervalID);
    alert("YOUR TIMER IS DONE BRUH");
  }else if(millis < 0){
    millis = 99
    sec --;
  }else if(sec < 0){
    sec = 59;
    min --;
  }else if(min < 0){
    min = 59;
    hr --;
  }
  if(millis < 10){
    document.getElementById("time").innerHTML = hr+":"+min+":"+sec+".0"+millis;
  }else{
    document.getElementById("time").innerHTML = hr+":"+min+":"+sec+"."+millis;
  }
}

//resets the time on the timer
function reset() {
  document.getElementById('toggle').value = "Start";
  document.getElementById("time").innerHTML = "0:00:00.00";
}