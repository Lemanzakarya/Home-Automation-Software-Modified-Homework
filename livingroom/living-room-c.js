
const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifiRoot");
const doorRoot = document.getElementById("doorRoot")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
const tvRoot = document.getElementById("tvRoot");
var temperature = localStorage.getItem("ba-temperature");
var wifiString = localStorage.getItem("ba-wifiTime");
var doorString = localStorage.getItem("ba-doorTime");
var humidity = localStorage.getItem("ba-humidity");
var co2 = localStorage.getItem("ba-co2");
var wifiOn = localStorage.getItem("ba-wifiCheck");
var bright = localStorage.getItem("ba-bright");
var electric = localStorage.getItem("ba-electric");
var doorOn = localStorage.getItem("ba-doorCheck");
var lightOn = localStorage.getItem("ba-lightSet");
var tvOn = localStorage.getItem("ba-tvOn");
var tvString1 = localStorage.getItem("ba-tv1")
var tvString2 = localStorage.getItem("ba-tv2");

if(doorOn == "true")
doorOn = "ON";
else
doorOn = "OFF";

if(wifiOn == "true")
wifiOn = "ON";
else
wifiOn = "OFF";

if(tvOn == "true")
tvOn = "ON"
else
tvOn = "OFF"

if(!tvString1)
tvString1 = 0

if(!tvString2)
tvString2 = 0


if(!wifiString)
wifiString = "";

if(!doorString)
doorString = "";

if(doorOn == "ON"){
  doorString = " - ";
}

if(!temperature)
temperature = 25;

if(!humidity){
  humidity = 30;
}
if(!co2){
  co2 = 1;
}
if(!bright){
  bright=0;
}

if(!electric){
  electric = 0;
}

if(lightOn == "true")
lightOn = "ON";
else
lightOn = "OFF";



if(wifiOn == "ON"){
  wifiString = " - ";
}

tempRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + temperature + " °C " + '</h3>';
wifiOn == "OFF" ? wifiRoot.innerHTML +=  '<h4 style="color: red; font-size:20px; margin-top:16px; ">' + " Open Between : " + wifiString + '</h4>' : 0;
wifiRoot.innerHTML +=  '<h3 style="color: #8b1c1c; font-size:22px ; margin-top: 16px ; ">' + wifiOn + '</h3>';
humRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " +  humidity + '</h3>';
co2Root.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " + co2 + '</h3>';
brightRoot.innerHTML += '<h3 style="color: red; font-size:20px; margin-top:12px; ">' + "Brightness is % " +  bright + '</h3>';
brightRoot.innerHTML += '<h3 style="color: #8b1c1c;  margin-top: 16px ; font-size:22px; ">' + lightOn + '</h3>';
doorOn == "OFF" ? doorRoot.innerHTML += '<h4 style="color: red; font-size:20px ;margin-top:16px;">'   + " Open Between : " + doorString + '</h4>' : 0;
doorRoot.innerHTML += '<h3 style="color: #8b1c1c; margin-top: 16px ; font-size:22px ">' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3 style="color: red; font-size:20px; ">' +  electric + " kWh"+ '</h3>';
tvOn == "ON" ? tvRoot.innerHTML +=  '<h4 style="color: red; font-size:20px ; margin-top:16px;">' + "Channel : " + tvString1 + '</h4>' : 0;
tvOn == "ON" ? tvRoot.innerHTML +=  '<h4 style="color: red; font-size:20px ;">' + "Volume : % " + tvString2 + '</h4>' : 0;
tvRoot.innerHTML += '<h4 style="color:#8b1c1c; margin-top: 16px ; font-size:22px; ">' + tvOn + '</h4>';   

const electricUsageToday = [10, 15, 20, 25, 30, 35, 40];
const electricUsageThisMonth = [200, 250, 300, 350, 400, 450, 500];
const waterUsageToday = [5, 8, 12, 15, 10, 7, 9];
const waterUsageThisMonth = [100, 120, 150, 130, 110, 140, 160];

// Create electric usage chart
const electricUsageChart = new Chart(document.getElementById('electric-usage-chart'), {
  type: 'line',
  data: {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Today',
        data: electricUsageToday,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
      },
      {
        label: 'This Month',
        data: electricUsageThisMonth,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: true,
      },
    },
  },
});
