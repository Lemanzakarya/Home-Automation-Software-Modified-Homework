const tempRoot = document.getElementById("tempRoot");
const wifiRoot = document.getElementById("wifiRoot");
const doorRoot = document.getElementById("doorRoot")
const humRoot = document.getElementById("humRoot");
const co2Root = document.getElementById("co2Root");
const brightRoot = document.getElementById("brightRoot");
const electricRoot = document.getElementById("electricRoot");
const speakerRoot = document.getElementById("speaker-root");
const colorCard = document.getElementById("speaker-card");
var temperature = localStorage.getItem("be-temperature");
var wifiString = localStorage.getItem("be-wifiTime");
var doorString = localStorage.getItem("be-doorTime");
var humidity = localStorage.getItem("be-humidity");
var co2 = localStorage.getItem("be-co2");
var wifiOn = localStorage.getItem("be-wifiCheck");
var bright = localStorage.getItem("be-bright");
var electric = localStorage.getItem("be-electric");
var doorOn = localStorage.getItem("be-doorCheck");
var lightOn = localStorage.getItem("be-lightCheck");
var color = localStorage.getItem("colorBedroom")
var smartOn = localStorage.getItem("smartOn");
var smartLevel = localStorage.getItem("smartLevel");

if(smartOn == "true")
smartOn = "ON"
else
smartOn = "OFF"

if(!smartLevel)
smartLevel = 0;

if(!color)
color = "#fff";
if(doorOn == "true")
doorOn = "ON";
else
doorOn = "OFF";

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

 if(!smartLevel)
 smartLevel = "" ;

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
if(smartOn == "OFF"){
 smartLevel = 0;
}


speakerRoot.innerHTML += '<h4 style="color: red; background-color:white ;  font-size:18px;  margin-top:5% ; border-top-left-radius :5px ;  border-top-right-radius :5px ; margin-top:16px; font-size:20px; ">' + "Volume:  %" + smartLevel + '</h4>';
speakerRoot.innerHTML += '<h4 style="color:#B22222; font-size:20px ; background-color:white;  padding: 0px 46px 5px 45.8px ; border-bottom-left-radius :5px ;  border-bottom-right-radius :5px ; font-size:22px ;">' + smartOn + '</h4>';
tempRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + temperature + " °C " + '</h3>';
wifiOn == "OFF" ? wifiRoot.innerHTML +=  '<h4 style="color: red; font-size:20px; margin-top:16px; ">' + " Open Between : " + wifiString + '</h4>' : 0;
wifiRoot.innerHTML +=  '<h3 style="color: #8b1c1c; font-size:22px ; margin-top: 16px ; ">' + wifiOn + '</h3>';
humRoot.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " +  humidity + '</h3>';
co2Root.innerHTML += '<h3 style="color: red; font-size:25px; margin-top: 12px ; ">' + "% " + co2 + '</h3>';
brightRoot.innerHTML += '<h3 style="color: red; font-size:20px; margin-top:16px; ">' + "Brightness is % " +  bright + '</h3>';
brightRoot.innerHTML += '<h3 style="color: #8b1c1c;  margin-top: 16px ; font-size:22px; ">' + lightOn + '</h3>';
doorOn == "OFF" ? doorRoot.innerHTML += '<h4 style="color: red; font-size:20px ;margin-top:16px;">'   + " Open Between : " + doorString + '</h4>' : 0;
doorRoot.innerHTML += '<h3 style="color: #8b1c1c; margin-top: 16px ; font-size:22px ">' + doorOn + '</h3>'
electricRoot.innerHTML += '<h3 style="color: red; font-size:20px; ">' +  electric + " kWh"+ '</h3>';
colorCard.style.backgroundColor = color;