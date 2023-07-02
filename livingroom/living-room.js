const saveButton = document.getElementById("save-button");
const closeButton = document.querySelector(".close-button");
const popup = document.getElementById("popup");
const sendButton = document.getElementById("send-button");
const minInput = popup.querySelector("#min");
const maxInput = popup.querySelector("#max");
const input = popup.querySelector("#input");
const humidityPopup = document.getElementById("humidity-popup");
const closeHumidityPopupButton = document.getElementById("close-humidity-popup-button");
const humiditySetButton = document.getElementById("set-humidity-button");
const humidityInput = document.getElementById("humidity-input");
const humiditySaveButton = document.getElementById("humidity-save-button");
const humiditySendButton = document.getElementById("humidity-send-button");
const co2Popup = document.getElementById("co2-popup");
const closeco2PopupButton = document.getElementById("close-co2-popup-button");
const co2SetButton = document.getElementById("set-co2-button");
const co2Input = document.getElementById("co2-input");
const co2SaveButton = document.getElementById("co2-save-button");
const co2SendButton = document.getElementById("co2-send-button");
const lightPopup = document.getElementById("light-popup");
const closelight = document.getElementById("close-light-popup-button");
const lightSet = document.getElementById("set-light-button");
const lightInput = document.getElementById("light-input");
const lightSave = document.getElementById("light-save-button");
const lightSend = document.getElementById("light-send-button");
const deleteBtnLight = document.querySelector('#light-delete');
const deleteBtnWifi = document.querySelector('#wifi-delete');
const box = document.querySelector('.box');

const wifiSet = document.getElementById("wifi-set");
const wifiPopup = document.getElementById("wifi-popup");
const closeWifiPopupButton = document.getElementById("close-wifi-popup-button");
const wifiSaveButton = document.getElementById("wifi-save-button");
const wifiSendButton = document.getElementById("wifi-send-button");
const wifiOnTimeInput = document.getElementById("wifi-on-time");
const wifiOffTimeInput = document.getElementById("wifi-off-time");
const wifiToggleSwitch = document.getElementById("wifi-toggle-switch");
const lightSwitch = document.getElementById("light-switch")
const lightSlider = document.getElementById("light-slider");
const deleteDoor = document.querySelector('#door-delete');
const doorPopup = document.getElementById("door-popup");
const closeDoorPopupButton = document.getElementById("close-door-popup-button");
const doorSet = document.getElementById("door-set");
const doorToggleSwitch = document.getElementById("door-toggle-switch");
const doorOnTime = document.getElementById("door-on-time");
const doorOffTime = document.getElementById("door-off-time");
const doorSaveButton = document.getElementById("door-save-button");
const doorSendButton = document.getElementById("door-send-button");

const electricPopup = document.getElementById("electric-popup");
const electricClose = document.getElementById("close-electric-popup-button");
const electricSetButton = document.getElementById("set-electric-button");
const electricInput = document.getElementById("electric-input");
let electricSendButton = document.getElementById("electric-send-button");

const deleteTV = document.querySelector('#tv-delete');
const TVPopup = document.getElementById("tv-popup");
const closeTVPopupButton = document.getElementById("close-tv");
const TVSet = document.getElementById("tv-set");
const TVToggleSwitch = document.getElementById("tv-switch");
const TVNumber = document.getElementById("tv-number");
const TVVolume = document.getElementById("tv-volume");
const TVSaveButton = document.getElementById("tv-save-button");
const TVSendButton = document.getElementById("tv-send-button");
const deleteVacum = document.getElementById("vacuum-delete");


TVSendButton.disabled = true;
TVSaveButton.onclick = function() {
  if(TVNumber.value < 1 || TVNumber.value > 250){
    alert("Please enter valid number. ");
    return;
  }
 else if(TVVolume.value < 0 || TVVolume.value > 100){
    alert("Please enter valid number.");
    return;
  }
   else if(isNaN(TVNumber.value) && isNaN(TVVolume.value)){
    alert("Please enter a valid number. ");
    return;
  }
  
 TVSaveButton.disabled = false;
 TVSendButton.disabled = false;
};


TVSendButton.addEventListener("click", () => {
    
  alert("Channel input : " + TVNumber.value +  " Volume input : "  + TVVolume.value );
  localStorage.setItem("ba-tv1",TVVolume.value);
  localStorage.setItem("ba-tv2",TVNumber.value); 
});








const weeklyData = [];
const monthlyData = [];

