var intervalID = 0;
var day = 0;
var sec = 0;
var min = 0;
var hr = 0;
var millis = 0;

//starts and stops the timer
function toggleTimer() {
  if(document.getElementById("toggle").value == "Start"){          //starting the timer

    if(document.getElementById("second_input").value > 59 || document.getElementById("second_input").value < 0){alert("Invalid Input"); return;}
    if(document.getElementById("minute_input").value > 59 || document.getElementById("minute_input").value < 0){alert("Invalid Input"); return;}
    if(document.getElementById("hour_input").value > 23 || document.getElementById("second_input").value < 0){alert("Invalid Input"); return;}
    if(document.getElementById("day_input").value < 0){alert("Invalid Input"); return;}
    
    document.getElementById("toggle").value = "Pause";
    sec = document.getElementById("second_input").value;
    if(!min){min = 0;}
    min = document.getElementById("minute_input").value;
    if(!min){min = 0;}
    hr = document.getElementById("hour_input").value;
    if(!hr){hr = 0;}
    day = document.getElementById("day_input").value;
    if(!day){day = 0;}
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
  millis --;
  if(millis == 0 && sec == 0 && min == 0 && hr == 0 && day == 0){
    clearInterval(intervalID);
    alert("YOUR TIMER IS FINISHED");
  }else if(millis < 0){
    millis = 99
    sec --;
  }else if(sec < 0){
    sec = 59;
    min --;
  }else if(min < 0){
    min = 59;
    hr --;
  }else if(hr < 0){
    hr = 23;
    day --;
  }else{
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
  }
}

//resets the time on the timer
function reset() {
  clearInterval(intervalID);
  document.getElementById('toggle').value = "Start";
  document.getElementById("days").innerHTML = 0;
  document.getElementById("hours").innerHTML = 0;
  document.getElementById("minutes").innerHTML = 0;
  document.getElementById("seconds").innerHTML = 0;
}
