const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifiRoot");
const doorRoot = document.getElementById("doorRoot")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
const waterRoot = document.getElementById("waterRoot");
var temperature = localStorage.getItem("k-temperature");
var wifiString = localStorage.getItem("k-wifiTime");
var doorString = localStorage.getItem("k-doorTime");
var humidity = localStorage.getItem("k-humidity");
var co2 = localStorage.getItem("k-co2");
var wifiOn = localStorage.getItem("k-wifiCheck");
var bright = localStorage.getItem("k-bright");
var electric = localStorage.getItem("k-electric");
var doorOn = localStorage.getItem("k-doorCheck");
var lightOn = localStorage.getItem("k-lightSet");
var water = localStorage.getItem("k-water");

if(!water)
water =0;

if(doorOn == "true")
doorOn = "ON";
else
doorOn = "OFF";

if(wifiOn == "true")
wifiOn = "ON";
else
wifiOn = "OFF";

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
if(lightOn == "OFF")
bright = 0;

if(wifiOn == "ON"){
  wifiString = " - ";
}
 

tempRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + temperature + " °C " + '</h3>';
wifiOn == "OFF" ? wifiRoot.innerHTML +=  '<h4 style="color: red; font-size:20px; margin-top:16px; ">' + " Open Between : " + wifiString + '</h4>' : 0;
wifiRoot.innerHTML +=  '<h3 style="color: #8b1c1c; font-size:22px ; margin-top: 16px ; ">' + wifiOn + '</h3>';
humRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " +  humidity + '</h3>';
co2Root.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " + co2 + '</h3>';
brightRoot.innerHTML += '<h3 style="color: red; font-size:20px; margin-top:16px; ">' + "Brightness is % " +  bright + '</h3>';
brightRoot.innerHTML += '<h3 style="color: #8b1c1c; margin-top: 16px ; font-size:22px; ">' + lightOn + '</h3>';
doorOn == "OFF" ? doorRoot.innerHTML += '<h4 style="color: red; font-size:20px ;margin-top:16px;">'   + " Open Between : " + doorString + '</h4>' : 0;
doorRoot.innerHTML += '<h3 style="color: #8b1c1c; margin-top: 16px ; font-size:22px ">' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3 style="color: red; font-size:20px; ">' +  electric + " kWh"+ '</h3>';
waterRoot.innerHTML += '<h3 style="color: red; font-size:20px;">' + water+ " m³" + '</h3>';