// Rastgele sayıları oluştur ve gönder
function generateAndSendData() {
  for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 300) + 1; // 1 ile 100 arasında rastgele bir sayı oluşturuluyor
    weeklyData.push(randomNumber);
  }

  for (let i = 0; i < 12; i++) {
    const randomNumber = Math.floor(Math.random() * 3000) + 1; // 1 ile 100 arasında rastgele bir sayı oluşturuluyor
    monthlyData.push(randomNumber);
  }

  // Verileri JSON formatında depolama ve gönderme
  const dataToSend = {
    weeklyData: weeklyData,
    monthlyData: monthlyData
  };
  const jsonData = JSON.stringify(dataToSend);
  localStorage.setItem("electricData", jsonData);
  alert("Data sent to consumer.");


 }

 electricSendButton.addEventListener("click", generateAndSendData);


let intervalId;

function startWifiTimer(onTime, offTime) {
  clearInterval(intervalId);
  
  const now = new Date();
  const onTimeParts = onTime.split(":");
  const onDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(onTimeParts[0]), parseInt(onTimeParts[1]), 0);
  const offTimeParts = offTime.split(":");
  wifiToggleSwitch.onchange = function() {
    wifiSendButton.disabled = true;
  }
  const offDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(offTimeParts[0]), parseInt(offTimeParts[1]), 0);
  
  if (onDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= onDateTime) {
        clearInterval(intervalId);
        alert("Wifi is turned on!");
      }
    }, 1000);
  } else if (offDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= offDateTime) {
        
        clearInterval(intervalId);
        alert("Wifi is turned off!");
      }
    }, 1000);
   
  } 
   else {
    alert("Invalid time settings.");
  }
}

function openWifiPopup() {
  wifiPopup.style.display = "block";
}


closeWifiPopupButton.onclick = function() {
  wifiPopup.style.display = "none";
}


function startDoorTimer(onTime, offTime) {
  clearInterval(intervalId);
  
  const now = new Date();
  const onTimeParts = onTime.split(":");
  const onDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(onTimeParts[0]), parseInt(onTimeParts[1]), 0);
  const offTimeParts = offTime.split(":");wifiToggleSwitch.onchange = function() {
    doorSendButton.disabled = true;
  }
  const offDateTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), parseInt(offTimeParts[0]), parseInt(offTimeParts[1]), 0);
  
  if (onDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= onDateTime) {
        clearInterval(intervalId);
        alert("Door is locked on!");
      }
    }, 1000);
  } else if (offDateTime > now) {
    intervalId = setInterval(() => {
      const currentTime = new Date();
      if (currentTime >= offDateTime) {
        
        clearInterval(intervalId);
        alert("Wifi is locked off!");
      }
    }, 1000);
   
  } 
   else {
    alert("Invalid time settings.");
  }
}


function openDoorPopup() {
  doorPopup.style.display = "block";
}


closeDoorPopupButton.onclick = function() {
  doorPopup.style.display = "none";
}

closeTVPopupButton.onclick = function() {
  TVPopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == doorPopup) {
    doorPopup.style.display = "none";
  }
}



window.onclick = function(event) {
  if (event.target == wifiPopup) {
    wifiPopup.style.display = "none";
  }
}

wifiSendButton.disabled = true;
wifiSaveButton.onclick = function() {
  const wifiOnTime = wifiOnTimeInput.value;
  const wifiOffTime = wifiOffTimeInput.value;
  
  if (wifiToggleSwitch.checked) {
    alert("Wifi is already turned on!");
    return; }
    else{
    const offTime = new Date();
    offTime.setHours(parseInt(wifiOffTime.split(":")[0]));
    offTime.setMinutes(parseInt(wifiOffTime.split(":")[1]));
    offTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (offTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      wifiToggleSwitch.checked = false;
      wifiSendButton.disabled = false;
    }, remainingSeconds * 1000); }
 
  
    const onTime = new Date();
    onTime.setHours(parseInt(wifiOnTime));
    onTime.setMinutes(0);
    onTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (onTime.getTime() - now.getTime()) / 1000;

    if(wifiSaveButton.checked = true){
    setTimeout(function() {
     wifiSendButton.disabled = false;
    }, remainingSeconds * 1000);
  
  wifiSendButton.disabled = false;
}
doorSendButton.disabled = true; }

