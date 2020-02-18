var date = new Date();
var interval = 0;

function updateTime() {

  date = new Date();
  document.getElementById("day").innerHTML = date.getDate();
  document.getElementById("hour").innerHTML = date.getHours();
  document.getElementById("minute").innerHTML = date.getMinutes();
  document.getElementById("second").innerHTML = date.getSeconds();
  interval = setInterval("updateTime()", 10);

}

function switchTimer(){
  window.location.href = "Timer_Page.html";
}

function switchStopwatch(){
  window.location.href = "Stopwatch_Page.html";
}