doorSaveButton.onclick = function() {
  const DoorOnTime = doorOnTime.value;
  const DoorOffTime = doorOffTime.value;
  
  if (doorToggleSwitch.checked) {
    alert("Lock is already on!");
    return; }
    else{
    const offTime = new Date();
    offTime.setHours(parseInt(DoorOffTime.split(":")[0]));
    offTime.setMinutes(parseInt(DoorOffTime.split(":")[1]));
    offTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (offTime.getTime() - now.getTime()) / 1000;
    
    setTimeout(function() {
      doorToggleSwitch.checked = false;
      doorSendButton.disabled = false;
    }, remainingSeconds * 1000); }
 
    // Set timer for turning on wifi
    const onTime = new Date();
    onTime.setHours(parseInt(doorOnTime));
    onTime.setMinutes(0);
    onTime.setSeconds(0);
    
    const now = new Date();
    const remainingSeconds = (onTime.getTime() - now.getTime()) / 1000;
   
   
    if(isNaN(doorOnTime.value) ||isNaN(doorOnTime.value) ) {
    setTimeout(function() {
     
      doorSendButton.disabled = false;
    }, remainingSeconds * 1000); 
    doorSendButton.disabled = false;}
    else{
      doorSaveButton.disabled = true;
      doorSendButton.disabled = true;
    }
  
}


wifiSendButton.onclick = function() {
  alert("Wifi will turn on at " + wifiOnTimeInput.value + " and turn off at " + wifiOffTimeInput.value );
 wifiPopup.style.display = "none";
 localStorage.setItem("ba-wifiTime", wifiOnTimeInput.value + " - " + wifiOffTimeInput.value);
}

doorSendButton.onclick = function() {
   
  alert("Door will be locked  at " + doorOnTime.value + " and be locked off at " + doorOffTime.value );
  localStorage.setItem("ba-doorTime", doorOnTime.value + " - " + doorOnTime.value);
  doorPopup.style.display = "none";
}

deleteBtnLight.addEventListener('click', function() {
  this.closest('.box').remove();
});

deleteVacum.addEventListener('click', function() {
  this.closest('.box').remove();
});

deleteBtnWifi.addEventListener('click', function() {
  this.closest('.box').remove();
});

deleteDoor.addEventListener('click', function() {
  this.closest('.box').remove();
});
deleteTV.addEventListener('click', function() {
  this.closest('.box').remove();
});




wifiToggleSwitch.checked = localStorage.getItem("ba-wifiCheck") == "true" ? true : false;
wifiToggleSwitch.addEventListener('change', function() {
  localStorage.setItem("ba-wifiCheck",wifiToggleSwitch.checked);
  wifiSet.disabled = wifiToggleSwitch.checked;
});
doorToggleSwitch.checked = localStorage.getItem("ba-doorCheck") == "true" ? true : false;
doorToggleSwitch.addEventListener('change', function() {
  localStorage.setItem("ba-doorCheck",doorToggleSwitch.checked);
  doorSet.disabled = doorToggleSwitch.checked;
});


lightSlider.checked = localStorage.getItem("ba-lightSet") == "true" ? true : false;
lightSlider.addEventListener('change', function() {
  localStorage.setItem("ba-lightSet",lightSlider.checked);
  lightSet.disabled = !lightSlider.checked;
});

TVToggleSwitch.checked = localStorage.getItem("ba-tvOn") == "true" ? true : false;
TVToggleSwitch.addEventListener('change', function() {
  localStorage.setItem("ba-tvOn",TVToggleSwitch.checked);
  TVSet.disabled = !TVToggleSwitch.checked;
});


saveButton.onclick = function() {
  let userInput = parseInt(input.value);
  if (isNaN(userInput)) {
    alert("Please enter valid temperature!");
    sendButton.disabled = true;
    return;
  }
  sendButton.disabled = false;
};

sendButton.onclick = function() {
  let userInput = parseInt(input.value);
  if (userInput < 18 || userInput > 30) {
    alert("Please enter a value between " + "18" + " and " + "30");

    return;
  }
  sendButton.disabled = true;
  alert("User input: " + userInput);
  localStorage.setItem("ba-temperature",userInput);
};

function openPopup() {
 
  event.preventDefault();
  popup.style.display = "block";
}

function closePopup() {
  event.preventDefault();
  popup.style.display = "none";
}
window.onload = function() {
  document.getElementById("popup").style.display = "none";
}

lightSave.onclick = function() {
  let userInput = parseInt(lightInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for brigtness!");
    return;
  }
 lightSave.disabled = false;
 
};


lightSend.onclick = function() {
  let userInput = parseInt(lightInput.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number!");
    return;
  }
  localStorage.setItem("ba-bright",lightInput.value);
 lightSend.disabled = true;
  alert("User input: " + userInput);
};

lightInput.addEventListener("input", function() {
  if (lightInput.value !== "" ||lightInput.value < 0) {
   lightSave.disabled = false; 
  } else {
    lightSave.disabled = true;
  
  }
});
lightSave.addEventListener("click" , function() {
    
  if (lightInput.value < 0 ||lightInput.value > 100) {
    alert("Please enter number between 0 - 100 ");
    lightSave.disabled = true;
    return;
  } else {
   lightSend.disabled = false;
};});


lightInput.addEventListener("input", function() {
    
  if (lightInput.value.trim() === "" || parseInt(lightInput.value) < 0 || parseInt(lightInput.value) > 100 ) {
     lightSave.disabled = true;
    lightSend.disabled = true;
    
    } else {
lightSave.disabled = false;
      
  
    }
  });





humiditySetButton.addEventListener("click", function() {
  humidityPopup.style.display = "block";
});


closeHumidityPopupButton.addEventListener("click", function() {
  humidityPopup.style.display = "none";
});


humidityInput.addEventListener("input", function() {
  if (humidityInput.value !== "" || humidityInput.value < 0 ) {
    humiditySendButton.disabled = false;
  } 
  humiditySendButton.disabled = true;
});


humiditySendButton.onclick = function() {
  let userInput = parseInt(humidityInput.value);
  if (isNaN(userInput) ) {
    alert("Please enter a valid number for humidity!");
    return;
  }
  humiditySendButton.disabled = false;
  localStorage.setItem("ba-humidity",humidityInput.value);
  alert("User input: " + humidityInput.value);
};

humiditySaveButton.addEventListener("click" , function() {
  if(humidityInput.value < 30 ||humidityInput.value > 70){
    alert("Please enter a valid number for humidity!");
    humiditySendButton.disabled = true;
    
  }
  else{
    humiditySendButton.disabled = false;
  }

  });


co2SendButton.onclick = function() {
  let userInput = parseInt(co2Input.value);
  if (isNaN(userInput)) {
    alert("Please enter a valid number for co2!");
    return;
  }
  co2SendButton.disabled = false;
  localStorage.setItem("ba-co2",co2Input.value);
  alert("User input: " + userInput);
 
};
co2SaveButton.addEventListener("click" , function() {
  let userInput = parseInt(co2Input.value);
  if (userInput < 0 ||userInput > 10) {
    alert("Please enter a valid number for humidity!");
    co2SendButton.disabled = true;
  } else {
  co2SendButton.disabled = false;
};});


co2Input.addEventListener("input", function() {
  if (co2Input.value !== "" || co2Input.value < 0) {
    co2SendButton.disabled = false;
  
  } else {
   co2SendButton.disabled = true;
  
  }
});
  
   function openHumidityPopup() {
  
  humidityPopup.style.display = "block";
}



function closeco2Popup(){
  event.preventDefault();
 co2Popup.style.display = "none";
}

closelight.addEventListener("click", function() {
 lightPopup.style.display = "none";
});


closeButton.addEventListener("click", closePopup);
closeco2PopupButton.addEventListener("click" , closeco2Popup);

co2SetButton.addEventListener("click", function() {
  co2Popup.style.display = "block";
});
lightSet.addEventListener("click", function() {
  lightPopup.style.display = "block";
});




function openCo2Popup(){
  co2Popup.style.display = "block";
}

function openLightPopup(){
  lightPopup.style.display = "block";
}

closeco2PopupButton.addEventListener("click", function() { co2Popup.style.display = "none"; });

window.onclick = function(event) {
  if (event.target == humidityPopup) {
    humidityPopup.style.display = "none";
  } else if (event.target == co2Popup) {
    co2Popup.style.display = "none";
  }
  else if (event.target == lightPopup) {
  lightPopup.style.display = "none"; }

  
}


function openTVPopup() {
  TVPopup.style.display = "block";
}
closeTVPopupButton.addEventListener("click", function() {
 TVPopup.style.display = "none";
 });
 
 TVSet.addEventListener("click", function() {
  TVPopup.style.display = "block";
});

lightInput.addEventListener("input", function() {
  if (lightInput.value !== "" ||lightInput.value < 0) {
   lightSave.disabled = false; 
  } else {
    lightSave.disabled = true;
  }
});

TVVolume.addEventListener("input", function() {
  if (TVVolume.value !== "" ) {
   TVSave.disabled = false; 
  } else {
    TVSave.disabled = true;
  }
});
TVNumber.addEventListener("input", function() {
  if (TVNumber.value !== "" ) {
   TVSave.disabled = false; 
  } else {
    TVSave.disabled = true;
  }
});

  